import { mutation } from "./_generated/server";
import { v } from "convex/values";

// Project data structure extracted from hardcoded components
const projects = [
  // PocketHealth Project
  {
    slug: "pockethealth",
    title: "Design Engineering at PocketHealth.com",
    description: "Growth Engineering Case Study for PocketHealth.com - Boosting conversions from 650K to 1.1M through data-driven UX optimization",
    coverImage: "/images/projects/pockethealth/pockethealth-cover.png",
    liveUrl: "https://pockethealth.com",
    githubUrl: "#",
    figmaUrl: "https://figma.com/file/pockethealth-designs",
    order: 2,
    toc: [
      {
        id: "executive-summary",
        label: "Executive Summary",
        subsections: [
          { id: "key-metrics", label: "Key Metrics" },
          { id: "impact-overview", label: "Impact Overview" }
        ]
      },
      {
        id: "problem-statement",
        label: "Problem Statement",
        subsections: [
          { id: "conversion-challenges", label: "Conversion Challenges" },
          { id: "user-personas", label: "User Personas" },
          { id: "technical-debt", label: "Technical Debt" }
        ]
      },
      {
        id: "design-thinking",
        label: "Design Process",
        subsections: [
          { id: "research-insights", label: "Research & Insights" },
          { id: "ab-testing", label: "A/B Testing Strategy" },
          { id: "iterative-design", label: "Iterative Design" },
          { id: "implementation", label: "Implementation" }
        ]
      },
      {
        id: "user-flows",
        label: "User Flows",
        subsections: [
          { id: "landing-page-optimization", label: "Landing Page Optimization" },
          { id: "landing-pages", label: "Landing Page Templates" },
          { id: "mobile-experience", label: "Mobile Experience Design" }
        ]
      },
      {
        id: "features",
        label: "UX Laws & Heuristic Evaluation",
        subsections: [
          { id: "conversion-optimization", label: "UX Laws Applied" },
          { id: "analytics-tracking", label: "Heuristic Evaluation" },
          { id: "performance-improvements", label: "UX Improvements" }
        ]
      },
      {
        id: "ux-principles",
        label: "UX Principles & Outcome-Driven Design",
        subsections: [
          { id: "fundamental-laws", label: "Fundamental UX Laws" },
          { id: "outcome-driven-design", label: "Outcome-Driven Design" },
          { id: "references", label: "References" }
        ]
      },
      {
        id: "social-proof",
        label: "Results & Impact",
        subsections: [
          { id: "conversion-metrics", label: "Conversion Metrics" },
          { id: "performance-gains", label: "Performance Gains" },
          { id: "seo-improvements", label: "SEO Improvements" }
        ]
      },
      {
        id: "tech-stack",
        label: "Tech Stack",
        subsections: [
          { id: "analytics-tools", label: "Analytics Tools" },
          { id: "testing-platforms", label: "Testing Platforms" },
          { id: "design-tools", label: "Design Tools" }
        ]
      }
    ],
    sections: [
      {
        type: "hero",
        content: JSON.stringify({
          badge: "Design Engineering Case Study",
          title: "Design Engineering at PocketHealth.com",
          subtitle: "Boosting sign-up conversions from 650K to 1.1M through mobile-first design, outcome-driven optimization, and patient-centered UX engineering.",
          ctaText: "View Live Platform",
          ctaUrl: "https://pockethealth.com",
          coverImage: "/images/projects/pockethealth/pockethealth-cover.png"
        })
      },
      {
        type: "quick-facts",
        content: JSON.stringify({
          facts: [
            {
              label: "Lighthouse Score",
              value: "55% → 92%",
              description: "Performance improvement",
              icon: "Clock"
            },
            {
              label: "Role",
              value: "Design Engineer",
              description: "Growth team at Series B",
              icon: "Users"
            },
            {
              label: "Focus",
              value: "Mobile-First",
              description: "61% mobile users",
              icon: "Zap"
            },
            {
              label: "Impact",
              value: "69% Growth",
              description: "650K → 1.1M conversions",
              icon: "TrendingUp"
            }
          ],
          tags: ["Patient-Centered Design", "Mobile-First Approach", "Outcome-Driven"]
        })
      },
      {
        type: "executive-summary",
        content: JSON.stringify({
          title: "Executive Summary",
          metrics: [
            {
              label: "sign-up conversions",
              value: "650K → 1.1M",
              color: "green"
            },
            {
              label: "monthly conversion rate improvement",
              value: "+17%",
              color: "blue"
            },
            {
              label: "SEO score improvement",
              value: "55% → 92%",
              color: "purple"
            },
            {
              label: "Google Lighthouse performance",
              value: "+30%",
              color: "orange"
            },
            {
              label: "pages with analytics tracking",
              value: "300+",
              color: "indigo"
            },
            {
              label: "responsive landing page templates",
              value: "100+",
              color: "pink"
            }
          ],
          impact: [
            "As a <strong>Design Engineer on the Growth Team</strong> at PocketHealth (Series B), I led patient-centered UX optimization initiatives that transformed the platform's conversion funnel. Through mobile-first design, outcome-driven optimization, and systematic A/B testing, I delivered measurable growth that directly contributed to the company's expansion goals.",
            "My work focused heavily on the patient persona, spanning mobile-first design optimization, UX heuristic evaluation, and outcome-driven testing. By leveraging tools like Hotjar, Google Optimize, and Amplitude, I created a scalable framework for continuous optimization that reduced iteration cycles from weeks to days while maintaining patient-centered user experiences."
          ]
        })
      },
      {
        type: "problem-statement",
        content: JSON.stringify({
          title: "Problem Statement",
          description: "PocketHealth faced significant growth challenges with conversion optimization, technical performance, and data-driven decision making that were limiting their ability to scale user acquisition effectively.",
          challenges: [
            {
              title: "Conversion Bottlenecks",
              description: "Sign-up conversion rates were plateauing at 650K with declining month-over-month growth",
              impact: "Limited user acquisition growth",
              icon: "TrendingDown"
            },
            {
              title: "Technical Debt",
              description: "Legacy landing pages with poor performance, slow load times, and SEO issues",
              impact: "55% SEO score, poor Lighthouse metrics",
              icon: "Code"
            },
            {
              title: "Lack of Data-Driven Insights",
              description: "Limited A/B testing infrastructure and analytics tracking across 300+ pages",
              impact: "Decisions based on assumptions",
              icon: "Target"
            }
          ],
          personas: [
            {
              name: "Patients (Primary Focus)",
              description: "Individuals seeking easy access to their medical imaging and health records",
              painPoints: ["Complex mobile navigation", "Confusing sign-up process", "Poor mobile experience", "Lack of clear value proposition"],
              goals: ["Simple mobile registration", "Easy record access", "Trust and security", "Mobile-friendly interface"]
            },
            {
              name: "Healthcare Providers",
              description: "Medical practices and clinics wanting to onboard PocketHealth for their patients",
              painPoints: ["Complex onboarding process", "Integration challenges", "Staff training requirements"],
              goals: ["Streamlined onboarding", "Easy patient enrollment", "Reliable platform integration"]
            }
          ],
          technicalDebt: {
            performanceIssues: ["Slow page load times", "Poor mobile experience", "Unoptimized JavaScript"],
            seoProblems: ["500+ broken links", "Poor metadata", "184 language issues"],
            analyticsGaps: ["Limited tracking", "No A/B testing", "Poor data insights"]
          }
        })
      },
      {
        type: "tech-stack",
        content: JSON.stringify({
          title: "Tech Stack & Tools",
          description: "A comprehensive toolkit for growth engineering, combining analytics, testing, and design tools to enable data-driven optimization and rapid experimentation.",
          categories: [
            {
              id: "analytics-tools",
              title: "Analytics Tools",
              description: "Data tracking and user behavior analysis",
              tools: [
                {
                  name: "Google Analytics",
                  purpose: "Conversion funnel analysis and user journey tracking",
                  impact: "Enabled data-driven optimization decisions"
                },
                {
                  name: "Amplitude",
                  purpose: "Advanced user behavior analytics and cohort analysis",
                  impact: "Improved user segmentation and targeting"
                },
                {
                  name: "Hotjar",
                  purpose: "Heatmaps, session recordings, and user feedback",
                  impact: "Identified UX pain points and optimization opportunities"
                },
                {
                  name: "Google Tag Manager",
                  purpose: "Event tracking and analytics implementation",
                  impact: "Streamlined analytics deployment across 300+ pages"
                }
              ]
            },
            {
              id: "testing-platforms",
              title: "Testing Platforms",
              description: "A/B testing and experimentation framework",
              tools: [
                {
                  name: "Google Optimize",
                  purpose: "A/B testing, multivariate testing, and redirect tests",
                  impact: "17% monthly conversion rate improvement"
                },
                {
                  name: "Figma",
                  purpose: "Design prototyping and user testing",
                  impact: "Reduced design iteration cycles from weeks to days"
                },
                {
                  name: "Ahrefs",
                  purpose: "SEO testing and optimization",
                  impact: "Improved SEO score from 55% to 92%"
                },
                {
                  name: "Google Lighthouse",
                  purpose: "Performance testing and optimization",
                  impact: "30% improvement in performance scores"
                }
              ]
            },
            {
              id: "design-tools",
              title: "Design Tools",
              description: "Design system and prototyping tools",
              tools: [
                {
                  name: "Figma",
                  purpose: "End-to-end design process and collaboration",
                  impact: "Built 100+ responsive landing page templates"
                },
                {
                  name: "Notion",
                  purpose: "Kanban project management and documentation",
                  impact: "Streamlined agile design sprints"
                },
                {
                  name: "Miro",
                  purpose: "Collaborative whiteboarding and user journey mapping",
                  impact: "Enhanced team collaboration and design thinking"
                },
                {
                  name: "Material Design",
                  purpose: "Google's design system for consistent UI patterns",
                  impact: "Improved accessibility and familiar user interactions"
                }
              ]
            }
          ],
          metrics: [
            {
              category: "Performance Metrics",
              items: [
                { metric: "Google Lighthouse Score", before: "70%", after: "100%", improvement: "+30%" },
                { metric: "Page Load Speed", before: "3.2s", after: "1.4s", improvement: "+55%" },
                { metric: "Mobile Performance", before: "65%", after: "95%", improvement: "+30%" }
              ]
            },
            {
              category: "SEO Metrics",
              items: [
                { metric: "SEO Health Score", before: "55%", after: "92%", improvement: "+37%" },
                { metric: "Broken Links Fixed", before: "500+", after: "0", improvement: "100%" },
                { metric: "Language Issues", before: "184", after: "0", improvement: "100%" }
              ]
            },
            {
              category: "Conversion Metrics",
              items: [
                { metric: "Sign-up Conversions", before: "650K", after: "1.1M", improvement: "+69%" },
                { metric: "Monthly Conversion Rate", before: "Baseline", after: "+17%", improvement: "17%" },
                { metric: "A/B Test Uplift", before: "N/A", after: "6-14%", improvement: "Avg 10%" }
              ]
            }
          ],
          implementationHighlights: {
            analyticsInfrastructure: ["Cross-domain tracking setup", "Custom event taxonomy design", "Real-time dashboard creation", "Automated reporting workflows"],
            performanceOptimization: ["JavaScript code splitting", "Image optimization pipeline", "CDN implementation", "Critical CSS inlining"]
          }
        })
      }
    ]
  },

  // FintechToronto Project
  {
    slug: "fintechtoronto",
    title: "Design engineering + UX showcase: FintechToronto.com",
    description: "Enhanced UX Case Study for FintechToronto.com - A centralized platform for Toronto's fintech ecosystem",
    coverImage: "/images/projects/fintech-toronto/fintechtoronto-cover.png",
    liveUrl: "https://fintechtoronto.com",
    order: 1,
    toc: [
      {
        id: "executive-summary",
        label: "Executive Summary",
        subsections: [
          { id: "key-metrics", label: "Key Metrics" },
          { id: "impact-overview", label: "Impact Overview" }
        ]
      },
      {
        id: "problem-statement",
        label: "Problem Statement",
        subsections: [
          { id: "market-analysis", label: "Market Analysis" },
          { id: "user-personas", label: "User Personas" },
          { id: "pain-points", label: "Pain Points" }
        ]
      },
      {
        id: "design-thinking",
        label: "Design Process",
        subsections: [
          { id: "empathize-define", label: "Empathize & Define" },
          { id: "ideate", label: "Ideate" },
          { id: "prototype-test", label: "Prototype & Test" },
          { id: "implement", label: "Implement" }
        ]
      },
      {
        id: "user-flows",
        label: "User Flows",
        subsections: [
          { id: "content-creation", label: "Content Creation" },
          { id: "event-discovery", label: "Event Discovery" },
          { id: "user-onboarding", label: "User Onboarding" }
        ]
      },
      {
        id: "features",
        label: "Features & UX",
        subsections: [
          { id: "ui-patterns", label: "UI Patterns" },
          { id: "accessibility", label: "Accessibility" },
          { id: "mobile-design", label: "Mobile Design" }
        ]
      },
      {
        id: "ux-principles",
        label: "UX Principles",
        subsections: [
          { id: "usability-heuristics", label: "Usability Heuristics" },
          { id: "behavioral-economics", label: "Behavioral Economics" }
        ]
      },
      {
        id: "social-proof",
        label: "Impact",
        subsections: [
          { id: "event-success", label: "Fintech + AI Meetup" },
          { id: "community-impact", label: "Community Impact Metrics" }
        ]
      },
      {
        id: "tech-stack",
        label: "Tech Stack",
        subsections: [
          { id: "frontend", label: "Frontend" },
          { id: "backend", label: "Backend" },
          { id: "infrastructure", label: "Infrastructure" }
        ]
      }
    ],
    sections: [
      {
        type: "hero",
        content: JSON.stringify({
          badge: "UX Case Study",
          title: "Design engineering + UX showcase: FintechToronto.com",
          subtitle: "A centralized platform connecting Toronto's fintech ecosystem through user-centered design.",
          ctaText: "View Live Demo",
          ctaUrl: "https://fintechtoronto.com",
          coverImage: "/images/projects/fintech-toronto/fintechtoronto-cover.png"
        })
      },
      {
        type: "quick-facts",
        content: JSON.stringify({
          facts: [
            {
              label: "Timeline",
              value: "3 months",
              description: "Design to launch",
              icon: "Clock"
            },
            {
              label: "Team Size",
              value: "Solo Project",
              description: "Full-stack development",
              icon: "Users"
            },
            {
              label: "Key Tools",
              value: "Cursor + Figma",
              description: "AI-assisted design engineering",
              icon: "Zap"
            },
            {
              label: "Impact",
              value: "40%+ Growth",
              description: "Organic traffic increase",
              icon: "TrendingUp"
            }
          ],
          tags: ["User-Centered Design", "Community-Driven", "Data-Informed"]
        })
      },
      {
        type: "executive-summary",
        content: JSON.stringify({
          title: "Executive Summary",
          description: [
            "Born out of NEXT AI and my experience boosting my fintech AI Voice Agent project, FintechToronto.com was conceived as a solo project to strengthen the entire fintech ecosystem through community building and enhanced marketing efforts. This platform addresses a critical gap in Toronto's fintech landscape by providing a centralized, user-friendly hub that connects professionals, entrepreneurs, investors, and enthusiasts while building relevance and community engagement across the ecosystem.",
            "This case study documents our user-centered design process, from initial research through implementation and continuous improvement, showcasing how strategic community-focused design can amplify an entire industry's marketing and networking capabilities."
          ],
          metrics: [
            {
              label: "projected increase in community engagement",
              value: "70-85%",
              description: "measured by content submissions and comments"
            },
            {
              label: "expected improvement in event discovery and attendance",
              value: "50-65%",
              description: ""
            },
            {
              label: "target user satisfaction rating with platform usability",
              value: "85-95%",
              description: ""
            },
            {
              label: "anticipated growth in newsletter subscribers within first 6 months",
              value: "2.5-3.5×",
              description: ""
            }
          ]
        })
      },
      {
        type: "problem-statement",
        content: JSON.stringify({
          title: "Problem Statement & Context Analysis",
          description: "Toronto's fintech community lacked a centralized, user-friendly platform for sharing news, events, and resources. Existing solutions were fragmented, with poor user experience, limited content management, and no seamless way for users to contribute or stay updated on local fintech happenings.",
          marketAnalysis: {
            context: "Toronto ranks as the 2nd largest financial center in North America and hosts over 380 fintech startups, yet research revealed significant fragmentation in the ecosystem.",
            competitorLimitations: [
              { solution: "LinkedIn Groups", limitations: "Poor discoverability, limited content organization" },
              { solution: "Meetup.com", limitations: "Event-focused only, no content or resource sharing" },
              { solution: "Corporate blogs", limitations: "Siloed information, company-specific focus" },
              { solution: "Industry newsletters", limitations: "One-way communication, no community features" }
            ]
          },
          userNeeds: {
            description: "Through interviews with 42 stakeholders across the fintech ecosystem and surveys of 215 community members, we identified core user needs:",
            needs: [
              { category: "Information Consolidation", stat: "76%", detail: "of users reported spending 3+ hours weekly searching for fintech news and events across multiple platforms" },
              { category: "Community Connection", stat: "83%", detail: "expressed interest in networking opportunities with easier discovery" },
              { category: "Content Contribution", stat: "64%", detail: "wanted to share insights but lacked appropriate channels" },
              { category: "Career Development", stat: "91%", detail: "sought ecosystem visibility for professional growth" }
            ]
          },
          personas: [
            {
              name: "Fintech Professional",
              description: "Mid-career tech or finance specialist working in fintech",
              primaryNeeds: "Industry insights, networking opportunities, career advancement",
              painPoints: "Information overload, fragmented resources"
            },
            {
              name: "Event Organizer",
              description: "Community builder planning meetups and conferences",
              primaryNeeds: "Audience reach, streamlined registration, event promotion",
              painPoints: "Poor targeting, manual processes"
            },
            {
              name: "Content Creator",
              description: "Thought leader, writer, industry analyst",
              primaryNeeds: "Platform for sharing expertise, audience growth",
              painPoints: "Limited distribution channels, low visibility"
            },
            {
              name: "Fintech Entrepreneur",
              description: "Startup founder seeking connections and resources",
              primaryNeeds: "Investor connections, talent acquisition, market insights",
              painPoints: "Time constraints, ecosystem fragmentation"
            },
            {
              name: "Fintech Enthusiast",
              description: "Student or career-changer interested in the industry",
              primaryNeeds: "Learning resources, entry points to the community",
              painPoints: "Overwhelmed by technical jargon"
            }
          ]
        })
      },
      {
        type: "tech-stack",
        content: JSON.stringify({
          title: "Tech Stack & Implementation Details",
          frontend: {
            coreTechnologies: [
              { tech: "Framework", value: "Next.js 14 (App Router)" },
              { tech: "Language", value: "TypeScript for type safety" },
              { tech: "State Management", value: "React Context + Zustand" },
              { tech: "Data Fetching", value: "TanStack Query (React Query)" },
              { tech: "Styling", value: "Tailwind CSS + CSS Variables" }
            ],
            testingDevOps: [
              { tech: "Unit Testing", value: "Vitest + Testing Library" },
              { tech: "E2E Testing", value: "Playwright" },
              { tech: "CI/CD", value: "GitHub Actions" },
              { tech: "Hosting", value: "AWS Amplify" },
              { tech: "Monitoring", value: "New Relic + Sentry" },
              { tech: "Analytics", value: "PostHog for A/B testing & product analytics" }
            ],
            componentLibraries: {
              shadcn: ["Dialog for modal interfaces", "Command for search interfaces", "Form for data collection", "Avatar for user profiles", "Card for content displays", "Toast for notifications"],
              radix: ["Popover for contextual information", "Accordion for expandable content", "Tabs for multi-view interfaces", "Select for dropdown menus"],
              magicUI: ["Carousel for featured content", "Calendar for event scheduling", "Rich Text Editor for submissions", "File Upload for resource sharing"]
            }
          },
          backend: {
            databaseAuth: [
              { tech: "Database", value: "Supabase PostgreSQL for relational data" },
              { tech: "Authentication", value: "Supabase Auth with OAuth providers" },
              { tech: "Storage", value: "AWS S3 Bucket for image uploads & assets" },
              { tech: "CMS", value: "Sanity CMS synced with Supabase" },
              { tech: "Realtime", value: "Supabase Realtime for live updates" }
            ],
            apiArchitecture: [
              { tech: "API Strategy", value: "REST API with Next.js API routes" },
              { tech: "Serverless Functions", value: "Edge Functions for global performance" },
              { tech: "Caching", value: "Incremental Static Regeneration for efficiency" },
              { tech: "Middleware", value: "Custom Auth and Logging middleware" }
            ],
            performance: [
              { tech: "Image Optimization", value: "Next.js Image Component with CDN" },
              { tech: "Code Splitting", value: "Dynamic imports for route-based chunking" },
              { tech: "Edge Caching", value: "CDN distribution with short TTLs" },
              { tech: "Bundle Optimization", value: "Tree-shaking and code minification" }
            ],
            integrations: [
              { tech: "Email", value: "Resend for transactional emails" },
              { tech: "Notifications", value: "Novu for multi-channel notifications" },
              { tech: "Search", value: "Meilisearch for fast, relevant results" },
              { tech: "Analytics", value: "PostHog for product analytics & A/B testing" },
              { tech: "Performance", value: "New Relic for application monitoring" },
              { tech: "Content", value: "Sanity CMS for flexible content management" }
            ]
          },
          futurePlans: {
            userMotivation: {
              challenge: "Primary Challenge: User Motivation & Engagement",
              description: "The main challenge is keeping users motivated to actively contribute content, events, and engage with the community.",
              solutions: ["Gamification with contribution points and community recognition", "Personalized content recommendations based on user interests", "Regular community challenges and featured contributor spotlights", "Peer-to-peer mentoring and networking facilitation"]
            },
            contentModeration: {
              enhancement: "Future Enhancement: Advanced Content Moderation",
              description: "As the platform scales, we plan to implement sophisticated content management:",
              features: ["AI-powered content screening with machine learning models", "Community-driven moderation with trusted user programs", "Automated quality scoring for content recommendations", "Real-time content flagging and resolution workflows"]
            },
            collaboration: {
              enhancement: "Future Enhancement: Real-time Collaboration Features",
              description: "Planned improvements for enhanced user engagement and interaction:",
              features: ["Live discussion rooms during events with real-time chat", "Collaborative document editing for community projects", "Interactive networking features with smart matching", "Virtual event hosting with integrated video conferencing"]
            }
          }
        })
      }
    ]
  }
];

export default mutation({
  args: {},
  handler: async (ctx) => {
    let inserted = 0;
    let skipped = 0;

    for (const project of projects) {
      // Check if project already exists
      const existing = await ctx.db
        .query("projects")
        .withIndex("by_slug", (q) => q.eq("slug", project.slug))
        .first();

      if (!existing) {
        await ctx.db.insert("projects", project);
        inserted++;
        console.log(`✅ Inserted project: ${project.title}`);
      } else {
        skipped++;
        console.log(`⏭️  Skipped (exists): ${project.title}`);
      }
    }

    return {
      success: true,
      message: `Projects seeding complete: ${inserted} inserted, ${skipped} skipped`,
      inserted,
      skipped,
    };
  },
});
