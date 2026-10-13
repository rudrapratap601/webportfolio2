"use client";
import { useId } from "react";
import { Search, X, RotateCcw, ArrowDownWideNarrow } from "lucide-react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./ui/select";

export function SearchSort({ query, sort, onQuery, onSort, label = "projects" }: { query:string; sort:string; onQuery:(value:string)=>void; onSort:(value:string)=>void; label?:string }) {
  const id = useId();
  const changed = query.length > 0 || sort !== "default";
  return <div className="search-toolbar">
    <div className="search-toolbar-field">
      <label htmlFor={`${id}-search`}>Search {label}</label>
      <div className="search-toolbar-input">
        <Search size={18} aria-hidden="true" />
        <input id={`${id}-search`} type="search" value={query} onChange={e=>onQuery(e.target.value)} placeholder="Find a project, skill, or tool…" />
        {query && <button type="button" aria-label="Clear search" onClick={()=>{onQuery("");document.getElementById(`${id}-search`)?.focus();}}><X size={16} aria-hidden="true" /></button>}
      </div>
    </div>
    <div className="search-toolbar-sort">
      <label htmlFor={`${id}-sort`}>Sort by</label>
      <Select value={sort} onValueChange={onSort}>
        <SelectTrigger id={`${id}-sort`} className="search-sort-trigger"><ArrowDownWideNarrow size={17} aria-hidden="true" /><SelectValue /></SelectTrigger>
        <SelectContent className="search-sort-menu" position="popper" sideOffset={8}>
          <SelectItem value="default">Original order</SelectItem>
          <SelectItem value="az">Name: A–Z</SelectItem>
          <SelectItem value="za">Name: Z–A</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <button type="button" className="search-toolbar-reset" disabled={!changed} onClick={()=>{onQuery("");onSort("default");}}><RotateCcw size={16} aria-hidden="true" />Reset</button>
  </div>;
}
