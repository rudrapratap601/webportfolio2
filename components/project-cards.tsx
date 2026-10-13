"use client";

import { useState } from "react";
import Link from "next/link";
import { SearchSort } from "./search-sort";
import Image from "next/image";
import { ArrowUpRight, Github, Expand, Activity } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import knowledge from "@/data/knowledge";
import { projectCategories } from "@/data/projects";
const categories = ["Top 4", ...projectCategories];

export function ProjectCards({
  featuredOnly = false,
}: {
  featuredOnly?: boolean;
}) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");
  const [category, setCategory] = useState("Top 4");
  const [selected, setSelected] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<number[]>([]);
  const selectedImage =
    selected !== null
      ? knowledge.projects[selected].image
      : undefined;
  const visible = knowledge.projects
    .map((project, index) => ({ project, index }))
    .filter(({ project }) =>
      featuredOnly || category === "Top 4"
        ? knowledge.featuredProjects.includes(project.name)
        : project.category === category,
    )
    .filter(({project}) => featuredOnly || [project.name, project.description, ...project.technologies, project.category].join(" ").toLowerCase().includes(query.trim().toLowerCase()))
  .sort((a,b) => featuredOnly || sort === "default" ? 0 : sort === "az" ? a.project.name.localeCompare(b.project.name) : b.project.name.localeCompare(a.project.name));
  return (
    <>
      {!featuredOnly && (
        <div
          className="project-filters"
          role="group"
          aria-label="Filter projects by category"
        >
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
      {!featuredOnly && <SearchSort query={query} sort={sort} onQuery={setQuery} onSort={setSort} label={`in ${category}`} />}
      <p className={featuredOnly ? "sr-only" : "mb-6 text-sm text-muted-foreground"} role="status">
        Showing {visible.length} projects
      </p>
      <div className="project-grid screenshot-grid">
        {visible.map(({ project, index }) => {
          const image = failedImages.includes(index)
            ? undefined
            : project.image;
          const details =
            project.features;
          return (
            <article
              className="work-card screenshot-card"
              key={project.id}
              id={`project-${index + 1}`}
            >
              {image ? (
                <button
                  type="button"
                  className="project-preview"
                  onClick={() => setSelected(index)}
                  aria-label={`Enlarge ${project.name} preview`}
                >
                  <Image
                    src={image}
                    alt={`${project.name}: ${project.imageLabel || "Project preview"}`}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1180px) 45vw, 550px"
                    onError={() =>
                      setFailedImages((previous) => [...previous, index])
                    }

                  />
                  <span className="preview-expand">
                    <Expand size={16} /> View preview
                  </span>
                </button>
              ) : (
                <div
                  className={`project-art project-fallback art-${index % 4}`}
                  aria-hidden="true"
                >
                  <Activity size={48} strokeWidth={1} />
                  <span>
                    0{index + 1} / {project.category.toUpperCase()}
                  </span>
                  <div className="chart-bars">
                    {[35, 60, 45, 80, 65, 95, 75].map((height, i) => (
                      <i key={i} style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>
              )}
              <div className="work-body">
                <span className="project-category">{project.category}</span>
                <h2>{project.name}</h2>
                {"status" in project && project.status && (
                  <p className="project-status">{project.status}</p>
                )}
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.technologies.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <details>
                  <summary>Project details</summary>
                  <ul>
                    {details?.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </details>
                <div className="project-actions">
                  {project.repository && (
                    <a
                      href={project.repository}
                      className="btn-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={15} /> Code
                      <span className="sr-only"> for {project.name}</span>
                    </a>
                  )}
                  {project.caseStudy ? (
                    <Link
                      href={project.caseStudy}
                      className="btn-primary"
                    >
                      <ArrowUpRight size={16} /> Explore models & demos
                    </Link>
                  ) : project.demo ? (
                    <a
                      href={project.demo}
                      className="btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArrowUpRight size={16} /> View web
                    </a>
                  ) : image ? (
                    <button
                      type="button"
                      className="btn-primary"
                      onClick={() => setSelected(index)}
                    >
                      <Expand size={15} /> View{" "}
                      {project.name === "Trader Performance vs Market Sentiment"
                        ? "chart"
                        : "dashboard"}
                    </button>
                  ) : null}
                </div>
              </div>
            </article>
          );
        })}
      </div>
      {visible.length === 0 && (
        <div className="project-empty">
          <h2>{category}</h2>
          <p>{query.trim() ? "No projects match your search in this category. Clear the search or choose another category." : "New projects will appear here as they’re added."}</p>
          <button
            className="btn-secondary"
            onClick={() => { setCategory("Top 4"); setQuery(""); setSort("default"); }}
          >
            Explore Top 4
          </button>
        </div>
      )}
      <Dialog
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        {selected !== null && selectedImage && (
          <DialogContent className="project-lightbox">
            <DialogTitle>{knowledge.projects[selected].name}</DialogTitle>
            <DialogDescription>
              {knowledge.projects[selected].imageLabel || "Project preview"}. Open the
              original image to inspect the full resolution.
            </DialogDescription>
            <div className="project-lightbox-image">
              <Image
                src={selectedImage}
                alt={`${knowledge.projects[selected].name} full preview`}
                sizes="95vw"
              />
            </div>
            <a
              href={selectedImage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Open original image <ArrowUpRight size={16} />
            </a>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
