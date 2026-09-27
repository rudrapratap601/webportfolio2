import Link from "next/link";
import {
  ArrowUpRight,
  Database,
  BarChart3,
  Activity,
  Route,
} from "lucide-react";
import knowledge from "@/data/knowledge";
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
export function ProjectCards() {
  const icons = [Database, BarChart3, Activity, Route];
  const metrics = [
    "5 SQL aggregations · 4 chart types",
    "8,523 products · $1.20M sales dataset",
    "5 market sentiment conditions",
    "235,288 casualties analyzed",
  ];
  return (
    <div className="project-grid">
      {knowledge.projects.map((project, i) => {
        const Icon = icons[i];
        const details =
          "features" in project ? project.features : project.insights;
        return (
          <article
            className="work-card"
            key={project.name}
            id={`project-${i + 1}`}
          >
            <div className={`project-art art-${i}`} aria-hidden="true">
              <Icon size={48} strokeWidth={1} />
              <span>0{i + 1} / ANALYTICS</span>
              <div className="chart-bars">
                {[35, 60, 45, 80, 65, 95, 75].map((h, n) => (
                  <i key={n} style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            <div className="work-body">
              <p className="eyebrow">{metrics[i]}</p>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.technologies.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <details>
                <summary>Explore the project</summary>
                <ul>
                  {details?.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <p>
                  Figures describe the analyzed datasets and project
                  capabilities.
                </p>
              </details>
              {project.demo && (
                <a
                  className="text-link"
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open live application <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </article>
        );
      })}
    </div>
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
