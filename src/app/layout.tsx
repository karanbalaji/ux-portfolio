import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import { PostHogProvider } from "@/components/PostHogProvider";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karan Balaji - AI Developer from Toronto",
  description: "AI Developer from Toronto building intelligent applications with Claude Code (MCPs & Skills), Vercel AI SDK, CopilotKit, and Mastra. Expert in full-stack AI development, LLM applications, and conversion optimization with PostHog. Design-forward AI engineering.",
  keywords: "AI Developer, AI Engineer, Full-Stack AI, LLM Applications, Claude Code, Vercel AI SDK, CopilotKit, Mastra, Toronto, React, Next.js, Shadcn, PostHog, A/B Testing, AI Agents, Gen UI, A2UI, MCP, Model Context Protocol, AI Integration, Machine Learning, NextAI, Conversion Optimization, Design Engineer",
  authors: [{ name: "Karan Balaji" }],
  creator: "Karan Balaji",
  publisher: "Karan Balaji",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://karanbalaji.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Karan Balaji - AI Developer from Toronto",
    description: "AI Developer building intelligent applications with Claude Code, Vercel AI SDK, CopilotKit, and Mastra. Expert in full-stack AI development, LLM applications, and design-forward AI engineering.",
    url: 'https://karanbalaji.com',
    siteName: 'Karan Balaji Portfolio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Karan Balaji - AI Developer from Toronto",
    description: "AI Developer building intelligent applications with Claude Code, Vercel AI SDK, and CopilotKit. Full-stack AI engineering with design sensibility.",
    creator: '@karanbalaji',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          {/* Mida A/B Testing Script */}
          <Script
            src="https://cdn.mida.so/js/optimize.js?key=nvmGW7eJdkyV9Rw81xXQKA"
            strategy="afterInteractive"
            async
          />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
        >
          <ConvexClientProvider>
            <PostHogProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                {children}
              </ThemeProvider>
            </PostHogProvider>
          </ConvexClientProvider>
          <GoogleAnalytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
