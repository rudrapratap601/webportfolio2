import { Page } from "@/components/portfolio";
import knowledge from "@/data/knowledge";
import { Award } from "lucide-react";
export const metadata = { title: "Certificates | Rudrapratap Sarma" };
export default function Certificates() {
  return (
    <Page
      eyebrow="CONTINUOUS LEARNING"
      title="Foundations for better analysis."
      intro="Training and certifications listed in my resume, spanning Python, data analysis, visualization, and machine learning fundamentals."
    >
      <div className="content-grid">
        {knowledge.certifications.map((cert) => (
          <article className="content-card" key={cert.title}>
            <Award className="mb-6 text-teal-300" size={30} />
            <p className="eyebrow">{cert.provider}</p>
            <h2>{cert.title}</h2>
          </article>
        ))}
      </div>
      <p className="mt-8 text-muted-foreground">
        For certificate documents, please{" "}
        <a className="text-link" href={`mailto:${knowledge.contact.email}`}>
          contact me
        </a>
        .
      </p>
    </Page>
  );
}
