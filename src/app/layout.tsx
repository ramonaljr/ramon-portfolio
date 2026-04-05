import type { Metadata } from "next";
import { Newsreader, Manrope } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://ramon.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ramon Vallejera — Full-Stack Developer & AI Engineer",
    template: "%s | Ramon Vallejera",
  },
  description:
    "Full-stack developer and AI engineer building smart software — React, Next.js, Node.js, Python, and AI automation. Available for hire.",
  keywords: [
    "full-stack developer",
    "AI engineer",
    "AI developer",
    "freelance developer",
    "React developer",
    "Next.js developer",
    "AI automation",
    "hire full-stack developer",
  ],
  authors: [{ name: "Ramon Vallejera", url: siteUrl }],
  creator: "Ramon Vallejera",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ramon Vallejera",
    title: "Ramon Vallejera — Full-Stack Developer & AI Engineer",
    description:
      "Full-stack developer and AI engineer building smart software — React, Next.js, Node.js, Python, and AI automation. Available for hire.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramon Vallejera — Full-Stack Developer & AI Engineer",
    description:
      "Full-stack developer and AI engineer building smart software — React, Next.js, Node.js, Python, and AI automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ramon Vallejera",
  jobTitle: "Full-Stack Developer & AI Engineer",
  url: siteUrl,
  sameAs: [
    "https://www.linkedin.com/in/ramon-vallejera-jr-mba-6976a3115/",
    "https://github.com/ramonaljr",
  ],
  knowsAbout: [
    "Full-Stack Development",
    "AI Engineering",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "AI Automation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${manrope.variable} antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
