"use client";

import { motion } from "framer-motion";
import {
  Award,
  ExternalLink,
  Calendar,
  Building2,
  CheckCircle2,
  Download,
} from "lucide-react";
import { Layout } from "@/components/layout";

const certificates = [
  {
    id: 1,
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    date: "Mar 2024",
    credentialId: "GDA-2024-12345",
    description:
      "Comprehensive certification covering data cleaning, analysis, visualization, and presentation skills using industry-standard tools.",
    skills: ["Data Analysis", "R", "SQL", "Tableau", "Spreadsheets"],
    image: "https://images.pexels.com/photo-59537/pexels-photo-59537.jpeg?w=800",
    link: "#",
    featured: true,
  },
  {
    id: 2,
    name: "Tableau Desktop Specialist",
    issuer: "Tableau",
    date: "Jan 2024",
    credentialId: "TC-2024-67890",
    description:
      "Certified expertise in Tableau Desktop including data connections, visualizations, and dashboard creation.",
    skills: ["Tableau", "Data Visualization", "Dashboard Design"],
    image: "https://images.pexels.com/photo-401546/pexels-photo-401546.jpeg?w=800",
    link: "#",
    featured: true,
  },
  {
    id: 3,
    name: "Microsoft Power BI Data Analyst",
    issuer: "Microsoft",
    date: "Nov 2023",
    credentialId: "MS-PL-300-13579",
    description:
      "Professional certification for building and deploying Power BI solutions including data modeling and analytics.",
    skills: ["Power BI", "DAX", "Data Modeling", "Power Query"],
    image: "https://images.pexels.com/photo-8386440/pexels-photo-8386440.jpeg?w=800",
    link: "#",
    featured: true,
  },
  {
    id: 4,
    name: "AWS Data Analytics Specialty",
    issuer: "Amazon Web Services",
    date: "Aug 2023",
    credentialId: "AWS-DAS-24680",
    description:
      "Specialized certification in designing and implementing AWS services for data analytics solutions.",
    skills: ["AWS", "Redshift", "Athena", "Glue", "Kinesis"],
    image: "https://images.pexels.com/photo-837072/pexels-photo-837072.jpeg?w=800",
    link: "#",
    featured: false,
  },
  {
    id: 5,
    name: "Deep Learning Specialization",
    issuer: "Coursera - DeepLearning.AI",
    date: "Jun 2023",
    credentialId: "DL-2023-97531",
    description:
      "Five-course specialization covering neural networks, CNNs, RNNs, and deep learning applications.",
    skills: ["Deep Learning", "TensorFlow", "Neural Networks", "CNN", "RNN"],
    image: "https://images.pexels.com/photo-8386440/pexels-photo-8386440.jpeg?w=800",
    link: "#",
    featured: false,
  },
  {
    id: 6,
    name: "MongoDB Data Modeling",
    issuer: "MongoDB University",
    date: "Apr 2023",
    credentialId: "MDB-2023-11223",
    description:
      "Certification in designing data models for MongoDB databases and optimizing document structures.",
    skills: ["MongoDB", "NoSQL", "Data Modeling", "Aggregation"],
    image: "https://images.pexels.com/photo-270348/pexels-photo-270348.jpeg?w=800",
    link: "#",
    featured: false,
  },
  {
    id: 7,
    name: "Statistics Fundamentals",
    issuer: "DataCamp",
    date: "Feb 2023",
    credentialId: "DC-STAT-2023-44556",
    description:
      "Completing comprehensive courses in statistical analysis, hypothesis testing, and experimental design.",
    skills: ["Statistics", "Hypothesis Testing", "R", "Probability"],
    image: "https://images.pexels.com/photo-669615/pexels-photo-669615.jpeg?w=800",
    link: "#",
    featured: false,
  },
  {
    id: 8,
    name: "SQL Mastery Certification",
    issuer: "HackerRank",
    date: "Dec 2022",
    credentialId: "HR-SQL-2022-77889",
    description:
      "Advanced SQL certification demonstrating proficiency in complex queries, optimization, and database operations.",
    skills: ["SQL", "Query Optimization", "Joins", "Window Functions"],
    image: "https://images.pexels.com/photo-59537/pexels-photo-59537.jpeg?w=800",
    link: "#",
    featured: false,
  },
];

const stats = [
  { label: "Total Certifications", value: "10+" },
  { label: "Featured Certifications", value: "3" },
  { label: "Platforms", value: "5" },
];

export default function CertificatesPage() {
  const featuredCerts = certificates.filter((c) => c.featured);
  const otherCerts = certificates.filter((c) => !c.featured);

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
              CREDENTIALS
            </motion.span>
            <h1 className="section-title gradient-text-primary mb-6">
              Certificates
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Professional certifications and continuous learning achievements
              in data analytics and technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bento-card text-center"
              >
                <div className="flex justify-center">
                  <Award className="h-8 w-8" />
                </div>
                <div className="mt-3 font-mono text-3xl font-bold">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="mb-8 flex items-center gap-3 text-xl font-semibold">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              Featured Certifications
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredCerts.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative"
                >
                  <div className="bento-card relative h-full overflow-hidden">
                    <div className="absolute right-2 top-2 z-10 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                      Featured
                    </div>

                    <div className="relative mb-4 h-40 overflow-hidden rounded-xl bg-gradient-to-br from-white/10 to-white/5">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Award className="h-16 w-16 text-white/20" />
                      </div>
                    </div>

                    <h3 className="mb-2 line-clamp-2 text-lg font-semibold">
                      {cert.name}
                    </h3>

                    <div className="mb-3 flex items-center gap-4">
                      <div className="flex items-center gap-1.5">
                        <Building2 className="h-3.5 w-3.5" />
                        <span className="text-muted-foreground text-sm">
                          {cert.issuer}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        <span className="text-muted-foreground text-sm">
                          {cert.date}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
                      {cert.description}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {cert.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="glass-card rounded-full px-2.5 py-1 text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="text-muted-foreground text-xs">
                          +{cert.skills.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="mt-auto">
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex w-full items-center justify-center text-sm"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Credential
                      </motion.a>
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
          >
            <h2 className="mb-8 text-xl font-semibold">All Certifications</h2>
            <div className="bento-card">
              <div className="space-y-4">
                {otherCerts.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                    className="flex flex-col items-start justify-between gap-4 rounded-xl p-4 transition-colors sm:flex-row sm:items-center"
                  >
                    <div className="flex items-start gap-4 sm:items-center">
                      <div className="glass-card flex h-12 w-12 items-center justify-center rounded-xl">
                        <Award className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">{cert.name}</h3>
                        <div className="flex flex-wrap items-center gap-2 text-muted-foreground text-sm">
                          <span>{cert.issuer}</span>
                          <span className="hidden sm:block">|</span>
                          <span>{cert.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.slice(0, 2).map((skill) => (
                          <span
                            key={skill}
                            className="glass-card rounded-full px-2.5 py-1 text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card flex h-9 w-9 items-center justify-center rounded-full"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </motion.a>
                    </div>
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
