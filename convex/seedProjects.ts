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
      },
      {
        type: "design-thinking",
        content: JSON.stringify({
          title: "Design Process",
          description: "A systematic approach to design engineering combining patient-centered research, mobile-first optimization, and outcome-driven experimentation to improve healthcare accessibility and user experience.",
          phases: [
            {
              title: "Research & Insights",
              description: "User research, analytics analysis, and competitive benchmarking",
              activities: ["Hotjar heatmap analysis of 300+ pages", "User interview sessions with healthcare professionals", "Conversion funnel analysis using Google Analytics", "Competitive analysis of healthcare platforms"],
              outcomes: ["Identified 3 key conversion bottlenecks", "Mapped user journey pain points", "Established baseline metrics"]
            },
            {
              title: "A/B Testing Strategy",
              description: "Systematic experimentation framework using Google Optimize",
              activities: ["Multivariate test design for landing pages", "Redirect tests for user flow optimization", "Statistical significance planning", "Test prioritization matrix creation"],
              outcomes: ["17% monthly conversion rate improvement", "6-14% increase across test variants", "Data-driven decision framework"]
            },
            {
              title: "Iterative Design",
              description: "Rapid prototyping and testing cycles in Figma",
              activities: ["Wireframe to high-fidelity prototype pipeline", "Mobile-first responsive design system", "Cross-functional feedback integration", "Design handoff optimization"],
              outcomes: ["Reduced design iterations from 4-5 to 1-2", "Timeline reduction from weeks to days", "100+ reusable component library"]
            },
            {
              title: "Implementation",
              description: "Performance optimization and analytics integration",
              activities: ["JavaScript deferring for performance", "Google Tag Manager implementation", "Amplitude analytics setup", "SEO optimization using Ahrefs"],
              outcomes: ["30% Google Lighthouse score improvement", "55% page speed increase", "92% SEO score achievement"]
            }
          ]
        })
      },
      {
        type: "user-flows",
        content: JSON.stringify({
          title: "User Flows & Optimization",
          description: "Systematic optimization of user journeys through data-driven design decisions, A/B testing, and mobile-first approaches to maximize conversion rates.",
          flows: [
            {
              title: "Landing Page Optimization",
              description: "Patient-focused conversion optimization with mobile-first approach",
              steps: [
                { step: "Value Proposition", description: "Clear patient-centered messaging and benefits", improvements: ["Simplified healthcare language", "Trust indicators", "Patient testimonials"], impact: "14% conversion improvement" },
                { step: "Mobile Layout", description: "Optimized for 61% mobile user base", improvements: ["Touch-friendly CTAs", "Readable typography", "Fast loading"], impact: "23% mobile conversion increase" },
                { step: "Social Proof", description: "Healthcare provider endorsements and patient reviews", improvements: ["Provider logos", "Patient success stories", "Security badges"], impact: "18% trust indicator uplift" },
                { step: "Call-to-Action", description: "Clear next steps for patient registration", improvements: ["Prominent CTA buttons", "Progress indicators", "Benefit reinforcement"], impact: "31% click-through increase" }
              ]
            },
            {
              title: "Landing Page Templates",
              description: "100+ responsive templates for high-traffic campaigns",
              steps: [
                { step: "Template System", description: "Modular component-based landing page architecture", improvements: ["Reusable components", "Dynamic content", "A/B test variants"], impact: "75% faster page creation" },
                { step: "Content Strategy", description: "Data-driven content optimization for different audiences", improvements: ["Persona-specific messaging", "Dynamic CTAs", "Localized content"], impact: "12% average conversion uplift" },
                { step: "Performance", description: "Optimized for speed and SEO across all templates", improvements: ["Lazy loading", "Critical CSS", "Image optimization"], impact: "40% faster load times" },
                { step: "Analytics", description: "Comprehensive tracking for all template variations", improvements: ["Event tracking", "Conversion funnels", "Heatmap integration"], impact: "100% tracking coverage" }
              ]
            },
            {
              title: "Mobile Experience Design",
              description: "Mobile-first design optimization for 61% mobile user base",
              steps: [
                { step: "Bottom Navigation", description: "Experimented with bottom navigation for better mobile UX", improvements: ["Thumb-zone optimization", "Quick access to key features", "Reduced cognitive load"], impact: "35% mobile engagement increase" },
                { step: "Touch Optimization", description: "Optimized for mobile touch interactions", improvements: ["44px minimum touch targets", "Gesture-friendly design", "Haptic feedback"], impact: "28% mobile usability improvement" },
                { step: "Performance", description: "Fast loading for mobile networks and devices", improvements: ["Compressed assets", "Lazy loading", "Progressive enhancement"], impact: "60% faster mobile load times" },
                { step: "Mobile Testing", description: "Comprehensive testing across mobile devices", improvements: ["Real device testing", "Network simulation", "Mobile accessibility"], impact: "95% mobile compatibility" }
              ]
            }
          ],
          beforeAfter: [
            {
              category: "Sign-up Conversion",
              before: { title: "Before Optimization", issues: ["7-field registration form", "No social proof elements", "Generic messaging", "Poor mobile experience", "No progress indicators"], metrics: "2.3% conversion rate" },
              after: { title: "After Optimization", improvements: ["3-field simplified form", "Trust badges and testimonials", "Persona-specific messaging", "Mobile-first design", "Clear progress indicators"], metrics: "3.9% conversion rate (+69%)" }
            },
            {
              category: "Page Performance",
              before: { title: "Before Optimization", issues: ["5.2s average load time", "Large unoptimized images", "Blocking JavaScript", "No caching strategy", "Poor mobile performance"], metrics: "55% Google Lighthouse score" },
              after: { title: "After Optimization", improvements: ["2.1s average load time", "WebP image format", "Deferred JavaScript loading", "Aggressive caching", "Mobile-optimized assets"], metrics: "92% Google Lighthouse score (+67%)" }
            },
            {
              category: "SEO Performance",
              before: { title: "Before Optimization", issues: ["500+ broken links", "184 language issues", "Missing meta descriptions", "Poor internal linking", "No structured data"], metrics: "Limited organic visibility" },
              after: { title: "After Optimization", improvements: ["All broken links fixed", "Multilingual optimization", "Complete meta data", "Strategic internal linking", "Rich snippets implemented"], metrics: "300% organic traffic increase" }
            },
            {
              category: "A/B Testing",
              before: { title: "Before Testing", issues: ["No systematic testing", "Assumption-based decisions", "Limited data collection", "No variant tracking", "Manual optimization"], metrics: "Static conversion rates" },
              after: { title: "After Testing", improvements: ["Continuous A/B testing", "Data-driven decisions", "Comprehensive analytics", "Automated variant tracking", "Systematic optimization"], metrics: "17% monthly improvement rate" }
            }
          ],
          flowMetrics: [
            { metric: "Conversion Growth", improvement: "+69%", description: "Overall sign-up conversion improvement from 650K to 1.1M users" },
            { metric: "Monthly Optimization", improvement: "+17%", description: "Consistent monthly conversion rate improvements through A/B testing" },
            { metric: "Mobile Performance", improvement: "+35%", description: "Mobile conversion rate increase through responsive design" },
            { metric: "Page Speed", improvement: "+60%", description: "Faster load times through performance optimization" }
          ]
        })
      },
      {
        type: "features",
        content: JSON.stringify({
          title: "UX Laws & Heuristic Evaluation",
          description: "Applied fundamental UX laws and conducted systematic heuristic evaluation to improve PocketHealth's usability and patient experience.",
          uxLaws: [
            { title: "Jakob's Law", description: "Users spend most of their time on other sites, so they prefer your site to work the same way", application: "Implemented familiar healthcare portal patterns and standard navigation conventions", impact: "Reduced learning curve for patients" },
            { title: "Miller's Law", description: "The average person can only keep 7±2 items in their working memory", application: "Simplified navigation to 5 main sections and chunked information", impact: "Improved information processing" },
            { title: "Hick's Law", description: "The time it takes to make a decision increases with the number of alternatives", application: "Streamlined patient onboarding with progressive disclosure", impact: "Faster decision-making" },
            { title: "Fitts's Law", description: "The time to acquire a target is a function of the distance to and size of the target", application: "Optimized mobile touch targets to 44px minimum", impact: "Improved mobile usability" }
          ],
          heuristicEvaluation: [
            { heuristic: "Visibility of System Status", before: "No loading indicators", after: "Clear loading states and progress indicators", improvement: "25% reduction in user confusion" },
            { heuristic: "Match Between System and Real World", before: "Technical medical jargon", after: "Patient-friendly language", improvement: "30% improvement in comprehension" },
            { heuristic: "User Control and Freedom", before: "Limited navigation options", after: "Clear breadcrumbs and escape routes", improvement: "40% reduction in user frustration" }
          ]
        })
      },
      {
        type: "ux-principles",
        content: JSON.stringify({
          title: "UX Principles & Outcome-Driven Design",
          description: "Applied fundamental UX laws and outcome-driven design principles to create patient-centered experiences.",
          principles: [
            { title: "Jakob's Law", description: "Users spend most of their time on other sites, so they prefer your site to work the same way as all the other sites they already know.", application: "Implemented familiar healthcare portal patterns and standard navigation conventions to reduce learning curve." },
            { title: "Miller's Law", description: "The average person can only keep 7±2 items in their working memory at one time.", application: "Simplified navigation to 5 main sections and chunked information into digestible pieces to reduce cognitive load." },
            { title: "Hick's Law", description: "The time it takes to make a decision increases with the number and complexity of choices.", application: "Streamlined patient onboarding with progressive disclosure and clear primary actions to speed decision-making." },
            { title: "Fitts's Law", description: "The time to acquire a target is a function of the distance to and size of the target.", application: "Optimized mobile touch targets to 44px minimum and positioned CTAs in thumb-friendly zones for better usability." }
          ],
          outcomeDriven: {
            description: "My approach at PocketHealth aligned with outcome-driven design principles, focusing on measurable patient outcomes rather than just interface aesthetics.",
            outcomes: ["Patient sign-up conversion rates", "Mobile engagement metrics", "Task completion times", "User satisfaction scores"],
            decisions: ["A/B test results and statistical significance", "User behavior analytics and heatmaps", "Patient feedback and usability testing", "Business impact and ROI metrics"]
          }
        })
      },
      {
        type: "social-proof",
        content: JSON.stringify({
          title: "Results & Impact",
          description: "Measurable outcomes from systematic growth engineering, demonstrating the impact of data-driven optimization and user-centered design on business metrics.",
          achievements: [
            { title: "Conversion Growth", metric: "650K → 1.1M", description: "Sign-up conversions increased by 69% through systematic optimization", details: ["17% monthly conversion rate improvement", "6-14% uplift across A/B test variants", "Consistent month-over-month growth"] },
            { title: "Performance Optimization", metric: "+30%", description: "Google Lighthouse score improvement through technical optimization", details: ["55% page speed increase", "JavaScript deferring implementation", "Mobile performance optimization"] },
            { title: "SEO Excellence", metric: "55% → 92%", description: "SEO health score improvement using Ahrefs optimization", details: ["500+ broken links fixed", "184 language issues resolved", "Multilingual metadata optimization"] },
            { title: "Analytics Implementation", metric: "300+", description: "Pages with comprehensive analytics tracking and event monitoring", details: ["Google Tag Manager setup", "Custom event taxonomy", "Cross-domain tracking"] }
          ],
          testimonials: [
            { quote: "The growth engineering work transformed our conversion funnel. The data-driven approach and systematic A/B testing delivered measurable results that directly impacted our business goals.", author: "Growth Team Lead", role: "PocketHealth", impact: "17% monthly conversion improvement" },
            { quote: "The mobile-first design approach and performance optimizations significantly improved our user experience. Healthcare professionals can now access the platform seamlessly on any device.", author: "Product Manager", role: "PocketHealth", impact: "30% performance improvement" },
            { quote: "The analytics infrastructure and tracking implementation provided unprecedented insights into user behavior, enabling data-driven decision making across all product initiatives.", author: "Engineering Manager", role: "PocketHealth", impact: "300+ pages tracked" }
          ],
          timeline: [
            { phase: "Month 1", title: "Research & Analysis", achievements: ["Baseline metrics established", "User research completed", "Analytics infrastructure setup"] },
            { phase: "Month 2", title: "Testing & Optimization", achievements: ["A/B testing framework implemented", "First conversion improvements", "Performance optimization started"] },
            { phase: "Month 3", title: "Scale & Results", achievements: ["100+ landing page templates", "SEO score improvement to 92%", "650K → 1.1M conversion milestone"] }
          ]
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
          content: [
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
          challenges: [
            {
              title: "Fragmented Ecosystem",
              description: "Toronto's fintech community was scattered across LinkedIn Groups, Meetup.com, corporate blogs, and newsletters with no unified hub connecting professionals, events, and resources.",
              impact: "76% spend 3+ hours weekly searching for fintech news across multiple platforms"
            },
            {
              title: "Limited Community Engagement",
              description: "Professionals were interested in connecting but lacked a dedicated fintech platform with community features, networking tools, and event discovery in one place.",
              impact: "83% expressed interest in networking with easier discovery but no dedicated platform existed"
            },
            {
              title: "Content Contribution Barriers",
              description: "Thought leaders and industry professionals had valuable insights to share but lacked appropriate channels within the fintech ecosystem to reach a targeted audience.",
              impact: "64% wanted to share insights but lacked appropriate channels"
            }
          ],
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
              painPoints: ["Information overload", "Fragmented resources"],
              goals: ["Easy access to fintech news", "Networking opportunities"]
            },
            {
              name: "Event Organizer",
              description: "Community builder planning meetups and conferences",
              primaryNeeds: "Audience reach, streamlined registration, event promotion",
              painPoints: ["Poor targeting", "Manual processes"],
              goals: ["Better event promotion", "Streamlined registration"]
            },
            {
              name: "Content Creator",
              description: "Thought leader, writer, industry analyst",
              primaryNeeds: "Platform for sharing expertise, audience growth",
              painPoints: ["Limited distribution channels", "Low visibility"],
              goals: ["wider audience reach", "Community engagement"]
            },
            {
              name: "Fintech Entrepreneur",
              description: "Startup founder seeking connections and resources",
              primaryNeeds: "Investor connections, talent acquisition, market insights",
              painPoints: ["Time constraints", "Ecosystem fragmentation"],
              goals: ["Investor networking", "Talent acquisition"]
            },
            {
              name: "Fintech Enthusiast",
              description: "Student or career-changer interested in the industry",
              primaryNeeds: "Learning resources, entry points to the community",
              painPoints: ["Overwhelmed by technical jargon"],
              goals: ["Learning resources", "Community entry points"]
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
      },
      {
        type: "design-thinking",
        content: JSON.stringify({
          title: "Design Process",
          description: "User-centered design approach from research through implementation.",
          phases: [
            {
              title: "Empathize & Define",
              description: "Deep research into the Toronto fintech ecosystem to uncover real user pain points and define the core problem",
              activities: ["Stakeholder interviews with 42 community members across 5 fintech segments", "Survey of 215 fintech professionals for quantitative validation", "Competitive analysis of LinkedIn Groups, Meetup.com, corporate blogs, newsletters", "Jobs-to-be-Done (JTBD) framework interviews to uncover motivations", "User journey mapping across 3 primary archetypes"],
              outcomes: ["5 detailed user personas validated across segments", "3 critical JTBD statements: connect, contribute, discover", "Identified 4 core unmet needs with statistical backing", "Clear problem definition: fragmented fintech community with no central hub"]
            },
            {
              title: "Ideate",
              description: "Generating and prioritizing design solutions through structured ideation",
              activities: ["Crazy Eights rapid sketching sessions for each user flow", "How Might We (HMW) reframing exercises with stakeholder input", "Impact/Effort matrix to prioritize features for MVP", "Card sorting sessions to validate information architecture", "Mermaid diagram-based site map for 8 core sections"],
              outcomes: ["Unified Content Hub as the top-priority solution", "Community Profiles with contribution metrics", "Smart Event Calendar with personalized recommendations", "Content Submission System with editorial workflow", "Notification Engine for re-engagement"]
            },
            {
              title: "Prototype & Test",
              description: "Progressive fidelity prototyping with 3 rounds of usability testing",
              activities: ["Low-fidelity wireframes for all 8 core flows", "Mid-fidelity interactive prototypes in Figma", "High-fidelity design system with shadcn/ui and MagicUI components", "3 rounds of usability testing with 5 participants each (15 total)", "Think-aloud protocol with task completion tracking"],
              outcomes: ["47% decrease in event registration abandonment from v1 to v3", "SUS (System Usability Scale) score improved from 62 to 84", "3 critical navigation patterns revised based on testing", "95% task completion rate on core flows in final prototype"]
            },
            {
              title: "Implement",
              description: "Building and launching the platform with performance and analytics in focus",
              activities: ["Next.js 14 App Router with TypeScript for type-safe development", "Responsive development with Tailwind CSS and mobile-first approach", "PostHog analytics integration for behavior tracking and A/B testing", "SEO optimization and structured data implementation", "4-phase rollout: Core Platform → Community Features → Events → Analytics"],
              outcomes: ["40%+ organic traffic growth post-launch", "Mobile-first responsive across all breakpoints", "95% Lighthouse accessibility score achieved", "Complete analytics coverage for all user interactions"]
            }
          ]
        })
      },
      {
        type: "user-flows",
        content: JSON.stringify({
          title: "User Flows & Experience Maps",
          description: "Detailed user journey mappings for all five core flows, with flowchart diagrams, emotional journey mapping, and UX considerations.",
          flows: [
            {
              title: "4.1 Content Creation & Review Flow",
              description: "Author journey from idea conception to published content",
              mermaidDiagram: `flowchart TD\n          A[User has content idea] --> B[Access dashboard editor]\n          B --> C[Create/write content]\n          C --> D[Auto-save drafts]\n          D --> E[Preview content]\n          E --> F[Submit for review]\n          F --> G[Status tracking interface]\n          G --> H{Review decision}\n          H -->|Approved| I[Publication notification]\n          H -->|Needs revision| J[Revision request with feedback]\n          J --> K[Edit content]\n          K --> E\n          I --> L[Content goes live]\n          L --> M[Community engagement]\n          style A fill:#e1f5fe\n          style I fill:#c8e6c9\n          style J fill:#ffecb3\n          style L fill:#c8e6c9`,
              sections: [
                {
                  title: "User Journey",
                  content: [
                    "From idea conception to published content",
                    "Touchpoint 1: Dashboard content editor",
                    "Touchpoint 2: Preview and submission form",
                    "Touchpoint 3: Status tracking interface",
                    "Touchpoint 4: Revision requests (if needed)",
                    "Touchpoint 5: Publication notifications"
                  ]
                },
                {
                  title: "Emotional Journey Mapping",
                  content: [
                    "Initial excitement when creating content",
                    "Potential anxiety during review waiting period",
                    "Satisfaction and pride upon publication",
                    "Engagement fulfillment from community feedback"
                  ]
                },
                {
                  title: "UX Considerations",
                  content: [
                    "Auto-save functionality reduces anxiety about losing work",
                    "Clear status indicators maintain transparency",
                    "Constructive feedback templates for rejected submissions",
                    "Social sharing integration for amplifying published content"
                  ]
                }
              ]
            },
            {
              title: "4.2 Event Discovery & Registration Flow",
              description: "User discovery, filtering, registration, and confirmation journey",
              mermaidDiagram: `flowchart TD\n          A[User browses platform] --> B[Personalized event recommendations]\n          B --> C[Event discovery page]\n          C --> D[Filter by interests/location]\n          D --> E[View event details]\n          E --> F{Interest level}\n          F -->|High| G[Check attendee profiles]\n          F -->|Low| H[Continue browsing]\n          G --> I[Social proof validation]\n          I --> J[Registration form]\n          J --> K[Calendar integration]\n          K --> L[Confirmation & payment]\n          L --> M[Email confirmation]\n          M --> N[Pre-event reminders]\n          N --> O[Event attendance]\n          O --> P[Post-event feedback]\n          H --> B\n          style A fill:#e1f5fe\n          style G fill:#fff3e0\n          style L fill:#c8e6c9\n          style O fill:#c8e6c9`,
              sections: [
                {
                  title: "User Journey",
                  content: [
                    "From discovery to attendance",
                    "Touchpoint 1: Personalized event recommendations",
                    "Touchpoint 2: Detailed event page with social proof",
                    "Touchpoint 3: Streamlined registration form",
                    "Touchpoint 4: Calendar integration",
                    "Touchpoint 5: Pre-event reminders and materials"
                  ]
                },
                {
                  title: "Emotional Journey Mapping",
                  content: [
                    "Curiosity during browsing phase",
                    "Decision-making considerations (time, value, logistics)",
                    "Confirmation satisfaction after registration",
                    "Anticipation building through reminders",
                    "Post-event reflection and feedback"
                  ]
                },
                {
                  title: "UX Considerations",
                  content: [
                    "Location-based recommendations reduce decision fatigue",
                    "Transparent attendee information builds social proof",
                    "One-click calendar integration simplifies planning",
                    "Smart reminders with contextual information enhance experience"
                  ]
                }
              ]
            },
            {
              title: "4.3 Newsletter Subscription Flow",
              description: "From platform visit to personalized digest delivery with double opt-in",
              mermaidDiagram: `flowchart TD\n          A[User visits platform] --> B{First-time visitor?}\n          B -->|Yes| C[Newsletter prompt banner]\n          B -->|No| D[Account preferences]\n          C --> E[Minimalist signup form]\n          D --> E\n          E --> F[Email validation]\n          F --> G[Preference selection]\n          G --> H[Double opt-in email]\n          H --> I[Confirmation click]\n          I --> J[Welcome sequence]\n          J --> K[Personalized content delivery]\n          K --> L[Engagement tracking]\n          L --> M{User engagement}\n          M -->|High| N[Maintain frequency]\n          M -->|Low| O[Adjust preferences]\n          O --> P[Re-engagement campaign]\n          style A fill:#e1f5fe\n          style E fill:#fff3e0\n          style I fill:#c8e6c9\n          style K fill:#c8e6c9`,
              sections: [
                {
                  title: "Implementation Details",
                  content: [
                    "Progressive disclosure of preference options",
                    "Seamless database integration (Supabase + Novu)",
                    "Double opt-in process for CASL compliance",
                    "Preference management center for ongoing personalization"
                  ]
                },
                {
                  title: "UX Considerations",
                  content: [
                    "Minimalist initial form to reduce friction",
                    "Clear expectation setting (frequency, content types)",
                    "Immediate confirmation with next steps",
                    "Easy unsubscribe process to maintain trust"
                  ]
                }
              ]
            },
            {
              title: "4.4 Admin Moderation Flow",
              description: "Content review queue with approval, rejection, and revision options",
              mermaidDiagram: `flowchart TD\n          A[Content submitted] --> B[Automated pre-screening]\n          B --> C{ML content check}\n          C -->|Pass| D[Admin queue]\n          C -->|Flag| E[Priority review queue]\n          D --> F[Admin dashboard]\n          E --> F\n          F --> G[Batch review interface]\n          G --> H[Content preview]\n          H --> I{Review decision}\n          I -->|Approve| J[Publish content]\n          I -->|Reject| K[Feedback template]\n          I -->|Edit needed| L[Revision request]\n          J --> M[Notify submitter]\n          K --> N[Rejection notification]\n          L --> O[Edit suggestions]\n          O --> P[Return to submitter]\n          M --> Q[Analytics tracking]\n          N --> Q\n          style A fill:#e1f5fe\n          style C fill:#fff3e0\n          style J fill:#c8e6c9\n          style K fill:#ffcdd2\n          style L fill:#ffecb3`,
              sections: [
                {
                  title: "User Journey",
                  content: [
                    "From submission review to decision",
                    "Touchpoint 1: Unified dashboard with submission queue",
                    "Touchpoint 2: Content preview with context",
                    "Touchpoint 3: Review tools and templates",
                    "Touchpoint 4: Publishing controls",
                    "Touchpoint 5: Analytics and insights"
                  ]
                },
                {
                  title: "UX Considerations",
                  content: [
                    "Batch processing capabilities for moderator efficiency",
                    "Consistent evaluation criteria templates for fair review",
                    "Integrated communication with submitters for transparency",
                    "Version history and audit trails for accountability"
                  ]
                }
              ]
            },
            {
              title: "4.5 User Onboarding Flow",
              description: "3-step progressive onboarding with LinkedIn OAuth, email, and magic link options",
              mermaidDiagram: `flowchart TD\n          A[Landing page visit] --> B{Authentication choice}\n          B -->|LinkedIn| C[OAuth LinkedIn]\n          B -->|Email| D[Email signup]\n          B -->|Magic link| E[Email magic link]\n          C --> F[Auto-fill profile data]\n          D --> G[Manual profile entry]\n          E --> G\n          F --> H[Step 1: Core Profile]\n          G --> H\n          H --> I[Name, photo, bio, interests]\n          I --> J[Progress: 33%]\n          J --> K[Step 2: Professional Info]\n          K --> L[Company search autocomplete]\n          L --> M[Sector selection]\n          M --> N[Progress: 66%]\n          N --> O[Step 3: Community Connections]\n          O --> P[Search existing communities]\n          P --> Q[Algorithmic recommendations]\n          Q --> R[Progress: 100%]\n          R --> S[Welcome dashboard]\n          S --> T[Guided feature tour]\n          T --> U[First content recommendation]\n          style A fill:#e1f5fe\n          style H fill:#fff3e0\n          style K fill:#fff3e0\n          style O fill:#fff3e0\n          style S fill:#c8e6c9`,
              sections: [
                {
                  title: "Overview",
                  content: [
                    "Our research indicated that lengthy signup processes result in 67% abandonment rates for fintech platforms (Forrester, 2024). To address this, we designed a streamlined, value-forward onboarding flow."
                  ]
                },
                {
                  title: "Authentication Options",
                  content: [
                    "LinkedIn Integration: One-click signup with automatic profile data import (photo, title, work history)",
                    "Email/Password: Traditional signup with progressive disclosure",
                    "Magic Link: Passwordless authentication option for reduced friction"
                  ]
                },
                {
                  title: "3-Step Progressive Onboarding",
                  content: [
                    "Step 1: Core Profile — Name, username, profile photo (pre-filled from LinkedIn when available), brief bio/tagline, professional interests selection",
                    "Step 2: Professional Affiliation — Company search with autocomplete (database of 5,000+ fintech companies), company type/sector selection, independent professional designation option",
                    "Step 3: Community Connections — Search-based community discovery, algorithmic recommendations, option to create new community"
                  ]
                },
                {
                  title: "UX Considerations",
                  content: [
                    "Progress visualization (step indicators + completion percentage)",
                    "Option to skip non-essential steps with later completion prompts",
                    "Contextual help tooltips at potential friction points",
                    "Value demonstration between steps (e.g., 'Now you'll be able to...')",
                    "Immediate access to core functionality after Step 1 completion"
                  ]
                },
                {
                  title: "Results",
                  content: [
                    "User research showed this optimized flow increased completion rates by an estimated 34% compared to industry benchmarks, with 72% of users completing all three steps during initial signup."
                  ]
                }
              ]
            }
          ]
        })
      },
      {
        type: "features",
        content: JSON.stringify({
          title: "Features & UX",
          description: "Core UI components, interaction design principles, accessibility implementation, and mobile-first design approach.",
          uiComponents: [
            { component: "Content Card", purpose: "Display articles, resources", ux: "Progressive loading, readable typography" },
            { component: "User Profile", purpose: "Display user info and contributions", ux: "Identity verification, contribution metrics" },
            { component: "Event Card", purpose: "Showcase upcoming events", ux: "Visual hierarchy emphasizing date/time" },
            { component: "Search Interface", purpose: "Content discovery", ux: "Type-ahead suggestions, filters" }
          ],
          accessibility: [
            { principle: "Perceivable", implementation: "High contrast ratios (4.5:1 minimum), text alternatives" },
            { principle: "Operable", implementation: "Keyboard navigation, touch targets (min 44×44px)" },
            { principle: "Understandable", implementation: "Clear instructions, error prevention, consistent navigation" },
            { principle: "Robust", implementation: "Semantic HTML, ARIA roles, screen reader testing" }
          ],
          mobileFirst: [
            { feature: "Responsive Design", description: "All layouts adapt seamlessly across device sizes" },
            { feature: "Touch Optimization", description: "Large touch targets (minimum 44×44px)" },
            { feature: "Performance Focus", description: "Optimized image loading, code splitting" },
            { feature: "Navigation Patterns", description: "Bottom navigation for critical actions on mobile" }
          ],
          interactionPrinciples: [
            { principle: "Predictability", description: "Users can anticipate system behavior before taking action — consistent patterns across all flows" },
            { principle: "Visibility", description: "System status and available actions are always clear — loading states, progress indicators, active states" },
            { principle: "Forgiveness", description: "Mistakes are easy to undo with clear recovery paths — auto-save drafts, confirmation dialogs, undo actions" },
            { principle: "Efficiency", description: "Frequent tasks are streamlined for power users — keyboard shortcuts, quick actions, saved preferences" },
            { principle: "Consistency", description: "Similar elements behave the same way throughout — unified button styles, card layouts, form patterns" },
            { principle: "Discoverability", description: "All features can be found without documentation — progressive disclosure and contextual help" }
          ],
          authOptions: [
            { component: "Email/Password", purpose: "Traditional authentication with strong validation", ux: "Familiar pattern for all user types; real-time password strength indicator" },
            { component: "OAuth (Google/LinkedIn)", purpose: "One-click social login with trusted providers", ux: "Reduced friction; LinkedIn preferred for professional fintech context" },
            { component: "Magic Link", purpose: "Passwordless email authentication", ux: "Simple and secure; ideal for users who prefer not managing passwords" }
          ],
          analyticsFeatures: [
            { feature: "Engagement Metrics", description: "Track time on page, scroll depth, content interactions, and return visit rates to measure community health" },
            { feature: "Conversion Funnels", description: "Monitor full user journey from first visit through signup to active contributor status" },
            { feature: "Feature Adoption", description: "A/B test new platform features and measure adoption rates to inform product roadmap decisions" }
          ]
        })
      },
      {
        type: "ux-principles",
        content: JSON.stringify({
          title: "UX Principles",
          description: "Nielsen's heuristics implementation and behavioral economics principles applied throughout the platform.",
          heuristics: [
            { title: "Visibility of System Status", description: "Real-time feedback throughout the platform: loading states, progress indicators, clear status messages" },
            { title: "Match Between System and Real World", description: "Language and concepts familiar to the fintech community with industry terminology" },
            { title: "User Control and Freedom", description: "Clear escape routes and undo functionality: back buttons, draft saving, confirmation dialogs" },
            { title: "Consistency and Standards", description: "Consistent design patterns: standardized button styles, uniform card layouts" },
            { title: "Error Prevention", description: "Proactive design: form validation with real-time feedback, auto-save functionality" }
          ],
          behavioralEconomics: [
            { principle: "Social Proof", description: "Displaying user counts and engagement metrics on events and content" },
            { principle: "Scarcity", description: "Event listings highlight limited-capacity events with urgency indicators" },
            { principle: "Loss Aversion", description: "Notification emails frame missed events as opportunities lost" },
            { principle: "Endowment Effect", description: "Users can create personalized content collections" },
            { principle: "Default Effect", description: "Strategic default settings for notification preferences" }
          ]
        })
      },
      {
        type: "social-proof",
        content: JSON.stringify({
          title: "Impact",
          description: "Community engagement initiatives and their measurable impact on the Toronto fintech ecosystem.",
          achievements: [
            { title: "Community Growth", metric: "40%+", description: "Organic traffic increase through community-driven content", details: ["106+ attendees at flagship event", "Active contributor community", "Regular event series"] },
            { title: "Event Success", metric: "106+", description: "RSVPs and attendees at Fintech + AI Meetup", details: ["Co-organized with The GenAI Collective", "6 focused discussion groups", "Direct traffic to platform"] },
            { title: "Design Showcase", metric: "Mobile-First", description: "Modern responsive design demonstrated at Shopify Builder Sundays", details: ["AI-assisted development workflow", "ShadCN UI + MagicUI components", "Rapid prototyping showcase"] }
          ],
          events: [
            { name: "Fintech + AI Discussion Meetup", attendees: "106+", format: "In-Person Discussion Groups", impact: "Significant organic traffic growth" },
            { name: "Shopify Builder Sundays", attendees: "Demo Showcase", format: "Presentation", impact: "Design engineering skill showcase" }
          ]
        })
      }
    ]
  }
];

export default mutation({
  args: {},
  handler: async (ctx) => {
    let inserted = 0;
    let updated = 0;

    for (const project of projects) {
      const existing = await ctx.db
        .query("projects")
        .withIndex("by_slug", (q) => q.eq("slug", project.slug))
        .first();

      if (!existing) {
        await ctx.db.insert("projects", project);
        inserted++;
        console.log(`✅ Inserted project: ${project.title}`);
      } else {
        await ctx.db.patch(existing._id, project);
        updated++;
        console.log(`🔄 Updated project: ${project.title}`);
      }
    }

    return {
      success: true,
      message: `Projects seeding complete: ${inserted} inserted, ${updated} updated`,
      inserted,
      updated,
    };
  },
});
