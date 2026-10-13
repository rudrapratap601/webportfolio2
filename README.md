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
- Contact includes a Web3Forms message form and a mailto fallback. Configure NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local and the deployment environment, then rebuild. This form routing key is designed to be public; GROQ_API_KEY must remain server-only. The form preserves text on failure and reports success only when Web3Forms confirms it.
- Only the resume-supplied project demo is linked; repository and credential URLs are not invented.
- Set SITE_URL to generate production sitemap URLs. Without it the sitemap is intentionally empty.
- Project illustrations are decorative, not screenshots of the actual applications.

Before publishing, replace the key, set your domain, confirm the resume is the version you want public, and test a real AI conversation on the deployed host.

The assistant defaults to openai/gpt-oss-20b on Groq. GROQ_MODEL can override this. The homepage portrait uses public/profile-pic (1).png.

## Project previews
Cards use real screenshots in public/projects. Platform, Blinkit, and road-accident images were copied from the earlier local my-portfolio project. The trader chart comes from rudrapratap601/trader-sentiment-analysis, output/pnl_vs_sentiment.png. Configure categories, source-code links, and images in components/project-cards.tsx. Both homepage and Projects use this shared gallery. Previews open in an accessible dialog with an original-image link; no dashboard screenshot is presented as a live application.

The gallery defaults to Top 4 (the first four entries in data/knowledge.ts), with two columns on desktop and one on mobile. ML Projects, Pure Python Projects, and AI & DL Projects are ready for future entries and show an empty state until populated. Add matching preview metadata in components/project-cards.tsx. Omit image for decorative bars; image load failures also fall back to bars. The trader project intentionally uses this fallback.

## Certificate links
Edit the url field for each entry in data/knowledge.ts under certifications. Use a public HTTPS certificate URL (issuer verification page, PDF, or publicly shared document). Empty or invalid URLs keep the View certificate button disabled. Valid links open in a new tab. Rebuild/redeploy after updating these source-controlled values; no admin panel or database is required.

### Adding an ML implementation

Edit `data/ml-implementations.ts` and append an entry with a unique `id`, `title`, `family`, `description`, `topics`, and a GitHub `code` URL. The implementations hub creates the card automatically. Use this for completed code; keep planned models in the roadmap text.

For an interactive case study, create a page under `app/projects/ml-from-scratch/<slug>/page.tsx`, then set the entry's optional `caseStudy` to `/projects/ml-from-scratch/<slug>`. Omit it until the page exists. The batch gradient-descent page is a working example. Check both themes and mobile layout before publishing.
