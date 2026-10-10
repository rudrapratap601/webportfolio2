import { Page, ContactCTA } from "@/components/portfolio";
import knowledge from "@/data/knowledge";
import { BriefcaseBusiness, GraduationCap, CalendarDays, MapPin } from "lucide-react";
export const metadata = { title: "Experience | Rudrapratap Sarma" };
export default function Experience() {
  return (
    <Page
      eyebrow="EXPERIENCE & TRAINING"
      title="Learning by doing the work."
      intro="Practical experience in data operations, supported by project-based analytics training."
    >
      <ol className="timeline" aria-label="Experience and training, most recent first">
        {knowledge.experience.map((job) => (
          <li className="timeline-step" key={job.id}>
            <span className="timeline-marker" aria-hidden="true">
              {job.type === "Project-based training" ? <GraduationCap size={18} /> : <BriefcaseBusiness size={18} />}
            </span>
          <article className="content-card timeline-item">
            <header>
              <p className="eyebrow">
                {job.type}
              </p>
              <h2>{job.role}</h2>
              <h3>{job.company}</h3>
              <div className="timeline-meta">
                <span><CalendarDays size={14} aria-hidden="true" />{job.duration}</span>
                {job.location && <span><MapPin size={14} aria-hidden="true" />{job.location}</span>}
              </div>
            </header>
            <div>
              <ul>
                {job.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
          </li>
        ))}
      </ol>
      <ContactCTA />
    </Page>
  );
}
