"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { Layout } from "@/components/layout";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "rudrapratap@example.com",
    href: "mailto:rudrapratap@example.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "New Delhi, India",
    href: "#",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
];

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com", username: "@rudrapratap" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com", username: "rudrapratap" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com", username: "@rudrapratap" },
];

const faqItems = [
  {
    q: "Are you available for freelance projects?",
    a: "Yes, I take on freelance data analytics projects. Feel free to reach out to discuss your requirements.",
  },
  {
    q: "What is your typical response time?",
    a: "I usually respond within 24-48 hours. For urgent matters, reach out via LinkedIn.",
  },
  {
    q: "Do you work remotely?",
    a: "Yes, I'm open to remote opportunities and have experience working with distributed teams across time zones.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
              GET IN TOUCH
            </motion.span>
            <h1 className="section-title gradient-text-primary mb-6">
              Contact Me
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Have a project in mind or want to discuss data analytics
              opportunities? Let&apos;s connect.
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="mb-6 text-xl font-semibold">Contact Details</h2>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={method.label}
                      href={method.href}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="bento-card flex items-center gap-4 transition-colors"
                    >
                      <div className="glass-card flex h-12 w-12 items-center justify-center rounded-xl">
                        <method.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">
                          {method.label}
                        </p>
                        <p className="font-medium">{method.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-6 text-xl font-semibold">Connect Online</h2>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="bento-card flex flex-1 flex-col items-center gap-2 p-4"
                    >
                      <link.icon className="h-6 w-6" />
                      <span className="text-muted-foreground text-xs">
                        {link.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-6 text-xl font-semibold">FAQ</h2>
                <div className="space-y-3">
                  {faqItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bento-card p-4"
                    >
                      <h3 className="mb-2 font-medium">{item.q}</h3>
                      <p className="text-muted-foreground text-sm">{item.a}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="mb-6 text-xl font-semibold">Send a Message</h2>
              <div className="bento-card relative p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-muted-foreground text-sm"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="glass-card w-full rounded-xl border-0 bg-white/5 px-4 py-3 text-foreground outline-none ring-1 ring-white/10 transition-all placeholder:text-white/20 focus:ring-white/30"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-muted-foreground text-sm"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="glass-card w-full rounded-xl border-0 bg-white/5 px-4 py-3 text-foreground outline-none ring-1 ring-white/10 transition-all placeholder:text-white/20 focus:ring-white/30"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-muted-foreground text-sm"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="glass-card w-full rounded-xl border-0 bg-white/5 px-4 py-3 text-foreground outline-none ring-1 ring-white/10 transition-all placeholder:text-white/20 focus:ring-white/30"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-muted-foreground text-sm"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="glass-card w-full resize-none rounded-xl border-0 bg-white/5 px-4 py-3 text-foreground outline-none ring-1 ring-white/10 transition-all placeholder:text-white/20 focus:ring-white/30"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary flex w-full items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle2 className="h-4 w-4" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>

                <p className="text-muted-foreground mt-4 text-center text-xs">
                  I&apos;ll respond within 24-48 hours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
