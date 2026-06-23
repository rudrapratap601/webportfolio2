"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { ParticleBackground } from "./particles";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
