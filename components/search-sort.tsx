"use client";
import { useId } from "react";
export function SearchSort({ query, sort, onQuery, onSort, label = "projects" }: { query:string; sort:string; onQuery:(value:string)=>void; onSort:(value:string)=>void; label?:string }) {
  const id=useId();
  return <div className="my-8 flex flex-wrap items-end gap-4">
    <label htmlFor={`${id}-search`} className="min-w-0 flex-1 text-sm">Search {label}<input id={`${id}-search`} type="search" value={query} onChange={e=>onQuery(e.target.value)} placeholder="Search names, descriptions, or tools…" className="mt-2 block w-full rounded-lg border border-input bg-background p-3 text-foreground" /></label>
    <label htmlFor={`${id}-sort`} className="text-sm">Sort by<select id={`${id}-sort`} value={sort} onChange={e=>onSort(e.target.value)} className="mt-2 block rounded-lg border border-input bg-background p-3 text-foreground"><option value="default">Original order</option><option value="az">Name: A–Z</option><option value="za">Name: Z–A</option></select></label>
    <button type="button" className="btn-secondary" onClick={()=>{onQuery("");onSort("default");}}>Reset</button>
  </div>;
}
