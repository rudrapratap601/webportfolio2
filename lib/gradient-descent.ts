// Fixed synthetic observations; these are teaching data, not project results.
export const observations = Array.from({ length: 21 }, (_, i) => {
  const x = i / 10 - 1;
  return { x, y: 0.7 * x + 0.2 + Math.sin(i * 2.3) * 0.12 };
});
export type Fit = { slope: number; intercept: number; loss: number; epoch: number };
export function measure(slope: number, intercept: number): number {
  return observations.reduce((sum, p) => sum + (slope * p.x + intercept - p.y) ** 2, 0) / observations.length;
}
export function initialFit(): Fit {
  return { slope: -0.6, intercept: -0.45, loss: measure(-0.6, -0.45), epoch: 0 };
}
export function step(fit: Fit, rate: number): Fit {
  let slopeGradient = 0;
  let interceptGradient = 0;
  for (const p of observations) {
    const error = fit.slope * p.x + fit.intercept - p.y;
    slopeGradient += 2 * p.x * error / observations.length;
    interceptGradient += 2 * error / observations.length;
  }
  const slope = fit.slope - rate * slopeGradient;
  const intercept = fit.intercept - rate * interceptGradient;
  return { slope, intercept, loss: measure(slope, intercept), epoch: fit.epoch + 1 };
}

export function sampledStep(fit: Fit, rate: number, batchSize: number): Fit {
  if (!Number.isInteger(batchSize) || batchSize < 1 || batchSize > observations.length) throw new Error('Invalid batch size');
  // Seeded Fisher-Yates shuffle per pass makes reset/replay reproducible.
  const batches = Math.ceil(observations.length / batchSize);
  const pass = Math.floor(fit.epoch / batches);
  let seed = pass + 12345;
  const order = observations.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    seed = (Math.imul(1664525, seed) + 1013904223) >>> 0;
    const j = Math.floor((seed / 4294967296) * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  const start = (fit.epoch % batches) * batchSize;
  const batch = order.slice(start, start + batchSize).map(i => observations[i]);
  let ds = 0, db = 0;
  for (const p of batch) {
    const error = fit.slope * p.x + fit.intercept - p.y;
    ds += 2 * p.x * error / batch.length;
    db += 2 * error / batch.length;
  }
  const slope = fit.slope - rate * ds, intercept = fit.intercept - rate * db;
  return { slope, intercept, loss: measure(slope, intercept), epoch: fit.epoch + 1 };
}

export function closedForm(points: { x: number; y: number }[]) {
  if (points.length < 2) throw new Error('At least two observations required');
  const meanX = points.reduce((s,p) => s+p.x,0)/points.length;
  const meanY = points.reduce((s,p) => s+p.y,0)/points.length;
  const variance = points.reduce((s,p) => s+(p.x-meanX)**2,0);
  if (variance === 0) throw new Error('Inputs must contain distinct x values');
  const slope = points.reduce((s,p) => s+(p.x-meanX)*(p.y-meanY),0)/variance;
  const intercept = meanY-slope*meanX;
  return { slope, intercept, loss: points.reduce((s,p) => s+(slope*p.x+intercept-p.y)**2,0)/points.length };
}
