import Link from "next/link";
import { Page } from "@/components/portfolio";
import { GradientDemo } from "@/components/gradient-demo";
export const metadata = { title: "Stochastic Gradient Descent | Rudrapratap Sarma" };
export default function CaseStudy() { return <Page eyebrow="ML FROM SCRATCH · INTERACTIVE CASE STUDY" title="Stochastic Gradient Descent" intro="Update from one shuffled observation at a time. Observe why full-dataset loss can fluctuate even when learning is progressing."><Link className="text-link" href="/projects/ml-from-scratch">← All implementations</Link><GradientDemo method="stochastic" /></Page>; }
