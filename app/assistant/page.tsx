"use client";
import { useEffect, useRef, useState } from "react";
import { Bot, Send, Trash2, Loader2 } from "lucide-react";
import { Page } from "@/components/portfolio";
type Message = { role: "user" | "assistant"; content: string; mode?: string };
const welcome: Message = {
  role: "assistant",
  content:
    "Hello! I’m Rudrapratap’s portfolio assistant. Ask me about his projects, skills, experience, education, or how to get in touch.",
};
const questions = [
  "Tell me about your projects",
  "What are your technical skills?",
  "What is your experience?",
  "How can I contact you?",
];
export default function Assistant() {
  const [messages, setMessages] = useState<Message[]>([welcome]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const controller = useRef<AbortController | null>(null);
  const busy = useRef(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const log = useRef<HTMLDivElement>(null);
  useEffect(() => () => controller.current?.abort(), []);
  useEffect(() => {
    if (log.current) log.current.scrollTop = log.current.scrollHeight;
  }, [messages, loading]);
  async function send(text: string) {
    const question = text.trim();
    if (!question || busy.current) return;
    const prior = messages;
    busy.current = true;
    setLoading(true);
    setError("");
    setInput("");
    setMessages([...prior, { role: "user", content: question }]);
    const abort = new AbortController();
    controller.current = abort;
    const timer = setTimeout(() => abort.abort(), 23000);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: question,
          history: prior
            .slice(1)
            .slice(-10)
            .map(({ role, content }) => ({ role, content })),
        }),
        signal: abort.signal,
      });
      const data = await res.json();
      if (!res.ok || typeof data.response !== "string")
        throw new Error(data.error || "Unable to reply. Please try again.");
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response, mode: data.mode },
      ]);
    } catch (e) {
      setMessages(prior);
      setInput(question);
      setError(
        abort.signal.aborted
          ? "The request timed out. Your question is saved below; please try again."
          : e instanceof Error
            ? e.message
            : "Unable to connect. Please try again.",
      );
    } finally {
      clearTimeout(timer);
      busy.current = false;
      setLoading(false);
      controller.current = null;
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }
  return (
    <Page
      eyebrow="ASK MY PORTFOLIO"
      title="A little context. A clear answer."
      intro="Explore my background in a conversation. Answers use my portfolio information; check important details in the resume."
    >
      <div className="chat-shell">
        <div className="chat-header">
          <div className="flex items-center gap-3">
            <Bot size={22} />
            <div>
              <strong>Portfolio assistant</strong>
              <p>Projects, skills & experience</p>
            </div>
          </div>
          <button
            className="btn-secondary"
            disabled={loading}
            onClick={() => {
              setMessages([welcome]);
              setError("");
              setInput("");
              inputRef.current?.focus();
            }}
          >
            <Trash2 size={15} /> Clear
          </button>
        </div>
        <div
          ref={log}
          role="log"
          aria-label="Conversation"
          aria-live="polite"
          aria-relevant="additions"
          className="chat-log"
        >
          {messages.map((m, i) => (
            <div key={i} className={`chat-message ${m.role}`}>
              <p className="chat-speaker">
                {m.role === "user" ? "You" : "Portfolio assistant"}
              </p>
              <p className="whitespace-pre-wrap break-words">{m.content}</p>
              {m.mode === "portfolio" && (
                <p className="chat-mode">
                  Portfolio answer · AI is currently unavailable
                </p>
              )}
            </div>
          ))}
          {loading && (
            <p
              role="status"
              className="flex items-center gap-2 text-sm text-slate-400"
            >
              <Loader2 className="animate-spin" size={16} /> Thinking…
            </p>
          )}
        </div>
        <div className="chat-compose">
          {messages.length === 1 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {questions.map((q) => (
                <button
                  key={q}
                  disabled={loading}
                  onClick={() => send(q)}
                  className="chat-suggestion"
                >
                  {q}
                </button>
              ))}
            </div>
          )}
          {error && (
            <p role="alert" className="mb-4 text-sm text-amber-200">
              {error}
            </p>
          )}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <label htmlFor="question" className="sr-only">
              Your question
            </label>
            <div className="flex items-end gap-3">
              <textarea
                id="question"
                ref={inputRef}
                value={input}
                maxLength={1500}
                disabled={loading}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter" &&
                    !e.shiftKey &&
                    !e.nativeEvent.isComposing
                  ) {
                    e.preventDefault();
                    send(input);
                  }
                }}
                placeholder="Ask about a project, skill, or experience…"
                rows={2}
              />
              <button
                type="submit"
                className="btn-primary"
                aria-label="Send question"
                disabled={loading || !input.trim()}
              >
                <Send size={18} />
              </button>
            </div>
            <p className="mt-3 text-xs text-slate-400">
              Enter to send · Shift+Enter for a new line · {input.length}/1500
            </p>
          </form>
          <p className="mt-4 text-xs leading-relaxed text-slate-500">
            Your question and recent messages are sent to Groq to generate a
            reply. Avoid sharing sensitive information. This page does not save
            your chat after you leave.
          </p>
        </div>
      </div>
    </Page>
  );
}
