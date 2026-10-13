import Link from "next/link";
import { MLImplementationList } from "@/components/ml-implementation-list";
import { ArrowUpRight } from "lucide-react";
import { Page, ContactCTA } from "@/components/portfolio";
import { mlImplementations } from "@/data/ml-implementations";

export const metadata = { title: "ML Implementations | Rudrapratap Sarma" };
export default function MLImplementations() {
  return <Page eyebrow="MACHINE LEARNING FROM SCRATCH" title="One algorithm at a time." intro="Explore the mathematics, Python code, and experiments behind my implementations. This collection grows as I work through new models and methods.">
    <div className="hero-actions">
      <Link href="/projects" className="btn-secondary">Back to projects</Link>
      <a href="https://github.com/rudrapratap601/ML-From-Scratch" className="text-link" target="_blank" rel="noopener noreferrer">Full repository <ArrowUpRight size={16} /></a>
    </div>
    <div className="ml-hub-summary"><span>{mlImplementations.length} implemented methods</span><span>{mlImplementations.filter(item => item.caseStudy).length} interactive case studies</span><span>Python & NumPy</span></div>
    <MLImplementationList />
    <section className="content-card"><p className="eyebrow">THE JOURNEY CONTINUES</p><h2>More models as I build them.</h2><p>Logistic regression, K-nearest neighbors, decision trees, support vector machines, K-means, and PCA are on the repository roadmap. They will get implementation cards here as they are completed. The current collection focuses on linear regression; the four cards represent methods within that model family.</p></section>
    <ContactCTA />
  </Page>;
}
