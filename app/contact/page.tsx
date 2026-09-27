import { Page } from "@/components/portfolio";
import knowledge from "@/data/knowledge";
import { ArrowUpRight, Mail, Github, Linkedin } from "lucide-react";
export const metadata = { title: "Contact | Rudrapratap Sarma" };
export default function Contact() {
  return (
    <Page
      eyebrow="LET’S CONNECT"
      title="Have a question or opportunity?"
      intro="I’m looking for data analytics internships and opportunities to put Python, SQL, and business intelligence to work."
    >
      <div className="content-grid">
        <article className="content-card">
          <Mail size={32} className="text-teal-300 mb-6" />
          <h2>Start a conversation.</h2>
          <p>Share a role, a project idea, or a question about my work.</p>
          <a
            className="text-link break-all"
            href={`mailto:${knowledge.contact.email}`}
          >
            {knowledge.contact.email} <ArrowUpRight size={18} />
          </a>
          <p className="mt-6 text-sm">
            Opens your email app. You can also copy the address above.
          </p>
        </article>
        <article className="content-card">
          <p className="eyebrow">FIND ME ONLINE</p>
          <a
            className="contact-row"
            href={knowledge.contact.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github /> GitHub <ArrowUpRight />
          </a>
          <a
            className="contact-row"
            href={knowledge.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin /> LinkedIn <ArrowUpRight />
          </a>
          <hr />
          <p>{knowledge.personal.location}</p>
          <a href="/resume.pdf" download className="text-link">
            Download my resume <ArrowUpRight size={16} />
          </a>
        </article>
      </div>
    </Page>
  );
}
