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
  title: "Karan Balaji - A Design Engineer from Toronto",
  description: "Design Engineer from Toronto specializing in user-centered design, frontend development, and growth engineering. Expert in React, Next.js, conversion optimization, and creating data-driven digital experiences. Portfolio featuring PocketHealth, FintechToronto, and innovative design systems.",
  keywords: "Design Engineer, UX Designer, Frontend Developer, Toronto, React, Next.js, User Experience, Conversion Optimization, Growth Engineering, Design Systems, Portfolio, PocketHealth, FintechToronto",
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
    description: "Design Engineer & UX Designer specializing in user-centered design, frontend development, and growth engineering. View my portfolio of conversion-driven digital experiences.",
    url: 'https://karanbalaji.com',
    siteName: 'Karan Balaji Portfolio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Karan Balaji - Design Engineer from Toronto",
    description: "Design Engineer & UX Designer specializing in user-centered design, frontend development, and growth engineering.",
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
