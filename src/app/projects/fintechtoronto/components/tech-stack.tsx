export default function TechStack() {
  return (
    <section id="tech-stack" className="scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-grey-900 dark:text-grey-50">7. Tech Stack & Implementation Details</h2>
      
      <div className="space-y-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50">7.1 Frontend Architecture</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-grey-600 dark:text-grey-50">
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium text-grey-900 dark:text-grey-50">Core Technologies</h4>
                <ul className="mt-2 space-y-2 list-disc pl-5">
                  <li><span className="font-medium text-tertiary">Framework:</span> Next.js 14 (App Router)</li>
                  <li><span className="font-medium text-tertiary">Language:</span> TypeScript for type safety</li>
                  <li><span className="font-medium text-tertiary">State Management:</span> React Context + Zustand</li>
                  <li><span className="font-medium text-tertiary">Data Fetching:</span> TanStack Query (React Query)</li>
                  <li><span className="font-medium text-tertiary">Styling:</span> Tailwind CSS + CSS Variables</li>
                </ul>
              </div>
              
              <div className="mt-6">
                <h4 className="text-lg font-medium text-grey-900 dark:text-grey-50">Testing & DevOps</h4>
                <ul className="mt-2 space-y-2 list-disc pl-5">
                  <li><span className="font-medium text-tertiary">Unit Testing:</span> Vitest + Testing Library</li>
                  <li><span className="font-medium text-tertiary">E2E Testing:</span> Playwright</li>
                  <li><span className="font-medium text-tertiary">CI/CD:</span> GitHub Actions</li>
                  <li><span className="font-medium text-tertiary">Hosting:</span> AWS Amplify</li>
                  <li><span className="font-medium text-tertiary">Monitoring:</span> New Relic + Sentry</li>
                  <li><span className="font-medium text-tertiary">Analytics:</span> PostHog for A/B testing & product analytics</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-grey-900 dark:text-grey-50">Component Libraries</h4>
              <div className="mt-2 space-y-6">
                <div>
                  <p className="font-medium text-grey-900 dark:text-grey-50">shadcn/ui</p>
                  <p className="mb-2">Core interface components including:</p>
                  <ul className="space-y-1 list-disc pl-5">
                    <li><span className="italic text-tertiary">Dialog:</span> For modal interfaces in onboarding flow</li>
                    <li><span className="italic text-tertiary">Command:</span> For search interfaces throughout the platform</li>
                    <li><span className="italic text-tertiary">Form:</span> For all data collection with validation</li>
                    <li><span className="italic text-tertiary">Avatar:</span> For user profile images with fallbacks</li>
                    <li><span className="italic text-tertiary">Card:</span> For content, events, and resource displays</li>
                    <li><span className="italic text-tertiary">Toast:</span> For transient notifications</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-medium text-grey-900 dark:text-grey-50">Radix UI</p>
                  <p className="mb-2">Accessible primitives underlying custom components:</p>
                  <ul className="space-y-1 list-disc pl-5">
                    <li><span className="italic text-tertiary">Popover:</span> For contextual information</li>
                    <li><span className="italic text-tertiary">Accordion:</span> For FAQ and expandable content sections</li>
                    <li><span className="italic text-tertiary">Tabs:</span> For multi-view interfaces</li>
                    <li><span className="italic text-tertiary">Select:</span> For enhanced dropdown menus</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-medium text-grey-900 dark:text-grey-50">Magic UI</p>
                  <p className="mb-2">Advanced interactive elements:</p>
                  <ul className="space-y-1 list-disc pl-5">
                    <li><span className="italic text-tertiary">Carousel:</span> For featured content</li>
                    <li><span className="italic text-tertiary">Calendar:</span> For event scheduling</li>
                    <li><span className="italic text-tertiary">Rich Text Editor:</span> For content submissions</li>
                    <li><span className="italic text-tertiary">File Upload:</span> For resource sharing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6 text-grey-600 dark:text-grey-50">
          <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50">7.2 Backend & Infrastructure</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg border border-tertiary/20 bg-tertiary/5">
              <h4 className="text-lg font-medium mb-3 text-grey-900 dark:text-grey-50">Database & Authentication</h4>
              <ul className="space-y-3 list-disc pl-5">
                <li><span className="font-medium text-tertiary">Database:</span> Supabase PostgreSQL for relational data</li>
                <li><span className="font-medium text-tertiary">Authentication:</span> Supabase Auth with OAuth providers</li>
                <li><span className="font-medium text-tertiary">Storage:</span> AWS S3 Bucket for image uploads & assets</li>
                <li><span className="font-medium text-tertiary">CMS:</span> Sanity CMS synced with Supabase</li>
                <li><span className="font-medium text-tertiary">Realtime:</span> Supabase Realtime for live updates</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-lg border border-tertiary/20 bg-tertiary/5">
              <h4 className="text-lg font-medium mb-3 text-grey-900 dark:text-grey-50">API Architecture</h4>
              <ul className="space-y-3 list-disc pl-5">
                <li><span className="font-medium text-tertiary">API Strategy:</span> REST API with Next.js API routes</li>
                <li><span className="font-medium text-tertiary">Serverless Functions:</span> Edge Functions for global performance</li>
                <li><span className="font-medium text-tertiary">Caching:</span> Incremental Static Regeneration for efficiency</li>
                <li><span className="font-medium text-tertiary">Middleware:</span> Custom Auth and Logging middleware</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-lg border border-tertiary/20 bg-tertiary/5">
              <h4 className="text-lg font-medium mb-3 text-grey-900 dark:text-grey-50">Performance Optimizations</h4>
              <ul className="space-y-3 list-disc pl-5">
                <li><span className="font-medium text-tertiary">Image Optimization:</span> Next.js Image Component with CDN</li>
                <li><span className="font-medium text-tertiary">Code Splitting:</span> Dynamic imports for route-based chunking</li>
                <li><span className="font-medium text-tertiary">Edge Caching:</span> CDN distribution with short TTLs</li>
                <li><span className="font-medium text-tertiary">Bundle Optimization:</span> Tree-shaking and code minification</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-lg border border-tertiary/20 bg-tertiary/5">
              <h4 className="text-lg font-medium mb-3 text-grey-900 dark:text-grey-50">Integration & Services</h4>
              <ul className="space-y-3 list-disc pl-5">
                <li><span className="font-medium text-tertiary">Email:</span> Resend for transactional emails</li>
                <li><span className="font-medium text-tertiary">Notifications:</span> Novu for multi-channel notifications</li>
                <li><span className="font-medium text-tertiary">Search:</span> Meilisearch for fast, relevant results</li>
                <li><span className="font-medium text-tertiary">Analytics:</span> PostHog for product analytics & A/B testing</li>
                <li><span className="font-medium text-tertiary">Performance:</span> New Relic for application monitoring</li>
                <li><span className="font-medium text-tertiary">Content:</span> Sanity CMS for flexible content management</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-6 rounded-lg border border-tertiary/20 bg-tertiary/5">
            <h4 className="text-lg font-medium mb-3 text-grey-900 dark:text-grey-50">Future Implementation Plans & Challenges</h4>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-tertiary">Primary Challenge: User Motivation & Engagement</p>
                <p>The main challenge is keeping users motivated to actively contribute content, events, and engage with the community. Planned solutions:</p>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Gamification with contribution points and community recognition</li>
                  <li>Personalized content recommendations based on user interests</li>
                  <li>Regular community challenges and featured contributor spotlights</li>
                  <li>Peer-to-peer mentoring and networking facilitation</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <p className="font-medium text-tertiary">Future Enhancement: Advanced Content Moderation</p>
                <p>As the platform scales, we plan to implement sophisticated content management:</p>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>AI-powered content screening with machine learning models</li>
                  <li>Community-driven moderation with trusted user programs</li>
                  <li>Automated quality scoring for content recommendations</li>
                  <li>Real-time content flagging and resolution workflows</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <p className="font-medium text-tertiary">Future Enhancement: Real-time Collaboration Features</p>
                <p>Planned improvements for enhanced user engagement and interaction:</p>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Live discussion rooms during events with real-time chat</li>
                  <li>Collaborative document editing for community projects</li>
                  <li>Interactive networking features with smart matching</li>
                  <li>Virtual event hosting with integrated video conferencing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
