import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rudrapratap Sarma | Data Analyst Portfolio',
  description:
    'Premium portfolio of Rudrapratap Sarma, a Data Analyst specializing in data visualization, business intelligence, and actionable insights.',
  keywords: [
    'Data Analyst',
    'Business Intelligence',
    'Data Visualization',
    'SQL',
    'Python',
    'Tableau',
    'Power BI',
    'Portfolio',
  ],
  authors: [{ name: 'Rudrapratap Sarma' }],
  creator: 'Rudrapratap Sarma',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Rudrapratap Sarma | Data Analyst Portfolio',
    description:
      'Premium portfolio showcasing data analytics projects, certifications, and professional experience.',
    siteName: 'Rudrapratap Sarma Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rudrapratap Sarma | Data Analyst Portfolio',
    description:
      'Premium portfolio showcasing data analytics projects, certifications, and professional experience.',
    creator: '@rudrapratap',
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
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
