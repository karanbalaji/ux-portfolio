export default function TechStack() {
  return (
    <section id="tech-stack" className="scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6">7. Tech Stack & Implementation Details</h2>
      
      <div className="space-y-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">7.1 Frontend Architecture</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-muted-foreground">
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium text-foreground">Core Technologies</h4>
                <ul className="mt-2 space-y-2 list-disc pl-5">
                  <li><span className="font-medium">Framework:</span> Next.js 14 (App Router)</li>
                  <li><span className="font-medium">Language:</span> TypeScript for type safety</li>
                  <li><span className="font-medium">State Management:</span> React Context + Zustand</li>
                  <li><span className="font-medium">Data Fetching:</span> TanStack Query (React Query)</li>
                  <li><span className="font-medium">Styling:</span> Tailwind CSS + CSS Variables</li>
                </ul>
              </div>
              
              <div className="mt-6">
                <h4 className="text-lg font-medium text-foreground">Testing & DevOps</h4>
                <ul className="mt-2 space-y-2 list-disc pl-5">
                  <li><span className="font-medium">Unit Testing:</span> Vitest + Testing Library</li>
                  <li><span className="font-medium">E2E Testing:</span> Playwright</li>
                  <li><span className="font-medium">CI/CD:</span> GitHub Actions</li>
                  <li><span className="font-medium">Hosting:</span> Vercel</li>
                  <li><span className="font-medium">Monitoring:</span> Sentry + LogRocket</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-foreground">Component Libraries</h4>
              <div className="mt-2 space-y-6">
                <div>
                  <p className="font-medium text-foreground">shadcn/ui</p>
                  <p className="mb-2">Core interface components including:</p>
                  <ul className="space-y-1 list-disc pl-5">
                    <li><span className="italic">Dialog:</span> For modal interfaces in onboarding flow</li>
                    <li><span className="italic">Command:</span> For search interfaces throughout the platform</li>
                    <li><span className="italic">Form:</span> For all data collection with validation</li>
                    <li><span className="italic">Avatar:</span> For user profile images with fallbacks</li>
                    <li><span className="italic">Card:</span> For content, events, and resource displays</li>
                    <li><span className="italic">Toast:</span> For transient notifications</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-medium text-foreground">Radix UI</p>
                  <p className="mb-2">Accessible primitives underlying custom components:</p>
                  <ul className="space-y-1 list-disc pl-5">
                    <li><span className="italic">Popover:</span> For contextual information</li>
                    <li><span className="italic">Accordion:</span> For FAQ and expandable content sections</li>
                    <li><span className="italic">Tabs:</span> For multi-view interfaces</li>
                    <li><span className="italic">Select:</span> For enhanced dropdown menus</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-medium text-foreground">Magic UI</p>
                  <p className="mb-2">Advanced interactive elements:</p>
                  <ul className="space-y-1 list-disc pl-5">
                    <li><span className="italic">Carousel:</span> For featured content</li>
                    <li><span className="italic">Calendar:</span> For event scheduling</li>
                    <li><span className="italic">Rich Text Editor:</span> For content submissions</li>
                    <li><span className="italic">File Upload:</span> For resource sharing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6 text-muted-foreground">
          <h3 className="text-2xl font-semibold text-foreground">7.2 Backend & Infrastructure</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg border bg-muted/20">
              <h4 className="text-lg font-medium mb-3 text-foreground">Database & Authentication</h4>
              <ul className="space-y-3 list-disc pl-5">
                <li><span className="font-medium">Database:</span> Supabase PostgreSQL for relational data</li>
                <li><span className="font-medium">Authentication:</span> Supabase Auth with OAuth providers</li>
                <li><span className="font-medium">Storage:</span> Supabase Storage for user uploads</li>
                <li><span className="font-medium">Realtime:</span> Supabase Realtime for live updates</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-lg border bg-muted/20">
              <h4 className="text-lg font-medium mb-3 text-foreground">API Architecture</h4>
              <ul className="space-y-3 list-disc pl-5">
                <li><span className="font-medium">API Strategy:</span> REST API with Next.js API routes</li>
                <li><span className="font-medium">Serverless Functions:</span> Edge Functions for global performance</li>
                <li><span className="font-medium">Caching:</span> Incremental Static Regeneration for efficiency</li>
                <li><span className="font-medium">Middleware:</span> Custom Auth and Logging middleware</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-lg border bg-muted/20">
              <h4 className="text-lg font-medium mb-3 text-foreground">Performance Optimizations</h4>
              <ul className="space-y-3 list-disc pl-5">
                <li><span className="font-medium">Image Optimization:</span> Next.js Image Component with CDN</li>
                <li><span className="font-medium">Code Splitting:</span> Dynamic imports for route-based chunking</li>
                <li><span className="font-medium">Edge Caching:</span> CDN distribution with short TTLs</li>
                <li><span className="font-medium">Bundle Optimization:</span> Tree-shaking and code minification</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-lg border bg-muted/20">
              <h4 className="text-lg font-medium mb-3 text-foreground">Integration & Services</h4>
              <ul className="space-y-3 list-disc pl-5">
                <li><span className="font-medium">Email:</span> Resend for transactional emails</li>
                <li><span className="font-medium">Notifications:</span> Novu for multi-channel notifications</li>
                <li><span className="font-medium">Search:</span> Meilisearch for fast, relevant results</li>
                <li><span className="font-medium">Analytics:</span> PostHog for product analytics</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-6 rounded-lg border bg-muted/20">
            <h4 className="text-lg font-medium mb-3 text-foreground">Implementation Challenges & Solutions</h4>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Challenge: Content Moderation at Scale</p>
                <p>With a growing user base contributing content, manual moderation became a bottleneck. We implemented a tiered approach:</p>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Automated ML-based pre-screening for obvious violations</li>
                  <li>Trusted user reputation system with progressively reduced moderation requirements</li>
                  <li>Community flagging with threshold-based escalation</li>
                  <li>Admin dashboard with batch processing capabilities</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <p className="font-medium">Challenge: Real-time Event Registration</p>
                <p>Event registration with limited spots needed to handle concurrent users without overbooking. Solution:</p>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Database transactions with optimistic concurrency control</li>
                  <li>Temporary seat holds with countdown timers for checkout completion</li>
                  <li>Queue system for high-demand events</li>
                  <li>Real-time updates on remaining capacity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 