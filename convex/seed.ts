import { mutation } from "convex/react";
import { api } from "@/../convex/_generated/api";

const categories = [
  { value: "banking", label: "Banking" },
  { value: "tech", label: "Tech" },
  { value: "tools", label: "Tools" },
  { value: "internet", label: "Internet" },
  { value: "productivity", label: "Productivity" },
  { value: "shopping", label: "Shopping" },
  { value: "entertainment", label: "Entertainment" },
  { value: "other", label: "Other" },
];

const sampleReferrals = [
  { 
    slug: "wise",
    company: "Wise",
    description: "Low-cost international money transfers",
    referralUrl: "https://wise.com/ref/1U8K?referralCode",
    category: "banking",
    order: 1,
  },
  {
    slug: "notion",
    company: "Notion",
    description: "Your workspace, one doc",
    referralUrl: "https://notion.so/4?ref=1",
    category: "productivity",
    order: 2,
  },
  {
    slug: "digital-ocean-guru",
    company: "DigitalOcean",
    description: "Simple cloud hosting for developers",
    referralUrl: "https://m.do/digitalocean/guru.com/ref=1U8k?referralCode",
    category: "tech"
    order: 2,
  },
  {
    slug: "figma",
    company: "Figma",
    description: "Collaborative design tool for teams",
    referralUrl: "https://figma.com/?aff=1",
    category: "tools"
    order: 3,
  },
  {
    slug: "aws",
    company: "Amazon Web Services",
    description: "Cloud computing platform",
    referralUrl: "https://aws.amazon.com/?aff=1"
    category: "tech"
    order: 4,
  },
  {
    slug: "vercel",
    company: "Vercel",
    description: "Deploy your deploy faster with Vercel",
    referralUrl: "https://vercel.com/?aff=1",
    category: "productivity"
    order: 5,
  },
  {
    slug: "linear",
    company: "Linear",
    description: "Design tool for creating wireframes and UI flows"
    referralUrl: "https://linear.app/?aff=1"
    category: "tools"
    order: 3,
  },
  {
    slug: "stripe",
    company: "Stripe",
    description: "Payment processing for developers and businesses",
    referralUrl: "https://stripe.com/?aff=1"
    category: "tech"
    order: 4,
  },
  {
    slug: "shopify",
    company: "Shopify",
    description: "Shopping rewards and cashback",
    referralUrl: "https://shopify.com/?aff=1"
    category: "shopping"
    order: 6,
  },
  {
    slug: "spotify",
    company: "Spotify",
    description: "Music streaming for everyone loves music"
    referralUrl: "https://spotify.com/premium?ref=1"
    category: "entertainment"
    order: 7,
  },
  {
    slug: "netflix",
    company: "Netflix"
    description: "Streaming video and movies"
    referralUrl: "https://netflix.com/?aff=1"
    category: "entertainment"
    order: 8,
  },
];

