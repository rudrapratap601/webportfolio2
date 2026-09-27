"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="page-shell">
      <h1 className="page-title">Something went wrong.</h1>
      <p className="page-intro">Please try loading the page again.</p>
      <button className="btn-primary" onClick={reset}>
        Try again
      </button>
    </main>
  );
}
