import Link from "next/link";
import { Page } from "@/components/portfolio";
import knowledge from "@/data/knowledge";
import { Award, ExternalLink } from "lucide-react";
export const metadata = { title: "Certificates | Rudrapratap Sarma" };
function certificateUrl(value: string) {
  try {
    const url = new URL(value.trim());
    return url.protocol === "https:" ? url.href : null;
  } catch { return null; }
}

export default function Certificates() {
  return (
    <Page
      eyebrow="CONTINUOUS LEARNING"
      title="Foundations for better analysis."
      intro="Training and certifications listed in my resume, spanning Python, data analysis, visualization, and machine learning fundamentals."
    >
      <div className="content-grid">
        {knowledge.certifications.map((cert) => {
          const url = certificateUrl(cert.url);
          return (
          <article className="content-card flex flex-col items-start" key={cert.title}>
            <Award className="mb-6 text-blue-400" size={30} />
            <p className="eyebrow">{cert.provider}</p>
            <h2>{cert.title}</h2>
            <div className="mt-auto pt-5">
              {url ? (
                <a href={url} target="_blank" rel="noopener noreferrer" className="btn-primary" aria-label={"View certificate: " + cert.title + " (opens in a new tab)"}>
                  View certificate <ExternalLink size={16} aria-hidden="true" />
                </a>
              ) : (
                <>
                  <button type="button" className="btn-secondary" disabled>View certificate <ExternalLink size={16} aria-hidden="true" /></button>
                  <p className="mt-2 text-xs text-muted-foreground">Certificate link coming soon.</p>
                </>
              )}
            </div>
          </article>
        );
        })}
      </div>
      <p className="mt-8 text-muted-foreground">
        For certificate documents, please{" "}
        <Link className="text-link" href="/contact">
          contact me
        </Link>
        .
      </p>
    </Page>
  );
}
