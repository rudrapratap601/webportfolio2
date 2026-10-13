"use client";

import { useState } from "react";
import Link from "next/link";
import { SearchSort } from "./search-sort";
import Image, { type StaticImageData } from "next/image";
import { ArrowUpRight, Github, Expand, Activity } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import knowledge from "@/data/knowledge";
import platform from "@/public/projects/analytics-platform.png";
import blinkit from "@/public/projects/blinkit-dashboard.png";

import road from "@/public/projects/road-accident-dashboard.png";

type Preview = {
  image?: StaticImageData;
  category: string;
  label: string;
  code?: string;
  implementation?: string;
};
// Omit image to use the decorative fallback.
const previews: Record<string, Preview> = {
  "Data Analytics Platform": {
    image: platform,
    category: "Data Analytics",
    label: "Application screenshot",
    code: "https://github.com/rudrapratap601/data-analytics-web-platform",
  },
  "Blinkit Sales Performance Analysis": {
    image: blinkit,
    category: "Data Analysis",
    label: "Power BI dashboard",
    code: "https://github.com/rudrapratap601/blinkit-sales-performance-analysis",
  },
  "Trader Performance vs Market Sentiment": {
    category: "Data Analysis",
    label: "Analysis output · PnL by sentiment",
    code: "https://github.com/rudrapratap601/trader-sentiment-analysis",
  },
  "Road Accident Casualty Analysis": {
    image: road,
    category: "Excel Analysis",
    label: "Excel dashboard",
    code: "https://github.com/rudrapratap601/excel-analysis-projects/tree/main/Road_Accident_Analysis",
  },
  "Machine Learning from Scratch": {
    category: "ML Projects",
    label: "Machine learning foundations",
    code: "https://github.com/rudrapratap601/ML-From-Scratch",
    implementation:
      "/projects/ml-from-scratch",
  },
  "E-Commerce Order Insights v2 (Python Project)": {
    category: "Pure Python Projects",
    label: "E-commerce order analysis",
    code: "https://github.com/rudrapratap601/Pure-Python-Projects/tree/main/Python_Project/ecommerce_order_insights/v2_advanced_ds",
  },
  "Student Data Management System": {
    category: "Pure Python Projects",
    label: "Student data management",
    code: "https://github.com/rudrapratap601/Pure-Python-Projects/tree/main/Python_Project/OOPS_project",
  },
};
const categories = [
  "Top 4",
  "Data Analytics",
  "Data Analysis",
  "Excel Analysis",
  "ML Projects",
  "Pure Python Projects",
  "AI & DL Projects",
];

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
      ? previews[knowledge.projects[selected].name]?.image
      : undefined;
  const visible = knowledge.projects
    .map((project, index) => ({ project, index }))
    .filter(({ project }) =>
      featuredOnly || category === "Top 4"
        ? knowledge.featuredProjects.includes(project.name)
        : previews[project.name]?.category === category,
    )
    .filter(({project}) => featuredOnly || [project.name, project.description, ...project.technologies, previews[project.name]?.category].join(" ").toLowerCase().includes(query.trim().toLowerCase()))
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
          const preview = previews[project.name] ?? {
            category: "Data Analysis",
            label: "",
          };
          const image = failedImages.includes(index)
            ? undefined
            : preview.image;
          const details =
            "features" in project ? project.features : project.insights;
          return (
            <article
              className="work-card screenshot-card"
              key={project.name}
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
                    alt={`${project.name}: ${preview.label}`}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1180px) 45vw, 550px"
                    onError={() =>
                      setFailedImages((previous) => [...previous, index])
                    }
                    placeholder="blur"
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
                    0{index + 1} / {preview.category.toUpperCase()}
                  </span>
                  <div className="chart-bars">
                    {[35, 60, 45, 80, 65, 95, 75].map((height, i) => (
                      <i key={i} style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>
              )}
              <div className="work-body">
                <span className="project-category">{preview.category}</span>
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
                  {preview.code && (
                    <a
                      href={preview.code}
                      className="btn-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={15} /> Code
                      <span className="sr-only"> for {project.name}</span>
                    </a>
                  )}
                  {preview.implementation ? (
                    <Link
                      href={preview.implementation}
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
              {previews[knowledge.projects[selected].name].label}. Open the
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
              href={selectedImage.src}
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
