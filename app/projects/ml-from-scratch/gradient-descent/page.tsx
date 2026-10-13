import Link from "next/link";
import { Page, ContactCTA } from "@/components/portfolio";
import { GradientDemo } from "@/components/gradient-demo";

export const metadata = { title: "Gradient Descent | Rudrapratap Sarma" };
export default function MLCaseStudy() {
  return <Page eyebrow="PROJECT CASE STUDY · MACHINE LEARNING" title="Understanding what happens before predict()." intro="An ongoing exploration of machine learning fundamentals through Python implementations, mathematical explanations, and experiments.">
    <div className="hero-actions"><a className="btn-primary" href="https://github.com/rudrapratap601/ML-From-Scratch" target="_blank" rel="noopener noreferrer">View Python repository ↗</a><Link className="btn-secondary" href="/projects/ml-from-scratch">All implementations</Link></div>
    <div className="content-grid ml-case-grid">
      <article className="content-card"><p className="eyebrow">THE QUESTION</p><h2>How does a model learn?</h2><p>The goal is to understand how a regression model turns prediction errors into parameter updates, and how this differs from solving for coefficients directly.</p></article>
      <article className="content-card"><p className="eyebrow">CURRENT IMPLEMENTATIONS</p><h2>Linear regression, from the ground up.</h2><p>Simple and multiple linear regression, closed-form solutions, and batch, stochastic, and mini-batch gradient descent using Python and NumPy. Notebooks and mathematical explanations accompany the code.</p></article>
    </div>
    <GradientDemo />
    <div className="content-grid ml-case-grid">
      <article className="content-card"><p className="eyebrow">WHAT TO OBSERVE</p><h2>Small steps, different outcomes.</h2><ul><li>A small learning rate makes progress slowly.</li><li>A suitable rate reduces error rapidly on this dataset.</li><li>An excessive rate can increase error instead of reducing it.</li><li>Noise means a fitted line will not pass through every observation.</li></ul></article>
      <article className="content-card"><p className="eyebrow">EVALUATION & NEXT STEPS</p><h2>Make the evidence reproducible.</h2><p>The repository includes manual regression metrics such as MAE, MSE, RMSE, and R². Next steps include automated edge-case tests and comparisons against reference estimators on fixed train/test splits. Classification and clustering are planned; they are not presented as completed work.</p></article>
    </div><ContactCTA />
  </Page>;
}
