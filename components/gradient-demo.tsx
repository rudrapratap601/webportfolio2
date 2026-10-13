"use client";

import { useCallback, useEffect, useState } from "react";
import { initialFit, observations, step, sampledStep } from "@/lib/gradient-descent";

export function GradientDemo({ method = "batch" }: { method?: "batch" | "stochastic" | "mini-batch" }) {
  const [batchSize, setBatchSize] = useState(5);
  const update = useCallback((fit: ReturnType<typeof initialFit>, rate: number) => method === "batch" ? step(fit, rate) : sampledStep(fit, rate, method === "stochastic" ? 1 : batchSize), [method, batchSize]);
  const [rate, setRate] = useState(0.1);
  const [history, setHistory] = useState(() => [initialFit()]);
  const [running, setRunning] = useState(false);
  const fit = history[history.length - 1];
  const unstable = !Number.isFinite(fit.loss) || fit.loss > 100;
  const finished = fit.epoch >= 200 || unstable;
  useEffect(() => {
    if (!running || finished) return;
    const timer = window.setInterval(
      () =>
        setHistory((previous) => [
          ...previous,
          update(previous[previous.length - 1], rate),
        ]),
      100,
    );
    return () => window.clearInterval(timer);
  }, [running, finished, rate, update]);
  function reset(nextRate = rate) {
    setRunning(false);
    setRate(nextRate);
    setHistory([initialFit()]);
  }
  const px = (x: number) => 40 + ((x + 1.2) / 2.4) * 440;
  const py = (y: number) => 240 - ((y + 1.5) / 3) * 210;
  const maximumLoss = Math.max(...history.map((p) => p.loss), 0.01);
  const lossPoints = history
    .map(
      (p, i) => `${40 + (i / 200) * 440},${240 - (p.loss / maximumLoss) * 210}`,
    )
    .join(" ");
  return (
    <section className="content-card ml-demo" aria-labelledby="demo-heading">
      <p className="eyebrow">TRY IT YOURSELF · SYNTHETIC DATA</p>
      <h2 id="demo-heading">Teach a line to fit the data.</h2>
      <p>
        Each step updates the parameters using {method === "batch" ? "all 21 observations" : method === "stochastic" ? "one shuffled observation" : `up to ${batchSize} shuffled observations`}. The chart measures error across all 21 observations; sampled updates can temporarily increase it.
        Try 0.01 for slow learning, 0.1 for steady progress, and 1.1 to see an
        unstable fit.
      </p>
      <div className="demo-controls">
        {method === "mini-batch" && <label htmlFor="batch-size">Batch size: {batchSize}<input id="batch-size" type="range" min="1" max="21" step="1" value={batchSize} onChange={e => { setBatchSize(Number(e.target.value)); reset(); }} /></label>}
        <label htmlFor="learning-rate">
          Learning rate: <strong>{rate.toFixed(2)}</strong>
          <input
            id="learning-rate"
            type="range"
            min="0.01"
            max="1.1"
            step="0.01"
            value={rate}
            onChange={(event) => reset(Number(event.target.value))}
          />
        </label>
        <button
          className="btn-primary"
          onClick={() => setRunning(!running)}
          disabled={finished}
        >
          {running && !finished ? "Pause" : "Run training"}
        </button>
        <button
          className="btn-secondary"
          disabled={running || finished}
          onClick={() =>
            setHistory((previous) => [
              ...previous,
              update(previous[previous.length - 1], rate),
            ])
          }
        >
          One step
        </button>
        <button className="btn-secondary" onClick={() => reset()}>
          Reset
        </button>
      </div>
      <div className="demo-metrics">
        <span>
          Step <strong>{fit.epoch} / 200</strong>
        </span>
        <span>
          Mean squared error <strong>{fit.loss.toFixed(4)}</strong>
        </span>
        <span>
          Fit{" "}
          <strong>
            y = {fit.slope.toFixed(3)}x {fit.intercept >= 0 ? "+" : "−"}{" "}
            {Math.abs(fit.intercept).toFixed(3)}
          </strong>
        </span>
      </div>
      <div className="demo-charts">
        <figure>
          <figcaption>Observations and current regression line</figcaption>
          <svg
            viewBox="0 0 520 280"
            role="img"
            aria-label={`Regression line after ${fit.epoch} steps`}
          >
            <defs>
              <clipPath id="fit-area">
                <rect x="40" y="30" width="440" height="210" />
              </clipPath>
            </defs>
            <path d="M40 30V240H480" className="demo-axis" />
            <g clipPath="url(#fit-area)">
              {observations.map((p, i) => (
                <circle
                  key={i}
                  cx={px(p.x)}
                  cy={py(p.y)}
                  r="4"
                  className="demo-point"
                />
              ))}
              <line
                x1={px(-1.2)}
                y1={py(-1.2 * fit.slope + fit.intercept)}
                x2={px(1.2)}
                y2={py(1.2 * fit.slope + fit.intercept)}
                className="demo-fit"
              />
            </g>
            <text x="40" y="263">
              −1.2
            </text>
            <text x="460" y="263">
              1.2 x
            </text>
            <text x="8" y="35">
              1.5
            </text>
            <text x="3" y="240">
              −1.5
            </text>
          </svg>
        </figure>
        <figure>
          <figcaption>
            Training loss · vertical scale adjusts automatically
          </figcaption>
          <svg
            viewBox="0 0 520 280"
            role="img"
            aria-label={`Mean squared error is ${fit.loss.toFixed(4)}`}
          >
            <path d="M40 30V240H480" className="demo-axis" />
            <polyline points={lossPoints} className="demo-fit" />
            <text x="40" y="263">
              0
            </text>
            <text x="425" y="263">
              200 steps
            </text>
            <text x="40" y="22">
              Max {maximumLoss.toFixed(3)}
            </text>
          </svg>
        </figure>
      </div>
      <p role="status">
        {unstable
          ? "Training stopped: the error grew too large. Lower the learning rate and try again."
          : fit.epoch >= 200
            ? "Finished 200 steps. Compare the final error with a different learning rate."
            : "Changing the learning rate resets the experiment. You can pause or advance one step at a time."}
      </p>
      <p>
        This browser demo illustrates {method} gradient descent in TypeScript. The
        linked repository contains the Python implementations. These values are
        illustrative training results, not held-out model evaluation.
      </p>
    </section>
  );
}
