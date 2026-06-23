"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Filter,
  BarChart2,
  Database,
  LineChart,
  PieChart,
  Code,
  Layers,
} from "lucide-react";
import { Layout } from "@/components/layout";

const categories = [
  { id: "all", name: "All Projects" },
  { id: "visualization", name: "Visualization" },
  { id: "analysis", name: "Analysis" },
  { id: "ml", name: "Machine Learning" },
  { id: "automation", name: "Automation" },
];

const projects = [
  {
    id: 1,
    title: "Sales Performance Dashboard",
    description:
      "Interactive Tableau dashboard providing real-time insights into sales performance across regions, products, and time periods. Features drill-down capabilities and automated reporting.",
    longDescription:
      "Built a comprehensive sales analytics solution that processes 2M+ records daily. Integrated multiple data sources including CRM, ERP, and marketing platforms. Reduced monthly reporting time by 70%.",
    category: "visualization",
    tags: ["Tableau", "SQL", "ETL", "Data Modeling"],
    metrics: ["2M+ records", "70% faster", "15+ users"],
    icon: BarChart2,
    color: "from-blue-500/20 to-cyan-500/20",
    image: "https://images.pexels.com/photos/5900205/pexels-photo-5900205.jpeg?w=800",
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Customer Segmentation Analysis",
    description:
      "Machine learning-based customer segmentation using RFM analysis and K-means clustering to identify high-value customer segments.",
    longDescription:
      "Developed automated customer segmentation pipeline that processes transactional data monthly. Identified 5 key customer personas enabling targeted marketing campaigns with 35% higher conversion rates.",
    category: "ml",
    tags: ["Python", "Scikit-learn", "Pandas", "RFM Analysis"],
    metrics: ["5 segments", "35% improvement", "100K customers"],
    icon: PieChart,
    color: "from-green-500/20 to-emerald-500/20",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?w=800",
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Financial Analytics Platform",
    description:
      "Power BI solution for financial reporting, budget tracking, and forecasting with automated data refresh capabilities.",
    longDescription:
      "Created enterprise-wide financial intelligence platform connecting to SAP, Oracle, and custom databases. Features automated budget variance reports and predictive forecasting using time series models.",
    category: "visualization",
    tags: ["Power BI", "DAX", "SQL Server", "Excel"],
    metrics: ["$50M tracked", "95% accuracy", "200+ reports"],
    icon: LineChart,
    color: "from-amber-500/20 to-orange-500/20",
    image: "https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?w=800",
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Supply Chain Optimization",
    description:
      "Data analysis project identifying bottlenecks and optimizing inventory levels using statistical modeling and simulation.",
    longDescription:
      "Analyzed 3 years of supply chain data to identify inefficiencies. Built predictive models for demand forecasting, reducing stockouts by 40% and excess inventory by 25%.",
    category: "analysis",
    tags: ["Python", "SQL", "Simulation", "Statistical Modeling"],
    metrics: ["40% reduction", "25% optimization", "$2M savings"],
    icon: Database,
    color: "from-purple-500/20 to-violet-500/20",
    image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?w=800",
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Marketing Attribution Model",
    description:
      "Multi-touch attribution model analyzing customer journey across channels to optimize marketing spend allocation.",
    longDescription:
      "Implemented data-driven attribution replacing last-click model. Analyzed 50M touchpoints across 8 channels. Resulted in 22% improvement in marketing ROI through better channel optimization.",
    category: "analysis",
    tags: ["BigQuery", "Python", "Marketing Analytics", "SQL"],
    metrics: ["50M touchpoints", "22% ROI boost", "8 channels"],
    icon: Layers,
    color: "from-pink-500/20 to-rose-500/20",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=800",
    link: "#",
    github: "#",
  },
  {
    id: 6,
    title: "ETL Pipeline Automation",
    description:
      "Automated data pipeline using Python and Apache Airflow for daily data extraction, transformation, and loading.",
    longDescription:
      "Built robust ETL infrastructure processing 500GB daily across 15 data sources. Implemented data quality checks and alerting. Reduced manual data work by 90%.",
    category: "automation",
    tags: ["Python", "Airflow", "Docker", "AWS"],
    metrics: ["500GB daily", "15 sources", "90% automation"],
    icon: Code,
    color: "from-cyan-500/20 to-teal-500/20",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?w=800",
    link: "#",
    github: "#",
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      <section className="min-h-screen px-4 pt-32 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground mb-4 inline-block font-mono text-sm tracking-wider"
            >
              PORTFOLIO
            </motion.span>
            <h1 className="section-title gradient-text-primary mb-6">
              Projects
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Explore my data analytics projects showcasing visualization,
              analysis, and insights generation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12 flex flex-wrap items-center justify-center gap-3"
          >
            <div className="mr-2 flex items-center gap-2 text-muted-foreground">
              <Filter className="h-4 w-4" />
              <span className="text-sm">Filter:</span>
            </div>
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-4 py-2 text-sm transition-all ${
                  activeCategory === category.id
                    ? "bg-white/10 text-foreground"
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          <motion.div layout className="grid gap-8 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group relative"
                >
                  <div className="bento-card overflow-hidden">
                    <div className="relative mb-4 h-48 overflow-hidden rounded-2xl">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50`}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <project.icon className="h-20 w-20 text-white/30" />
                      </div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                        }}
                        className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                      >
                        <div className="flex gap-3">
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href={project.link}
                            className="glass-card flex h-12 w-12 items-center justify-center rounded-full"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </motion.a>
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href={project.github}
                            className="glass-card flex h-12 w-12 items-center justify-center rounded-full"
                          >
                            <Github className="h-5 w-5" />
                          </motion.a>
                        </div>
                      </motion.div>
                    </div>

                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="mb-2 text-xl font-semibold">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 text-sm">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="glass-card rounded-full px-3 py-1 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                      {project.metrics.map((metric) => (
                        <div key={metric} className="text-center">
                          <div className="font-mono text-sm font-medium">
                            {metric}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center"
            >
              <p className="text-muted-foreground">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
}
