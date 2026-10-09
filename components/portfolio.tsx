import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export { ProjectCards } from "./project-cards";
import { Layout } from "./layout";
export function Page({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <section className="page-shell">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="page-title">{title}</h1>
        <p className="page-intro">{intro}</p>
        {children}
      </section>
    </Layout>
  );
}
export function ContactCTA() {
  return (
    <div className="contact-cta">
      <div>
        <p className="eyebrow">LET’S CONNECT</p>
        <h2>
          Good questions deserve
          <br />
          clear answers.
        </h2>
      </div>
      <Link className="btn-primary" href="/contact">
        Get in touch <ArrowUpRight size={18} />
      </Link>
    </div>
  );
}
