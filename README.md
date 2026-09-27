# Rudrapratap Sarma — Portfolio

Responsive Next.js portfolio with four resume projects, experience, education, certificates, a downloadable resume, and a Groq-backed portfolio assistant.

## Local setup

Use Node.js 22 or 24 and npm.

1. Run `npm ci` in `webportfolio2`.
2. Copy `.env.example` to `.env.local` only if you do not already have one.
3. Replace `GROQ_API_KEY` with your valid key. Never prefix it with NEXT_PUBLIC_.
4. Run `npm run dev` and open http://localhost:3000.

The existing local key is not changed. Restart the server after editing environment variables.

## Deploy on Netlify

- Repository base directory: `webportfolio2` (leave blank if this folder itself is the repository root).
- Build command: `npm run build`.
- Publish directory: `.next`.
- Node version: 22.
- The included `netlify.toml` enables the Next.js adapter; the chat API needs server functions, so do not use static export.
- Set `GROQ_API_KEY`, optional `GROQ_MODEL`, and `SITE_URL` (your actual HTTPS origin) in the host environment before building.
- Redeploy after changing environment variables.

For Vercel, import the same project, choose Next.js, set the root directory as above and the same environment variables. No separate database is needed.

## Assistant behavior

The browser sends up to ten recent messages to the server. Groq is called server-side with portfolio context from `data/knowledge.ts`; the key is never bundled in browser code. Invalid requests and system-role history are rejected. Requests are size-limited, and provider calls time out after 18 seconds.

Without a key, with an expired key, or when Groq fails, the assistant returns explicitly labeled keyword-based portfolio answers. This fallback does not interpret conversational follow-ups; ask a specific question. Set `CHAT_MODE=portfolio` for an entirely local fallback preview. In AI mode, questions and recent history are sent to Groq; the UI discloses this. The application does not persist conversations.

A bounded 30-request/minute per-instance guard reduces accidental bursts. Serverless instances do not share counters: configure host-level WAF/rate limiting and provider usage limits for a public deployment. AI output remains probabilistic; validate important answers against the resume.

## Validation

- `npm run lint`
- `npm run typecheck`
- `npm test`
- `npm run build`
- `npm start`

Tests cover malformed requests, oversized bodies, injected roles, fallback answers, provider errors, successful AI replies, and burst protection. AI success is mocked; verify the real provider once you replace the key.

## Content maintenance

- Shared profile and chatbot facts: `data/knowledge.ts`.
- Homepage highlights and project presentation: `app/page.tsx`, `components/portfolio.tsx`.
- Resume: `public/resume.pdf`.
- Email and social links: shared knowledge and footer.
- Contact uses a real mailto link, not a form claiming to send messages.
- Only the resume-supplied project demo is linked; repository and credential URLs are not invented.
- Set SITE_URL to generate production sitemap URLs. Without it the sitemap is intentionally empty.
- Project illustrations are decorative, not screenshots of the actual applications.

Before publishing, replace the key, set your domain, confirm the resume is the version you want public, and test a real AI conversation on the deployed host.
