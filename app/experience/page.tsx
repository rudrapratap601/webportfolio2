"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  Building2,
  ChevronRight,
  Award,
  TrendingUp,
} from "lucide-react";
import { Layout } from "@/components/layout";

const experiences = [
  {
    id: 1,
    company: "Tech Corp",
    role: "Senior Data Analyst",
    location: "New Delhi, India",
    type: "Full-time",
    period: "Jan 2024 - Present",
    duration: "1 year 5 months",
    description:
      "Leading business intelligence initiatives and driving data strategy across the organization. Managing a team of 3 analysts.",
    highlights: [
      "Built enterprise-level Tableau dashboards serving 500+ users",
      "Implemented automated reporting saving 40 hours monthly",
      "Led migration from legacy systems to cloud-based analytics",
      "Mentored junior analysts on SQL and Python best practices",
    ],
    technologies: ["Tableau", "SQL", "Python", "BigQuery", "DBT"],
    current: true,
  },
  {
    id: 2,
    company: "Data Solutions Inc",
    role: "Data Analyst",
    location: "Bangalore, India",
    type: "Full-time",
    period: "Jun 2022 - Dec 2023",
    duration: "1 year 7 months",
    description:
      "Delivered data analytics solutions for Fortune 500 clients across retail, finance, and healthcare sectors.",
    highlights: [
      "Developed Power BI solutions for 15+ enterprise clients",
      "Created predictive models improving forecast accuracy by 25%",
      "Reduced data processing time by 60% through optimization",
      "Presented insights to C-level executives quarterly",
    ],
    technologies: ["Power BI", "Python", "SQL Server", "Azure", "Databricks"],
    current: false,
  },
  {
    id: 3,
    company: "Analytics Startup",
    role: "Junior Data Analyst",
    location: "Hyderabad, India",
    type: "Full-time",
    period: "Apr 2020 - May 2022",
    duration: "2 years 2 months",
    description:
      "Started career in data analytics, working on diverse projects from data cleaning to visualization.",
    highlights: [
      "Processed and cleaned datasets with 10M+ records",
      "Built first dashboards for sales and marketing teams",
      "Collaborated with engineers to establish data pipelines",
      "Automated weekly reports using Python scripts",
    ],
    technologies: ["Excel", "SQL", "Python", "Tableau", "PostgreSQL"],
    current: false,
  },
  {
    id: 4,
    company: "University",
    role: "Statistics Graduate",
    location: "Delhi, India",
    type: "Education",
    period: "2016 - 2020",
    duration: "4 years",
    description:
      "B.Sc. in Statistics with specialization in Data Science. Graduated with honors.",
    highlights: [
      "CGPA: 8.5/10 with honors in Statistics",
      "Published research on statistical modeling",
      "Won inter-college data science competition",
      "Completed internship at research lab",
    ],
    technologies: ["R", "Python", "SPSS", "Excel", "LaTeX"],
    current: false,
  },
];

const achievements = [
  {
    title: "Employee of the Year",
    company: "Data Solutions Inc",
    year: "2023",
    icon: Award,
  },
  {
    title: "Top Performer",
    company: "Tech Corp",
    year: "2024",
    icon: TrendingUp,
  },
];

export default function ExperiencePage() {
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
              CAREER JOURNEY
            </motion.span>
            <h1 className="section-title gradient-text-primary mb-6">
              Experience
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              5+ years of transforming data into business value across diverse
              industries and technologies.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent md:left-6" />

                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={exp.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="pl-8 md:pl-16">
                        <motion.div
                          whileHover={{ scale: 1.01 }}
                          className={`experience-card ${
                            exp.current ? "border-white/20" : ""
                          }`}
                        >
                          <div className="absolute -left-4 top-6 hidden h-8 w-8 items-center justify-center rounded-full md:flex md:-left-8">
                            <div
                              className={`glass-card flex h-8 w-8 items-center justify-center rounded-full ${
                                exp.current ? "bg-white/10" : ""
                              }`}
                            >
                              {exp.type === "Education" ? (
                                <Building2 className="h-4 w-4" />
                              ) : (
                                <Briefcase className="h-4 w-4" />
                              )}
                            </div>
                          </div>

                          <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="text-xl font-semibold">
                                  {exp.role}
                                </h3>
                                {exp.current && (
                                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs">
                                    Current
                                  </span>
                                )}
                              </div>
                              <p className="text-muted-foreground mt-1 text-sm">
                                {exp.company}
                              </p>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center gap-1.5 text-sm">
                                <Calendar className="h-3.5 w-3.5" />
                                <span className="text-muted-foreground">
                                  {exp.period}
                                </span>
                              </div>
                              <div className="mt-1 flex items-center gap-1.5 text-xs">
                                <MapPin className="h-3 w-3" />
                                <span className="text-muted-foreground">
                                  {exp.location}
                                </span>
                              </div>
                            </div>
                          </div>

                          <p className="text-muted-foreground mb-4 text-sm">
                            {exp.description}
                          </p>

                          <div className="mb-4 space-y-2">
                            {exp.highlights.map((highlight, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-2 text-sm"
                              >
                                <ChevronRight className="h-4 w-4 flex-shrink-0 text-white/50" />
                                <span className="text-muted-foreground">
                                  {highlight}
                                </span>
                              </div>
                            ))}
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="glass-card rounded-full px-3 py-1 text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bento-card"
              >
                <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold">
                  <Award className="h-5 w-5" />
                  Recognitions
                </h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="glass-card rounded-xl p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="glass-card flex h-10 w-10 items-center justify-center rounded-xl">
                          <achievement.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium">{achievement.title}</h4>
                          <p className="text-muted-foreground text-xs">
                            {achievement.company} - {achievement.year}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bento-card"
              >
                <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold">
                  <TrendingUp className="h-5 w-5" />
                  Career Stats
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Years Experience", value: "5+" },
                    { label: "Projects", value: "50+" },
                    { label: "Dashboards Built", value: "100+" },
                    { label: "Reports Automated", value: "200+" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="font-mono text-2xl font-bold">
                        {stat.value}
                      </div>
                      <div className="text-muted-foreground text-xs">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bento-card"
              >
                <h3 className="mb-4 text-lg font-semibold">Industries</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Finance",
                    "Retail",
                    "Healthcare",
                    "Technology",
                    "E-commerce",
                  ].map((industry) => (
                    <span
                      key={industry}
                      className="glass-card rounded-full px-3 py-1 text-sm"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
