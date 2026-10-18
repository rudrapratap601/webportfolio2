import { ResumeOptions } from "@/components/resume-options";
import { ContactForm } from "@/components/contact-form";
import { Page } from "@/components/portfolio";
import knowledge from "@/data/knowledge";
import { ArrowUpRight, Mail, Github, Linkedin } from "lucide-react";
export const metadata = { title: "Contact | Rudrapratap Sarma" };
export default function Contact() {
  return (
    <Page
      eyebrow="LET’S CONNECT"
      title="Have a question or opportunity?"
      intro="I’m open to internships in Data Analytics and AI/ML. I bring practical Python, SQL, and analytics skills, a foundation in machine learning, and a growing interest in building AI applications."
    >
      <div className="contact-layout"><div className="contact-details">
        <article className="content-card">
          <Mail size={32} className="text-blue-400 mb-6" />
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
          <ResumeOptions />
        </article>
      </div><ContactForm /></div>
    </Page>
  );
}
