import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
export const metadata: Metadata = {
  icons: { icon: "/icon.svg" },
  ...(process.env.SITE_URL
    ? { metadataBase: new URL(process.env.SITE_URL) }
    : {}),
  title: "Rudrapratap Sarma | Data Analytics & AI/ML Portfolio",
  description:
    "Rudrapratap Sarma: Data Analytics and AI/ML enthusiast with Python, SQL, Power BI, and machine learning foundations. Open to internships in both fields.",
  keywords: [
    "Data Analyst",
    "Business Intelligence",
    "Data Visualization",
    "SQL",
    "Python",
    "Machine Learning",
    "Artificial Intelligence",
    "AI/ML Internships",
    "Power BI",
    "Portfolio",
  ],
  authors: [{ name: "Rudrapratap Sarma" }],
  creator: "Rudrapratap Sarma",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Rudrapratap Sarma | Data Analytics & AI/ML Portfolio",
    description:
      "Data analytics projects, machine learning foundations, and ongoing AI learning. Open to Data Analytics and AI/ML internships.",
    siteName: "Rudrapratap Sarma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudrapratap Sarma | Data Analytics & AI/ML Portfolio",
    description:
      "Data analytics projects, machine learning foundations, and ongoing AI learning. Open to Data Analytics and AI/ML internships.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans"><ThemeProvider>{children}</ThemeProvider></body>
    </html>
  );
}
