"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  ChevronDown,
  BarChart2,
  Database,
  LineChart,
  Sparkles,
} from "lucide-react";
import { Layout } from "@/components/layout";

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

export default function Home() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          } else {
            setDisplayText(displayText.slice(0, -1));
          }
        }
      },
      isDeleting ? 50 : 80
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <Layout>
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-white/5 to-transparent blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-tr from-white/5 to-transparent blur-3xl" />
          <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-white/3 to-transparent blur-2xl" />
        </div>

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
              <br />
              <span className="text-foreground/80">Sarma</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-8 h-12"
            >
              <span className="text-xl font-medium text-muted-foreground sm:text-2xl">
                {displayText}
                <span className="typing-cursor" />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-muted-foreground mx-auto mb-10 max-w-2xl text-base sm:text-lg"
            >
              Transforming complex data into clear, actionable insights.
              Specializing in data visualization, business intelligence, and
              driving strategic decisions through analytics.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary"
                >
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-secondary"
                >
                  Get in Touch
                  <Mail className="h-4 w-4" />
                </motion.button>
              </Link>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/resume.pdf"
                download
                className="btn-secondary"
              >
                <Download className="h-4 w-4" />
                Resume
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.05 }}
                  className="skill-pill"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 cursor-pointer"
            onClick={scrollToNext}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-muted-foreground text-xs tracking-wider">
                SCROLL
              </span>
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2 className="section-title gradient-text-primary mb-4">
              Quick Stats
            </h2>
            <p className="text-muted-foreground">
              Numbers that tell my data journey
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bento-card group text-center"
              >
                <div className="mb-4 flex justify-center">
                  <div className="glass-card flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110">
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="font-mono text-4xl font-bold">{stat.value}</div>
                <div className="text-muted-foreground mt-2 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2 className="section-title gradient-text-primary mb-4">
              Featured Work
            </h2>
            <p className="text-muted-foreground">
              Projects that showcase data storytelling
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Sales Dashboard",
                description:
                  "Interactive Tableau dashboard for real-time sales analytics",
                tags: ["Tableau", "SQL", "Business Intelligence"],
              },
              {
                title: "Customer Segmentation",
                description:
                  "ML-based customer clustering for targeted marketing",
                tags: ["Python", "Scikit-learn", "Pandas"],
              },
              {
                title: "Financial Analytics",
                description:
                  "Power BI solution for financial reporting and forecasting",
                tags: ["Power BI", "DAX", "Excel"],
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="project-card"
              >
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="glass-card rounded-full px-3 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  className="absolute bottom-0 left-0 h-1 w-full origin-left bg-gradient-to-r from-white/50 to-transparent"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-center"
          >
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary"
              >
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="glass-card overflow-hidden rounded-3xl">
            <div className="grid lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center p-8 lg:p-12"
              >
                <div className="mb-2 text-sm font-medium text-muted-foreground">
                  AI-POWERED
                </div>
                <h2 className="section-title gradient-text-primary mb-4">
                  Portfolio Assistant
                </h2>
                <p className="text-muted-foreground mb-6">
                  Chat with my AI assistant to learn more about my skills,
                  projects, certifications, and career aspirations. Get instant
                  answers about my professional background.
                </p>
                <div>
                  <Link href="/assistant">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-primary"
                    >
                      <Sparkles className="h-4 w-4" />
                      Try AI Assistant
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative min-h-64"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="h-48 w-48 rounded-full bg-gradient-to-br from-white/20 to-white/5 blur-3xl"
                  />
                  <Sparkles className="absolute h-16 w-16 text-white/50" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
