import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, Sparkles } from "lucide-react";
import { Layout } from "@/components/layout";
import { ProjectCards, ContactCTA } from "@/components/portfolio";
export default function Home() {
  return (
    <Layout>
      <div className="home-shell">
        <section className="hero-grid">
          <div>
            <p className="eyebrow">
              <span className="status-dot" /> OPEN TO DATA ANALYTICS INTERNSHIPS
            </p>
            <h1>
              Turning data
              <br />
              into <em>direction.</em>
            </h1>
            <p className="hero-name">
              Rudrapratap Sarma <span>/ Data Analytics</span>
            </p>
            <p className="hero-description">
              I connect messy datasets, find the patterns that matter, and build
              dashboards that make the next decision clearer.
            </p>
            <div className="hero-actions">
              <Link href="/projects" className="btn-primary">
                Explore my work <ArrowUpRight size={18} />
              </Link>
              <a href="/resume.pdf" download className="btn-secondary">
                <Download size={16} /> Resume
              </a>
            </div>
            <div className="hero-tools">
              PYTHON <span>/</span> SQL <span>/</span> POWER BI <span>/</span>{" "}
              STREAMLIT
            </div>
          </div>
          <figure className="portrait-panel">
            <div className="portrait-orbit" aria-hidden="true" />
            <div className="portrait-image"><Image src="/profile-pic%20(1).png" alt="Rudrapratap Sarma" width={2048} height={2048} sizes="(max-width: 800px) 85vw, 430px" priority /></div>
            <span className="portrait-badge"><span className="status-dot" /> Let’s build something useful.</span>
            <figcaption><div><span className="eyebrow">THE PERSON BEHIND THE DATA</span><strong>Rudrapratap Sarma</strong><span>Data Analytics · Python · Business Intelligence</span></div><span className="portrait-mark" aria-hidden="true">rs.</span></figcaption>
          </figure>
        </section>
        <div className="proof-strip">
          <div>
            <strong>04</strong>
            <span>Featured projects</span>
          </div>
          <div>
            <strong>02</strong>
            <span>Work & training experiences</span>
          </div>
          <div>
            <strong>BCA</strong>
            <span>Manipal University Jaipur · 2025–28</span>
          </div>
        </div>
        <section className="work-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SELECTED WORK / 01—04</p>
              <h2>Built around real questions.</h2>
            </div>
            <Link href="/projects" className="text-link">
              All projects <ArrowUpRight size={17} />
            </Link>
          </div>
          <ProjectCards />
        </section>
        <section className="assistant-banner">
          <Sparkles size={32} />
          <div>
            <p className="eyebrow">A CONVERSATION WITH MY PORTFOLIO</p>
            <h2>Curious about my work?</h2>
            <p>Ask my assistant about projects, skills, and experience.</p>
          </div>
          <Link className="btn-secondary" href="/assistant">
            Ask a question <ArrowUpRight size={16} />
          </Link>
        </section>
        <ContactCTA />
      </div>
    </Layout>
  );
}
