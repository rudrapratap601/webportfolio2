import { Page, ContactCTA } from "@/components/portfolio";
import knowledge from "@/data/knowledge";
export const metadata = { title: "About | Rudrapratap Sarma" };
export default function About() {
  return (
    <Page
      eyebrow="BEHIND THE ANALYSIS"
      title="Curiosity, with a practical purpose."
      intro={knowledge.personal.summary}
    >
      <div className="content-grid">
        <article className="content-card">
          <p className="eyebrow">EDUCATION</p>
          <h2>{knowledge.education.degree}</h2>
          <p>{knowledge.education.university}</p>
          <p>2025–2028 · Pursuing · Online & Distance</p>
          <hr />
          <h3>Advanced Diploma in Digital Computer Application</h3>
          <p>IST-C.E.C. Private Limited · 2023</p>
        </article>
        <article className="content-card">
          <p className="eyebrow">MY APPROACH</p>
          <h2>Make the data useful.</h2>
          <p>
            I work through the complete analysis process: extracting and
            validating source data, exploring patterns, defining KPIs, and
            presenting findings through interactive dashboards.
          </p>
          <p>
            Based in {knowledge.personal.location}. Seeking an internship where
            I can contribute to business insights and continue learning.
          </p>
        </article>
      </div>
      <div className="section-heading">
        <h2>The toolkit</h2>
      </div>
      <div className="content-grid">
        {Object.entries(knowledge.skills).map(([group, skills]) => (
          <article className="content-card" key={group}>
            <h2 className="capitalize">{group}</h2>
            <div className="tag-list">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <ContactCTA />
    </Page>
  );
}
