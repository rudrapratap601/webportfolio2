import Link from "next/link";
import { Page } from "@/components/portfolio";
import { GradientDemo } from "@/components/gradient-demo";
export const metadata = { title: "Mini-batch Gradient Descent | Rudrapratap Sarma" };
export default function CaseStudy() { return <Page eyebrow="ML FROM SCRATCH · INTERACTIVE CASE STUDY" title="Mini-batch Gradient Descent" intro="Choose a batch size and watch the tradeoff between sample-wise updates and full-batch updates."><Link className="text-link" href="/projects/ml-from-scratch">← All implementations</Link><GradientDemo method="mini-batch" /></Page>; }
