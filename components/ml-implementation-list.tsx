"use client";
import { useState } from "react";
import Link from "next/link";
import { BookOpen, Code2, ChevronDown } from "lucide-react";
import { mlImplementations, mlGroups } from "@/data/ml-implementations";
import { SearchSort } from "./search-sort";
export function MLImplementationList() {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<string[]>([]);
  const [sort, setSort] = useState("default");
  const visible = mlImplementations
    .filter((item) =>
      [
        item.title,
        item.description,
        item.family,
        mlGroups.find((group) => group.id === item.group)?.title,
        ...item.topics,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
    )
    .sort((a, b) =>
      sort === "default"
        ? 0
        : sort === "az"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title),
    );
  return (
    <>
      <SearchSort
        query={query}
        sort={sort}
        onQuery={setQuery}
        onSort={setSort}
        label="models and methods"
        placeholder="Find a model, method, or tool…"
      />
      <p role="status">
        Showing {visible.length} of {mlImplementations.length} implementations
      </p>
      <div className="ml-group-list">
        {mlGroups.map((group) => {
          const items = visible.filter((item) => item.group === group.id);
          const total = mlImplementations.filter((item) => item.group === group.id).length;
          const searching = query.trim().length > 0;
          if (searching && !items.length && !group.title.toLowerCase().includes(query.trim().toLowerCase())) return null;
          const open = searching || expanded.includes(group.id);

          return (
            <section key={group.id} className={`ml-group${open ? " ml-group-open" : ""}`}>
              <h2>
                <button
                  type="button"
                  className="ml-group-toggle"
                  aria-expanded={open}
                  aria-controls={`group-${group.id}`}
                  onClick={() => setExpanded((current) => current.includes(group.id)
                    ? current.filter((id) => id !== group.id)
                    : [...current, group.id])}
                >
                  <span>
                    <span className="ml-group-title">{group.title}</span>
                    <span className="ml-group-description">{group.description}</span>
                    <span className="ml-group-count">{total ? `${total} implementations · Explore models` : "Coming soon"}</span>
                  </span>
                  <ChevronDown size={20} aria-hidden="true" className={open ? "rotate-180" : ""} />
                </button>
              </h2>
              <div id={`group-${group.id}`} hidden={!open}>
                {items.length > 0 ? (
                  <div className="content-grid ml-group-models">
        {items.map((item) => (
          <article
            key={item.id}
            className="content-card ml-method-card"
            id={item.id}
          >
            <p className="eyebrow">{item.family}</p>
            <h3>{item.title}</h3>
            <span className="project-category">
              {item.caseStudy
                ? "Code + interactive demo"
                : "Code + explanation"}
            </span>
            <p className="ml-method-description">{item.description}</p>
            <div className="tag-list">
              {item.topics.map((topic) => (
                <span key={topic}>{topic}</span>
              ))}
            </div>
            <div className="ml-method-actions">
              <a
                href={item.code}
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code2 size={16} /> View implementation
                <span className="sr-only"> for {item.title}</span>
              </a>
              {item.caseStudy && (
                <Link href={item.caseStudy} className="btn-primary">
                  <BookOpen size={16} /> Case study & demo
                  <span className="sr-only"> for {item.title}</span>
                </Link>
              )}
            </div>
          </article>
        ))}
                  </div>
                ) : (
                  <p className="ml-group-empty">No implementations published yet. Models and demos will appear here as I add them.</p>
                )}
              </div>
            </section>
          );
        })}
      </div>

      {visible.length === 0 && (
        <p className="project-empty">
          No implementations match your search. Try another term or reset the
          search.
        </p>
      )}
    </>
  );
}
