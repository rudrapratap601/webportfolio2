"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Github, Expand } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import knowledge from "@/data/knowledge";
import platform from "@/public/projects/analytics-platform.png";
import blinkit from "@/public/projects/blinkit-dashboard.png";
import trader from "@/public/projects/trader-sentiment.png";
import road from "@/public/projects/road-accident-dashboard.png";

const previews = [
  {
    image: platform,
    category: "Data Analytics",
    label: "Application screenshot",
    code: "https://github.com/rudrapratap601/data-analytics-web-platform",
  },
  {
    image: blinkit,
    category: "Data Analysis",
    label: "Power BI dashboard",
    code: "https://github.com/rudrapratap601/blinkit-sales-performance-analysis",
  },
  {
    image: trader,
    category: "Data Analysis",
    label: "Analysis output · PnL by sentiment",
    code: "https://github.com/rudrapratap601/trader-sentiment-analysis",
  },
  {
    image: road,
    category: "Excel Analysis",
    label: "Excel dashboard",
    code: "https://github.com/rudrapratap601/excel-analysis-projects/tree/main/Road_Accident_Analysis",
  },
];
const categories = ["All", "Data Analytics", "Data Analysis", "Excel Analysis"];

export function ProjectCards() {
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<number | null>(null);
  const visible = knowledge.projects
    .map((project, index) => ({ project, index }))
    .filter(
      ({ index }) =>
        category === "All" || previews[index].category === category,
    );
  return (
    <>
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
      <p className="sr-only" role="status">
        Showing {visible.length} projects
      </p>
      <div className="project-grid screenshot-grid">
        {visible.map(({ project, index }) => {
          const preview = previews[index];
          const details =
            "features" in project ? project.features : project.insights;
          return (
            <article
              className="work-card screenshot-card"
              key={project.name}
              id={`project-${index + 1}`}
            >
              <button
                type="button"
                className="project-preview"
                onClick={() => setSelected(index)}
                aria-label={`Enlarge ${project.name} preview`}
              >
                <Image
                  src={preview.image}
                  alt={`${project.name}: ${preview.label}`}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1099px) 45vw, 360px"
                  placeholder="blur"
                />
                <span className="preview-expand">
                  <Expand size={16} /> View preview
                </span>
              </button>
              <div className="work-body">
                <span className="project-category">{preview.category}</span>
                <h2>{project.name}</h2>
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
                  <a
                    href={preview.code}
                    className="btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={15} /> Code
                    <span className="sr-only"> for {project.name}</span>
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      className="btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArrowUpRight size={16} /> View web
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="btn-primary"
                      onClick={() => setSelected(index)}
                    >
                      <Expand size={15} /> View{" "}
                      {index === 2 ? "chart" : "dashboard"}
                    </button>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <Dialog
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        {selected !== null && (
          <DialogContent className="project-lightbox">
            <DialogTitle>{knowledge.projects[selected].name}</DialogTitle>
            <DialogDescription>
              {previews[selected].label}. Open the original image to inspect the
              full resolution.
            </DialogDescription>
            <div className="project-lightbox-image">
              <Image
                src={previews[selected].image}
                alt={`${knowledge.projects[selected].name} full preview`}
                sizes="95vw"
              />
            </div>
            <a
              href={previews[selected].image.src}
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
