import { Page, ProjectCards, ContactCTA } from "@/components/portfolio";
export const metadata = { title: "Projects | Rudrapratap Sarma" };
export default function Projects() {
  return (
    <Page
      eyebrow="THE WORK"
      title="From datasets to decisions."
      intro="Four projects across analytics platforms, retail performance, trader behavior, and road safety. Explore the methods and findings behind each one."
    >
      <ProjectCards />
      <ContactCTA />
    </Page>
  );
}
