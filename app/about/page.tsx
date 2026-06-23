"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  BarChart2,
  Globe,
  Award,
  BookOpen,
  Users,
  Lightbulb,
  Download,
  MapPin,
  Calendar,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import { Layout } from "@/components/layout";

const technicalSkills = [
  { name: "SQL", level: 95 },
  { name: "Python", level: 90 },
  { name: "Tableau", level: 92 },
  { name: "Power BI", level: 88 },
  { name: "Excel/Sheets", level: 95 },
  { name: "R", level: 75 },
  { name: "Looker", level: 80 },
  { name: "BigQuery", level: 85 },
];

const tools = [
  "PostgreSQL",
  "MySQL",
  "SQL Server",
  "MongoDB",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Scikit-learn",
  "Jupyter",
  "Git",
  "Docker",
  "Figma",
];

const softSkills = [
  { name: "Data Storytelling", icon: BarChart2 },
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Team Collaboration", icon: Users },
  { name: "Continuous Learning", icon: BookOpen },
];

const timeline = [
  {
    year: "2024",
    title: "Senior Data Analyst",
    company: "Tech Corp",
    description: "Leading BI initiatives and data strategy",
  },
  {
    year: "2022",
    title: "Data Analyst",
    company: "Data Solutions Inc",
    description: "Built dashboards for Fortune 500 clients",
  },
  {
    year: "2020",
    title: "Junior Data Analyst",
    company: "Analytics Startup",
    description: "Started career in data analytics",
  },
  {
    year: "2019",
    title: "Statistics Graduate",
    company: "University",
    description: "B.Sc. in Statistics & Data Science",
  },
];

export default function AboutPage() {
  return (
    <Layout>
      <section className="min-h-screen px-4 pt-32 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground mb-4 inline-block font-mono text-sm tracking-wider"
            >
              WHO AM I
            </motion.span>
            <h1 className="section-title gradient-text-primary mb-6">
              About Me
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Passionate data analyst turning raw data into meaningful stories
              that drive business success.
            </p>
          </motion.div>

          <div className="mb-20 grid gap-6 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bento-card lg:col-span-2"
            >
              <div className="flex flex-col gap-6 md:flex-row md:gap-8">
                <div className="glass-card relative mx-auto h-48 w-48 flex-shrink-0 md:h-56 md:w-56 rounded-2xl p-1">
                  <div className="h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-white/10 to-white/5">
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="gradient-text font-mono text-5xl font-bold">
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
                      <Award className="h-4 w-4" />
                    </div>
                  </motion.div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="mb-4 text-2xl font-bold">Rudrapratap Sarma</h2>
                  <div className="text-muted-foreground space-y-3 text-sm">
                    <p className="leading-relaxed">
                      I&apos;m a data analyst with 5+ years of experience
                      transforming complex datasets into actionable business
                      insights. My expertise spans SQL, Python, Tableau, and
                      Power BI, with a focus on creating data-driven solutions
                      that impact business decisions.
                    </p>
                    <p className="leading-relaxed">
                      I believe in the power of data storytelling - turning
                      numbers into narratives that stakeholders can understand
                      and act upon. Every dataset has a story to tell, and I
                      help reveal it.
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-4 gap-y-2 md:justify-start">
                    <span className="text-muted-foreground flex items-center gap-1.5 text-sm">
                      <MapPin className="h-4 w-4" />
                      New Delhi, India
                    </span>
                    <span className="text-muted-foreground flex items-center gap-1.5 text-sm">
                      <Briefcase className="h-4 w-4" />
                      Open to Remote
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bento-card flex flex-col justify-center"
            >
              <div className="mb-4 flex items-center justify-center">
                <div className="glass-card flex h-16 w-16 items-center justify-center rounded-2xl">
                  <Calendar className="h-8 w-8" />
                </div>
              </div>
              <div className="text-center">
                <div className="font-mono text-4xl font-bold">5+</div>
                <div className="text-muted-foreground mt-1 text-sm">
                  Years of Experience
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/resume.pdf"
                  download
                  className="btn-primary flex w-full"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="mb-8 text-center text-2xl font-bold">
              Technical Skills
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  className="bento-card"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground font-mono text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.05 }}
                      className="h-full rounded-full bg-gradient-to-r from-white/50 to-white/20"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="mb-8 text-center text-2xl font-bold">
              Tools & Technologies
            </h2>
            <div className="bento-card">
              <div className="flex flex-wrap justify-center gap-3">
                {tools.map((tool, index) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    whileHover={{ scale: 1.05 }}
                    className="skill-pill cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="mb-8 text-center text-2xl font-bold">
              Soft Skills
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bento-card text-center"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="glass-card flex h-14 w-14 items-center justify-center rounded-2xl">
                      <skill.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="font-medium">{skill.name}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-center text-2xl font-bold">My Journey</h2>
            <div className="bento-card relative p-8">
              <div className="absolute left-1/2 top-8 h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-gradient-to-b from-white/20 via-white/10 to-transparent" />
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex items-center gap-6 ${
                      index % 2 === 0
                        ? "flex-row-reverse"
                        : "flex-row"
                    }`}
                  >
                    <div className="flex flex-1 flex-col">
                      <div
                        className={`bento-card ${
                          index % 2 === 0 ? "text-right" : "text-left"
                        }`}
                      >
                        <span className="text-muted-foreground font-mono text-sm">
                          {item.year}
                        </span>
                        <h3 className="mt-1 font-semibold">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">
                          {item.company}
                        </p>
                        <p className="text-muted-foreground mt-1 text-xs">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="glass-card relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                      <span className="font-mono text-xs">{index + 1}</span>
                    </div>
                    <div className="flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
