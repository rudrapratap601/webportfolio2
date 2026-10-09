"use client";

import { useRef, useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const busy = useRef(false);
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    if (!accessKey) { setError("The form is temporarily unavailable. Please use the email link instead."); setState("error"); return; }
    const fields = new FormData(form);
    if (fields.get("botcheck")) return;
    busy.current = true;
    setState("sending");
    setError("");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: accessKey, from_name: "Rudrapratap’s Portfolio", name: String(fields.get("name")).trim(), email: String(fields.get("email")).trim(), subject: String(fields.get("subject")).trim(), message: String(fields.get("message")).trim(), botcheck: "" }),
        signal: AbortSignal.timeout(20000),
      });
      const data = await response.json();
      if (!response.ok || data.success !== true) throw new Error("Your message could not be sent. Please try again or contact me by email.");
      form.reset();
      setState("success");
    } catch (err) {
      setError(err instanceof DOMException && (err.name === "TimeoutError" || err.name === "AbortError") ? "The request timed out. Delivery is unconfirmed; your message is still here. Please check before retrying." : "Your message could not be confirmed. Your text is saved below; please try again or use email.");
      setState("error");
    } finally { busy.current = false; }
  }

  return <section className="message-card" aria-labelledby="message-title">
    <p className="eyebrow">START SOMETHING GOOD</p>
    <h2 id="message-title">Send a message.</h2>
    <p className="message-intro">An opportunity, an idea, or just a hello — I’d love to hear it.</p>
    <form onSubmit={submit}>
      <fieldset disabled={state === "sending"}>
        <legend className="sr-only">Contact details and message</legend>
        <div className="message-fields">
          <label htmlFor="contact-name">Your name<input id="contact-name" name="name" autoComplete="name" placeholder="Your name" required maxLength={100} pattern=".*\S.*" /></label>
          <label htmlFor="contact-email">Your email<input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} /></label>
        </div>
        <label htmlFor="contact-subject">Subject<input id="contact-subject" name="subject" placeholder="What’s this about?" required maxLength={150} pattern=".*\S.*" /></label>
        <label htmlFor="contact-message">Message<textarea id="contact-message" name="message" placeholder="Tell me about your opportunity or idea…" required minLength={10} maxLength={5000} rows={6} /></label>
        <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden="true" />
        <button type="submit" className="btn-primary message-submit" disabled={!accessKey || state === "sending"}>{state === "sending" ? <><Loader2 className="animate-spin" size={18} /> Sending…</> : <><Send size={18} /> Send message</>}</button>
      </fieldset>
      {state === "success" && <p role="status" className="form-success"><CheckCircle2 size={18} /> Your message was submitted successfully. Thank you for reaching out!</p>}
      {state === "error" && <p role="alert" className="form-error">{error}</p>}
      {!accessKey && <p className="form-error">The form is temporarily unavailable. You can still reach me by email.</p>}
      <p className="form-privacy">Your details are sent through Web3Forms so I can reply to your message.</p>
    </form>
  </section>;
}
