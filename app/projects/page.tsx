import { Page, ProjectCards, ContactCTA } from "@/components/portfolio";
export const metadata = { title: "Projects | Rudrapratap Sarma" };
export default function Projects() {
  return (
    <Page
      eyebrow="THE WORK"
      title="From datasets to decisions."
      intro="Explore analytics platforms, retail performance, trader behavior, road safety, machine learning from scratch, and pure Python applications. Filter by category to discover the methods and implementations behind each project."
    >
      <ProjectCards />
      <ContactCTA />
    </Page>
  );
}
