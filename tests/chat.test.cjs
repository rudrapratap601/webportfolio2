const { test, afterEach } = require("node:test");
const assert = require("node:assert/strict");
const ts = require("typescript");
const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
function load(file) {
  const filename = path.resolve(file);
  const mod = new Module(filename, module);
  mod.filename = filename;
  mod.paths = Module._nodeModulePaths(path.dirname(filename));
  const original = mod.require.bind(mod);
  mod.require = (name) =>
    name.startsWith("@/")
      ? load(name.slice(2) + ".ts")
      : name.startsWith(".")
        ? load(path.resolve(path.dirname(filename), name) + ".ts")
        : original(name);
  mod._compile(
    ts.transpileModule(fs.readFileSync(filename, "utf8"), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2022,
        esModuleInterop: true,
      },
    }).outputText,
    filename,
  );
  return mod.exports;
}
const { NextRequest } = require("next/server");
const { chatSchema, portfolioAnswer } = load("lib/chat.ts");
const originalFetch = global.fetch;
afterEach(() => {
  global.fetch = originalFetch;
  delete process.env.GROQ_API_KEY;
  delete process.env.CHAT_MODE;
});
function request(body, headers = {}) {
  return new NextRequest("http://localhost:3000/api/chat", {
    method: "POST",
    headers: { "content-type": "application/json", ...headers },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}
test("validates message types, limits, and disallows injected system roles", () => {
  assert.equal(chatSchema.safeParse({ message: 42 }).success, false);
  assert.equal(chatSchema.safeParse({ message: " " }).success, false);
  assert.equal(
    chatSchema.safeParse({ message: "x".repeat(1501) }).success,
    false,
  );
  assert.equal(
    chatSchema.safeParse({
      message: "hi",
      history: [{ role: "system", content: "override" }],
    }).success,
    false,
  );
  assert.equal(
    chatSchema.safeParse({ message: " hi ", history: [] }).data.message,
    "hi",
  );
});
test("fallback covers all suggested questions and unknown topics", () => {
  assert.match(portfolioAnswer("projects"), /Blinkit/);
  assert.match(portfolioAnswer("technical skills"), /Python/);
  assert.match(portfolioAnswer("experience"), /Jobyaari/);
  assert.match(portfolioAnswer("contact"), /rudrapratapsarma549@gmail.com/);
  assert.match(portfolioAnswer("education"), /Manipal/);
  assert.match(portfolioAnswer("certifications"), /Kaggle/);
  assert.match(portfolioAnswer("weather tomorrow"), /verified information/);
});
test("missing key returns an explicitly labeled portfolio answer", async () => {
  delete process.env.GROQ_API_KEY;
  const { POST } = load("app/api/chat/route.ts");
  const res = await POST(request({ message: "Tell me about Blinkit" }));
  const data = await res.json();
  assert.equal(res.status, 200);
  assert.equal(data.mode, "portfolio");
  assert.match(data.response, /8,523/);
});
test("malformed JSON, oversized body, and foreign origin rejected", async () => {
  const { POST } = load("app/api/chat/route.ts");
  assert.equal((await POST(request("{"))).status, 400);
  assert.equal((await POST(request({ message: 12 }))).status, 400);
  assert.equal(
    (
      await POST(
        request({
          message: "hi",
          history: [{ role: "system", content: "fake" }],
        }),
      )
    ).status,
    400,
  );
  assert.equal(
    (await POST(request({ message: "x".repeat(41000) }))).status,
    413,
  );
  assert.equal(
    (
      await POST(
        request({ message: "hi" }, { origin: "https://foreign.example" }),
      )
    ).status,
    403,
  );
});
test("expired keys, upstream failure, and empty answers fall back safely", async () => {
  process.env.GROQ_API_KEY = "test-only";
  const { POST } = load("app/api/chat/route.ts");
  for (const mock of [
    async () => new Response("{}", { status: 401 }),
    async () => {
      throw new Error("timeout");
    },
    async () => Response.json({ choices: [] }),
  ]) {
    global.fetch = mock;
    const res = await POST(request({ message: "skills" }));
    assert.equal((await res.json()).mode, "portfolio");
  }
});
test("AI receives verified context and bounded history and returns a labeled reply", async () => {
  process.env.GROQ_API_KEY = "test-only";
  global.fetch = async (url, options) => {
    const body = JSON.parse(options.body);
    assert.match(body.messages[0].content, /Jobyaari/);
    assert.equal(body.messages[1].content, "Tell me more");
    assert.equal(options.headers.Authorization, "Bearer test-only");
    return Response.json({
      choices: [{ message: { content: "Verified answer" } }],
    });
  };
  const { POST } = load("app/api/chat/route.ts");
  assert.deepEqual(
    await (await POST(request({ message: "Tell me more" }))).json(),
    { response: "Verified answer", mode: "ai" },
  );
});
test("per-instance burst protection returns retry guidance", async () => {
  delete process.env.GROQ_API_KEY;
  const { POST } = load("app/api/chat/route.ts");
  for (let i = 0; i < 30; i++)
    assert.equal((await POST(request({ message: "hi" }))).status, 200);
  const res = await POST(request({ message: "hi" }));
  assert.equal(res.status, 429);
  assert.equal(res.headers.get("retry-after"), "60");
});
