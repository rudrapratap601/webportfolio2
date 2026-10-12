"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
const items = [
  ["Home", "/"],
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Experience", "/experience"],
  ["Certificates", "/certificates"],
  ["Contact", "/contact"],
  ["Assistant", "/assistant"],
];
export function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b1014]/95 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-5"
      >
        <Link href="/" className="font-mono text-lg font-semibold">
          rs<span className="text-teal-200">.</span>
          <span className="ml-3 text-xs font-normal text-slate-400">
            DATA & INSIGHTS
          </span>
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          {items.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={path === href ? "page" : undefined}
              className={
                path === href
                  ? "text-sm text-teal-200"
                  : "text-sm text-slate-400 hover:text-white"
              }
            >
              {label}
              {label === "Assistant" && (
                <ArrowUpRight className="ml-1 inline" size={13} />
              )}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
        <ThemeToggle />
        <button
          className="rounded p-2 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        </div>
      </nav>
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
          className="grid max-h-[80dvh] overflow-auto border-t border-white/10 bg-[#0b1014] px-6 pb-5 lg:hidden"
        >
          {items.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              aria-current={path === href ? "page" : undefined}
              className="py-3 text-sm"
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
