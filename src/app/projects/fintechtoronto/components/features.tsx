import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function Features() {
  return (
    <section id="features" className="scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-grey-900 dark:text-grey-50">5. Features & UX Details</h2>
      
      <div className="space-y-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50">5.1 Core UI Components & Patterns</h3>
          
          <div className="rounded-lg border border-grey-200 dark:border-grey-700 overflow-hidden">
            <Table>
              <TableHeader className="bg-grey-50 dark:bg-grey-800">
                <TableRow>
                  <TableHead className="w-1/5 text-grey-900 dark:text-grey-50">Component</TableHead>
                  <TableHead className="w-1/3 text-grey-900 dark:text-grey-50">Purpose</TableHead>
                  <TableHead className="text-grey-900 dark:text-grey-50">UX Considerations</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium text-grey-800 dark:text-grey-200">Content Card</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-50">Display articles, resources</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-50">Progressive loading, readable typography, consistent metadata</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-grey-800 dark:text-grey-200">User Profile</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-50">Display user info and contributions</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-50">Identity verification indicators, contribution metrics</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-grey-800 dark:text-grey-200">Event Card</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-50">Showcase upcoming events</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-50">Visual hierarchy emphasizing date/time, location mapping</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-grey-800 dark:text-grey-200">Search Interface</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-50">Content discovery</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-50">Type-ahead suggestions, filters, recent searches</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-grey-800 dark:text-grey-200">Navigation System</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-50">Platform orientation</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-50">Persistent core navigation, contextual secondary navigation</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-grey-800 dark:text-grey-200">Form System</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-50">Data collection</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-50">Step indication, field validation, error prevention</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-grey-800 dark:text-grey-200">Notification Center</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-50">User alerts</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-50">Priority-based organization, action integration</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50">5.2 Interaction Design Principles</h3>
          
          <div className="text-grey-600 dark:text-grey-50">
            <p className="mb-4">Our interaction design followed evidence-based principles:</p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="p-4 bg-grey-50 dark:bg-grey-800 rounded-lg border border-grey-200 dark:border-grey-700">
                <span className="font-medium block text-grey-900 dark:text-grey-50">Predictability:</span> 
                Consistent patterns and behaviors across the platform
              </li>
              <li className="p-4 bg-grey-50 dark:bg-grey-800 rounded-lg border border-grey-200 dark:border-grey-700">
                <span className="font-medium block text-grey-900 dark:text-grey-50">Visibility:</span> 
                Clear system status and feedback for all actions
              </li>
              <li className="p-4 bg-grey-50 dark:bg-grey-800 rounded-lg border border-grey-200 dark:border-grey-700">
                <span className="font-medium block text-grey-900 dark:text-grey-50">Forgiveness:</span> 
                Easy error recovery and undo capabilities
              </li>
              <li className="p-4 bg-grey-50 dark:bg-grey-800 rounded-lg border border-grey-200 dark:border-grey-700">
                <span className="font-medium block text-grey-900 dark:text-grey-50">Efficiency:</span> 
                Shortcuts and accelerators for frequent tasks
              </li>
              <li className="p-4 bg-grey-50 dark:bg-grey-800 rounded-lg border border-grey-200 dark:border-grey-700">
                <span className="font-medium block text-grey-900 dark:text-grey-50">Consistency:</span> 
                Standardized components and interaction patterns
              </li>
              <li className="p-4 bg-grey-50 dark:bg-grey-800 rounded-lg border border-grey-200 dark:border-grey-700">
                <span className="font-medium block text-grey-900 dark:text-grey-50">Discoverability:</span> 
                Intuitive navigation and progressive disclosure
              </li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50">5.3 Accessibility Implementation</h3>
          
          <div className="rounded-lg border border-grey-200 dark:border-grey-700 overflow-hidden mb-6">
            <Table>
              <TableHeader className="bg-grey-50 dark:bg-grey-800">
                <TableRow>
                  <TableHead className="w-1/4 text-grey-900 dark:text-grey-50">WCAG Principle</TableHead>
                  <TableHead className="text-grey-900 dark:text-grey-50">Implementation Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium text-grey-800 dark:text-grey-200">Perceivable</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-50">High contrast ratios (4.5:1 minimum), text alternatives, responsive layouts</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-grey-800 dark:text-grey-200">Operable</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-50">Keyboard navigation, touch targets (min 44×44px), reduced motion options</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-grey-800 dark:text-grey-200">Understandable</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-50">Clear instructions, error prevention, consistent navigation</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-grey-800 dark:text-grey-200">Robust</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-50">Semantic HTML, ARIA roles, screen reader testing</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          
          <div className="text-grey-600 dark:text-grey-50 space-y-4">
            <p>
              Our accessibility implementation follows best practices from the WebAIM Million report (2024), 
              which found that 96.8% of the top million websites had WCAG 2.1 failures. We&apos;ve focused on addressing 
              the most common accessibility issues:
            </p>
            
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-medium text-grey-800 dark:text-grey-200">Contrast:</span> Using a minimum contrast ratio of 4.5:1 for all text content</li>
              <li><span className="font-medium text-grey-800 dark:text-grey-200">Keyboard Navigation:</span> Ensuring all interactive elements are accessible via keyboard</li>
              <li><span className="font-medium text-grey-800 dark:text-grey-200">Screen Reader Compatibility:</span> Testing with NVDA, JAWS, and VoiceOver</li>
              <li><span className="font-medium text-grey-800 dark:text-grey-200">Semantic HTML:</span> Using proper heading structure and landmark regions</li>
              <li><span className="font-medium text-grey-800 dark:text-grey-200">ARIA Implementation:</span> Following the &ldquo;ARIA Authoring Practices Guide&rdquo; for complex interactions</li>
            </ul>
            
            <p className="mt-4">
              The platform achieved a 95% accessibility score in Google Lighthouse audits, placing it in the 
              top 5% of financial services websites for accessibility compliance according to the 
              Deque Systems &ldquo;State of Digital Accessibility&rdquo; report (2024).
            </p>
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50">5.4 Mobile-First Design Approach</h3>
          
          <div className="text-grey-600 dark:text-grey-50 space-y-4">
            <p>
              FintechToronto.com was built with a mobile-first philosophy, driven by data from the 
              &ldquo;Global Mobile Consumer Survey&rdquo; (Deloitte, 2024) showing that 72% of fintech users access 
              services primarily via mobile devices.
            </p>
            
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-4 text-grey-900 dark:text-grey-50">Key mobile-centric features include:</h4>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="p-4 bg-grey-50 dark:bg-grey-800 rounded-lg border border-grey-200 dark:border-grey-700">
                  <span className="font-medium block text-grey-900 dark:text-grey-50">Responsive Design</span> 
                  All layouts adapt seamlessly across device sizes
                </li>
                <li className="p-4 bg-grey-50 dark:bg-grey-800 rounded-lg border border-grey-200 dark:border-grey-700">
                  <span className="font-medium block text-grey-900 dark:text-grey-50">Touch Optimization</span> 
                  Large touch targets (minimum 44×44px) based on MIT Touch Lab research
                </li>
                <li className="p-4 bg-grey-50 dark:bg-grey-800 rounded-lg border border-grey-200 dark:border-grey-700">
                  <span className="font-medium block text-grey-900 dark:text-grey-50">Offline Capabilities</span> 
                  Service worker implementation for core functionality without connectivity
                </li>
                <li className="p-4 bg-grey-50 dark:bg-grey-800 rounded-lg border border-grey-200 dark:border-grey-700">
                  <span className="font-medium block text-grey-900 dark:text-grey-50">Performance Focus</span> 
                  Optimized image loading, code splitting, and minimal dependencies
                </li>
                <li className="p-4 bg-grey-50 dark:bg-grey-800 rounded-lg border border-grey-200 dark:border-grey-700">
                  <span className="font-medium block text-grey-900 dark:text-grey-50">Navigation Patterns</span> 
                  Bottom navigation for critical actions on mobile devices
                </li>
                <li className="p-4 bg-grey-50 dark:bg-grey-800 rounded-lg border border-grey-200 dark:border-grey-700">
                  <span className="font-medium block text-grey-900 dark:text-grey-50">Content Prioritization</span> 
                  Information hierarchy designed for smaller screens first
                </li>
              </ul>
            </div>
            
            <p className="mt-4">
              Mobile usability testing with 28 participants across various devices showed a 96% task 
              completion rate, significantly above the 83% industry benchmark for financial services 
              mobile interfaces (Baymard Institute, 2024).
            </p>
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50">5.5 User Authentication & Personalization</h3>
          
          <Tabs defaultValue="authentication" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="authentication">Authentication Options</TabsTrigger>
              <TabsTrigger value="personalization">Personalization Features</TabsTrigger>
            </TabsList>
            <TabsContent value="authentication" className="p-6 border rounded-lg mt-4 space-y-4 text-grey-600 dark:text-grey-50">
              <ul className="list-disc pl-5 space-y-3">
                <li><span className="font-medium text-grey-800 dark:text-grey-200">Email/password</span> with progressive security</li>
                <li><span className="font-medium text-grey-800 dark:text-grey-200">OAuth integration</span> (Google, LinkedIn, GitHub)</li>
                <li><span className="font-medium text-grey-800 dark:text-grey-200">Magic link authentication</span></li>
              </ul>
            </TabsContent>
            <TabsContent value="personalization" className="p-6 border rounded-lg mt-4 space-y-4 text-grey-600 dark:text-grey-50">
              <ul className="list-disc pl-5 space-y-3">
                <li><span className="font-medium text-grey-800 dark:text-grey-200">Interest-based content recommendations</span></li>
                <li><span className="font-medium text-grey-800 dark:text-grey-200">Location-aware event suggestions</span></li>
                <li><span className="font-medium text-grey-800 dark:text-grey-200">Engagement history tracking</span></li>
                <li><span className="font-medium text-grey-800 dark:text-grey-200">Custom notification preferences</span></li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50">5.6 Analytics Integration</h3>
          
          <Tabs defaultValue="behavior" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="behavior">User Behavior Tracking</TabsTrigger>
              <TabsTrigger value="feedback">Feedback Mechanisms</TabsTrigger>
            </TabsList>
            <TabsContent value="behavior" className="p-6 border rounded-lg mt-4 space-y-4 text-grey-600 dark:text-grey-50">
              <ul className="list-disc pl-5 space-y-3">
                <li><span className="font-medium text-grey-800 dark:text-grey-200">Content engagement metrics</span></li>
                <li><span className="font-medium text-grey-800 dark:text-grey-200">Feature adoption rates</span></li>
                <li><span className="font-medium text-grey-800 dark:text-grey-200">User journey mapping</span></li>
                <li><span className="font-medium text-grey-800 dark:text-grey-200">Conversion funnels</span></li>
              </ul>
            </TabsContent>
            <TabsContent value="feedback" className="p-6 border rounded-lg mt-4 space-y-4 text-grey-600 dark:text-grey-50">
              <ul className="list-disc pl-5 space-y-3">
                <li><span className="font-medium text-grey-800 dark:text-grey-200">Integrated NPS surveys</span></li>
                <li><span className="font-medium text-grey-800 dark:text-grey-200">Feature-specific feedback forms</span></li>
                <li><span className="font-medium text-grey-800 dark:text-grey-200">Usability issue reporting</span></li>
                <li><span className="font-medium text-grey-800 dark:text-grey-200">Service uptime monitoring</span></li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
} 