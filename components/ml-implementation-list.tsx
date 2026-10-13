"use client";
import { useState } from "react";
import Link from "next/link";
import { BookOpen, Code2 } from "lucide-react";
import { mlImplementations } from "@/data/ml-implementations";
import { SearchSort } from "./search-sort";
export function MLImplementationList() {
const [query,setQuery]=useState("");
const [sort,setSort]=useState("default");
const visible=mlImplementations.filter(item=>[item.title,item.description,item.family,...item.topics].join(" ").toLowerCase().includes(query.trim().toLowerCase())).sort((a,b)=>sort==="default"?0:sort==="az"?a.title.localeCompare(b.title):b.title.localeCompare(a.title));
return <><SearchSort query={query} sort={sort} onQuery={setQuery} onSort={setSort} label="models and methods" /><p role="status">Showing {visible.length} of {mlImplementations.length} implementations</p>
    <div className="content-grid ml-case-grid">
      {visible.map(item => <article key={item.id} className="content-card ml-method-card" id={item.id}>
        <p className="eyebrow">{item.family}</p>
        <h2>{item.title}</h2>
        <span className="project-category">{item.caseStudy ? "Code + interactive demo" : "Code + explanation"}</span>
        <p className="ml-method-description">{item.description}</p>
        <div className="tag-list">{item.topics.map(topic => <span key={topic}>{topic}</span>)}</div>
        <div className="ml-method-actions">
          <a href={item.code} className="btn-secondary" target="_blank" rel="noopener noreferrer"><Code2 size={16} /> View implementation<span className="sr-only"> for {item.title}</span></a>
          {item.caseStudy && <Link href={item.caseStudy} className="btn-primary"><BookOpen size={16} /> Case study & demo<span className="sr-only"> for {item.title}</span></Link>}
        </div>
      </article>)}
    </div>

{visible.length===0 && <p className="project-empty">No implementations match your search. Try another term or reset the search.</p>}</>;
}
