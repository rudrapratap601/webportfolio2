"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, BarChart2, Heart } from "lucide-react";

const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  { name: "Email", href: "mailto:rudrapratap@example.com", icon: Mail },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Certificates", href: "/certificates" },
  { name: "Contact", href: "/contact" },
  { name: "AI Assistant", href: "/assistant" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-32 border-t border-white/5">
      <div className="noise glass-card absolute inset-0 rounded-none opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="glass-card flex h-10 w-10 items-center justify-center rounded-xl">
                <BarChart2 className="h-5 w-5" />
              </div>
              <span className="font-mono text-sm font-medium tracking-wider">
                RS<span className="text-muted-foreground">.data</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Data Analyst specializing in transforming complex datasets into
              actionable insights. Building data-driven solutions that drive
              business growth.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold">Connect</h3>
              <ul className="space-y-2">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground flex items-center gap-2 text-sm transition-colors hover:text-foreground"
                    >
                      <link.icon className="h-4 w-4" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:text-right">
            <h3 className="mb-4 text-sm font-semibold">Download Resume</h3>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/resume.pdf"
              download
              className="btn-primary inline-flex"
            >
              Download CV
            </motion.a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-muted-foreground text-sm">
            {currentYear} Rudrapratap Sarma. All rights reserved.
          </p>
          <p className="text-muted-foreground flex items-center gap-1 text-sm">
            Made with <Heart className="h-4 w-4 text-red-500" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
