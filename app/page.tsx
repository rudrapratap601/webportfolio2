<<<<<<< HEAD
=======
"use client";

import { useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";
>>>>>>> ae4caca2a5e8cccf16514a04cc507faa9b43e37d
import Link from "next/link";
import { ArrowUpRight, Download, Sparkles } from "lucide-react";
import { Layout } from "@/components/layout";
<<<<<<< HEAD
import { ProjectCards, ContactCTA } from "@/components/portfolio";
=======

const HeroScene3D = dynamic(
  () => import("@/components/3d/hero-scene").then((mod) => mod.HeroScene3D),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-2 border-white/20 border-t-white/80" />
      </div>
    ),
  }
);

const roles = [
  "Data Analyst",
  "Business Intelligence Expert",
  "Data Storyteller",
  "SQL Specialist",
  "Python Developer",
];

const stats = [
  { label: "Years Experience", value: "5+", icon: BarChart2 },
  { label: "Projects Completed", value: "50+", icon: Database },
  { label: "Data Insights", value: "100+", icon: LineChart },
  { label: "Certifications", value: "10+", icon: Sparkles },
];

const skills = [
  "SQL",
  "Python",
  "Tableau",
  "Power BI",
  "Excel",
  "R",
  "Looker",
  "BigQuery",
];

>>>>>>> ae4caca2a5e8cccf16514a04cc507faa9b43e37d
export default function Home() {
  return (
    <Layout>
<<<<<<< HEAD
      <div className="home-shell">
        <section className="hero-grid">
          <div>
            <p className="eyebrow">
              <span className="status-dot" /> OPEN TO DATA ANALYTICS INTERNSHIPS
            </p>
            <h1>
              Turning data
=======
      <section className="relative min-h-screen overflow-hidden">
        <Suspense fallback={
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-white/5 to-transparent blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-tr from-white/5 to-transparent blur-3xl" />
          </div>
        }>
          <HeroScene3D />
        </Suspense>

        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-20 pb-16 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="relative mx-auto mb-8 h-32 w-32"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-white/5 blur-xl" />
              <div className="relative glass-card h-full w-full rounded-full">
                <div className="flex h-full w-full items-center justify-center">
                  <span className="gradient-text font-mono text-3xl font-bold">
                    RS
                  </span>
                </div>
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -right-2 -top-2"
              >
                <div className="glass-card flex h-8 w-8 items-center justify-center rounded-full">
                  <Sparkles className="h-4 w-4" />
                </div>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground mb-4 font-mono text-sm tracking-wider"
            >
              HELLO, I&apos;M
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="gradient-text-primary">Rudrapratap</span>
>>>>>>> ae4caca2a5e8cccf16514a04cc507faa9b43e37d
              <br />
              into <em>direction.</em>
            </h1>
            <p className="hero-name">
              Rudrapratap Sarma <span>/ Data Analytics</span>
            </p>
            <p className="hero-description">
              I connect messy datasets, find the patterns that matter, and build
              dashboards that make the next decision clearer.
            </p>
            <div className="hero-actions">
              <Link href="/projects" className="btn-primary">
                Explore my work <ArrowUpRight size={18} />
              </Link>
              <a href="/resume.pdf" download className="btn-secondary">
                <Download size={16} /> Resume
              </a>
            </div>
            <div className="hero-tools">
              PYTHON <span>/</span> SQL <span>/</span> POWER BI <span>/</span>{" "}
              STREAMLIT
            </div>
          </div>
          <div className="hero-panel">
            <div className="panel-top">
              <span>FROM RAW DATA TO INSIGHT</span>
              <span className="status-dot" />
            </div>
            <div className="insight-number">
              500<span>+</span>
            </div>
            <p>job opportunities structured</p>
            <div className="signal-chart" aria-hidden="true">
              {[24, 38, 32, 52, 45, 64, 58, 78, 71, 92, 84, 100].map(
                (height, i) => (
                  <div key={i} style={{ height: `${height}%` }} />
                ),
              )}
            </div>
            <div className="panel-bottom">
              <span>35+ source documents</span>
              <span>Jobyaari internship ↗</span>
            </div>
            <div className="panel-note">
              Extract. Clean. Analyze. Communicate.
            </div>
          </div>
        </section>
        <div className="proof-strip">
          <div>
            <strong>04</strong>
            <span>Featured projects</span>
          </div>
          <div>
            <strong>02</strong>
            <span>Work & training experiences</span>
          </div>
          <div>
            <strong>BCA</strong>
            <span>Manipal University Jaipur · 2025–28</span>
          </div>
        </div>
        <section className="work-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SELECTED WORK / 01—04</p>
              <h2>Built around real questions.</h2>
            </div>
            <Link href="/projects" className="text-link">
              All projects <ArrowUpRight size={17} />
            </Link>
          </div>
          <ProjectCards />
        </section>
        <section className="assistant-banner">
          <Sparkles size={32} />
          <div>
            <p className="eyebrow">A CONVERSATION WITH MY PORTFOLIO</p>
            <h2>Curious about my work?</h2>
            <p>Ask my assistant about projects, skills, and experience.</p>
          </div>
          <Link className="btn-secondary" href="/assistant">
            Ask a question <ArrowUpRight size={16} />
          </Link>
        </section>
        <ContactCTA />
      </div>
    </Layout>
  );
}
