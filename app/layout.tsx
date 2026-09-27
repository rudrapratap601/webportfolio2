import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  icons: { icon: "/icon.svg" },
  ...(process.env.SITE_URL
    ? { metadataBase: new URL(process.env.SITE_URL) }
    : {}),
  title: "Rudrapratap Sarma | Data Analyst Portfolio",
  description:
    "Portfolio of Rudrapratap Sarma, a Data Analyst specializing in data visualization, business intelligence, and actionable insights.",
  keywords: [
    "Data Analyst",
    "Business Intelligence",
    "Data Visualization",
    "SQL",
    "Python",
    "Tableau",
    "Power BI",
    "Portfolio",
  ],
  authors: [{ name: "Rudrapratap Sarma" }],
  creator: "Rudrapratap Sarma",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Rudrapratap Sarma | Data Analyst Portfolio",
    description:
      "Portfolio showcasing data analytics projects, certifications, and professional experience.",
    siteName: "Rudrapratap Sarma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudrapratap Sarma | Data Analyst Portfolio",
    description:
      "Portfolio showcasing data analytics projects, certifications, and professional experience.",
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
    <html lang="en" className="dark">
      <body className="font-sans">{children}</body>
    </html>
  );
}
