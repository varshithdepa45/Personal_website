import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = "https://dvarshithreddy.dev";

export const viewport: Viewport = {
  themeColor: "#07070c",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "D Varshith Reddy — AI Developer & Full-Stack Builder",
    template: "%s · D Varshith Reddy",
  },
  description:
    "CSE AIML student, full-stack developer, hackathon builder, and AI product enthusiast. Building AI systems that solve real problems.",
  keywords: [
    "D Varshith Reddy",
    "DVR",
    "AI Developer",
    "Full Stack Developer",
    "CSE AIML",
    "Hackathon",
    "Next.js",
    "TypeScript",
    "Machine Learning",
    "Portfolio",
  ],
  authors: [{ name: "D Varshith Reddy" }],
  creator: "D Varshith Reddy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "D Varshith Reddy — AI Developer & Full-Stack Builder",
    description:
      "Building AI systems that solve real problems. CSE AIML · Full-Stack · Hackathons.",
    siteName: "D Varshith Reddy",
  },
  twitter: {
    card: "summary_large_image",
    title: "D Varshith Reddy — AI Developer & Full-Stack Builder",
    description:
      "Building AI systems that solve real problems. CSE AIML · Full-Stack · Hackathons.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#07070c] font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
