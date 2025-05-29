import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { PostHogProvider } from "@/components/PostHogProvider";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karan Balaji - Design Engineer from Toronto",
  description: "Design Engineer from Toronto specializing in rapid prototyping with Cursor, Windsurf, ShadCN, and Next.js. Expert in conversion optimization using PostHog, A/B testing, and data-driven experimentation. Building scalable design systems and AI-powered digital experiences.",
  keywords: "Design Engineer, UX Designer, Frontend Developer, Toronto, React, Next.js, ShadCN, Cursor, Windsurf, PostHog, A/B Testing, Rapid Prototyping, User Experience, Conversion Optimization, Growth Engineering, Design Systems, Portfolio, PocketHealth, FintechToronto, AI Integration",
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
    title: "Karan Balaji - Design Engineer from Toronto",
    description: "Design Engineer specializing in rapid prototyping with modern tools like Cursor, ShadCN, and Next.js. Expert in conversion optimization through PostHog experimentation and data-driven design systems.",
    url: 'https://karanbalaji.com',
    siteName: 'Karan Balaji Portfolio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Karan Balaji - Design Engineer from Toronto",
    description: "Design Engineer specializing in rapid prototyping with Cursor, ShadCN, and Next.js. Expert in PostHog experimentation and conversion optimization.",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
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
        <GoogleAnalytics />
      </body>
    </html>
  );
}
