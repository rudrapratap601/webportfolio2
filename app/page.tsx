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
          <div className="hero-panel">
            <div className="panel-top">
              <span>FROM RAW DATA TO INSIGHT</span>
              <span className="status-dot" />
            </div>
            <div className="insight-number">
              500<span>+</span>
            </div>
            <p>job opportunities structured</p>
            <div className="signal-chart" aria-hidden="true">
              {[24, 38, 32, 52, 45, 64, 58, 78, 71, 92, 84, 100].map(
                (height, i) => (
                  <div key={i} style={{ height: `${height}%` }} />
                ),
              )}
            </div>
            <div className="panel-bottom">
              <span>35+ source documents</span>
              <span>Jobyaari internship ↗</span>
            </div>
            <div className="panel-note">
              Extract. Clean. Analyze. Communicate.
            </div>
          </div>
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
