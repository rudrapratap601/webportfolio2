export const mlGroups = [
  { id: "regression", title: "Regression", description: "Predict continuous values and explore how models fit numerical data." },
  { id: "classification", title: "Classification", description: "Predict classes and explore decision boundaries and probabilities." },
  { id: "clustering", title: "Clustering", description: "Discover groups and structure in unlabeled data." },
  { id: "dimensionality-reduction", title: "Dimensionality Reduction", description: "Explore compact representations of high-dimensional data." },
] as const;

export type MLImplementation = {
  id: string;
  title: string;
  family: string;
  group: typeof mlGroups[number]["id"];
  description: string;
  topics: string[];
  code: string;
  caseStudy?: string;
};

const base = "https://github.com/rudrapratap601/ML-From-Scratch/tree/main/linear_regression";

// Add a completed implementation here to create its hub card automatically.
// Add caseStudy only once the matching internal page exists.
export const mlImplementations: MLImplementation[] = [
  {
    id: "linear-regression-closed-form",
    caseStudy: "/projects/ml-from-scratch/closed-form",
    title: "Linear Regression · Closed Form",
    family: "Supervised learning / Regression",
    group: "regression",
    description: "Explore how simple and multiple linear regression solve for coefficients directly using algebra and matrix operations.",
    topics: ["Python", "NumPy", "Least squares", "Normal equation"],
    code: `${base}/closed_form`,
  },
  {
    id: "linear-regression-batch-gd",
    title: "Linear Regression · Batch Gradient Descent",
    family: "Supervised learning / Regression",
    group: "regression",
    description: "Update the model using the full training dataset at each step. Adjust the learning rate in the interactive demo and observe the fit and loss.",
    topics: ["Python", "NumPy", "Gradients", "Learning rate"],
    code: `${base}/gradient_descent/batch_gd`,
    caseStudy: "/projects/ml-from-scratch/gradient-descent",
  },
  {
    id: "linear-regression-sgd",
    caseStudy: "/projects/ml-from-scratch/stochastic-gradient-descent",
    title: "Linear Regression · Stochastic Gradient Descent",
    family: "Supervised learning / Regression",
    group: "regression",
    description: "Study parameter updates from one observation at a time, with shuffled training samples and feature scaling in the Python implementation.",
    topics: ["Python", "NumPy", "Sample-wise updates", "Feature scaling"],
    code: `${base}/gradient_descent/stochastic_gd`,
  },
  {
    id: "linear-regression-mini-batch",
    caseStudy: "/projects/ml-from-scratch/mini-batch-gradient-descent",
    title: "Linear Regression · Mini-batch Gradient Descent",
    family: "Supervised learning / Regression",
    group: "regression",
    description: "Group observations into smaller batches for each parameter update. Explore batch size, shuffled samples, and stopping criteria in the source code.",
    topics: ["Python", "NumPy", "Batch size", "Convergence"],
    code: `${base}/gradient_descent/mini_batch_gd`,
  },
];
