import { Page, ContactCTA } from "@/components/portfolio";
import knowledge from "@/data/knowledge";
export const metadata = { title: "Experience | Rudrapratap Sarma" };
export default function Experience() {
  return (
    <Page
      eyebrow="EXPERIENCE & TRAINING"
      title="Learning by doing the work."
      intro="Practical experience in data operations, supported by project-based analytics training."
    >
      <div className="timeline">
        {knowledge.experience.map((job, i) => (
          <article className="content-card timeline-item" key={job.company}>
            <div>
              <p className="eyebrow">
                {i === 0 ? "INTERNSHIP" : "PROJECT-BASED TRAINING"}
              </p>
              <p>{job.duration}</p>
              <p>Remote</p>
            </div>
            <div>
              <h2>{job.role}</h2>
              <h3>{job.company}</h3>
              <ul>
                {job.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <ContactCTA />
    </Page>
  );
}
