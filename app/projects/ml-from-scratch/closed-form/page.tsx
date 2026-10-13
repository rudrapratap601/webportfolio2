import Link from "next/link";
import { Page } from "@/components/portfolio";
import { ClosedFormDemo } from "@/components/closed-form-demo";
export const metadata = { title: "Closed-form Linear Regression | Rudrapratap Sarma" };
export default function CaseStudy() { return <Page eyebrow="ML FROM SCRATCH · INTERACTIVE CASE STUDY" title="Closed-form Linear Regression" intro="Explore a direct least-squares solution and how noise and outliers affect it."><Link className="text-link" href="/projects/ml-from-scratch">← All implementations</Link><ClosedFormDemo /></Page>; }
