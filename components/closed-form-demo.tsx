"use client";
import { useState } from "react";
import { closedForm } from "@/lib/gradient-descent";

export function ClosedFormDemo() {
  const [noise, setNoise] = useState(0.12);
  const [outlier, setOutlier] = useState(0);
  const points = Array.from({ length: 21 }, (_, i) => ({
    x: i / 10 - 1,
    y:
      0.7 * (i / 10 - 1) +
      0.2 +
      Math.sin(i * 2.3) * noise +
      (i === 18 ? outlier : 0),
  }));
  const fit = closedForm(points);
  const px = (x: number) => 40 + ((x + 1.2) / 2.4) * 440;
  const py = (y: number) => 240 - ((y + 2) / 5) * 210;
  return (
    <section className="content-card ml-demo">
      <p className="eyebrow">SYNTHETIC DATA · SIMPLE LINEAR REGRESSION</p>
      <h2>Solve directly. No training loop.</h2>
      <p>
        Change the noise or move one observation. The least-squares solution
        recalculates immediately; no learning rate or epochs are needed.
      </p>
      <div className="demo-controls">
        <label htmlFor="noise">
          Noise amplitude: {noise.toFixed(2)}
          <input
            id="noise"
            type="range"
            min="0"
            max="0.6"
            step="0.01"
            value={noise}
            onChange={(e) => setNoise(Number(e.target.value))}
          />
        </label>
        <label htmlFor="outlier">
          Outlier offset: {outlier.toFixed(1)}
          <input
            id="outlier"
            type="range"
            min="0"
            max="2"
            step="0.1"
            value={outlier}
            onChange={(e) => setOutlier(Number(e.target.value))}
          />
        </label>
        <button
          className="btn-secondary"
          onClick={() => {
            setNoise(0.12);
            setOutlier(0);
          }}
        >
          Reset
        </button>
      </div>
      <div className="demo-metrics">
        <span>
          Slope<strong>{fit.slope.toFixed(4)}</strong>
        </span>
        <span>
          Intercept<strong>{fit.intercept.toFixed(4)}</strong>
        </span>
        <span>
          Mean squared error<strong>{fit.loss.toFixed(4)}</strong>
        </span>
      </div>
      <div className="demo-charts">
        <figure>
          <figcaption>
            Least-squares line · highlighted observation responds to outlier
            control
          </figcaption>
          <svg
            viewBox="0 0 520 280"
            role="img"
            aria-label={`Least squares fit with slope ${fit.slope.toFixed(3)} and error ${fit.loss.toFixed(4)}`}
          >
            <path d="M40 30V240H480" className="demo-axis" />
            {points.map((p, i) => (
              <circle
                key={i}
                cx={px(p.x)}
                cy={py(p.y)}
                r={i === 18 ? 7 : 4}
                className="demo-point"
              />
            ))}
            <line
              x1={px(-1.2)}
              y1={py(fit.intercept - 1.2 * fit.slope)}
              x2={px(1.2)}
              y2={py(fit.intercept + 1.2 * fit.slope)}
              className="demo-fit"
            />
            <text x="40" y="263">
              −1.2
            </text>
            <text x="455" y="263">
              1.2 x
            </text>
            <text x="10" y="35">
              3
            </text>
            <text x="10" y="240">
              −2
            </text>
          </svg>
        </figure>
        <div>
          <h3>The calculation</h3>
          <p>Slope = Σ(x − mean x)(y − mean y) / Σ(x − mean x)²</p>
          <p>Intercept = mean y − slope × mean x</p>
          <p>
            With zero noise and no outlier, the solution recovers the generating
            line: y = 0.7x + 0.2. A large outlier pulls the fit because squared
            errors amplify large residuals.
          </p>
        </div>
      </div>
      <p>
        This TypeScript teaching demo uses one feature. The Python repository
        also covers multiple regression. Training error here is not a claim
        about performance on unseen data.
      </p>
    </section>
  );
}
