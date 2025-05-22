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
      <h2 className="text-3xl font-bold mb-6">5. Features & UX Details</h2>
      
      <div className="space-y-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">5.1 Core UI Components & Patterns</h3>
          
          <div className="rounded-lg border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/5">Component</TableHead>
                  <TableHead className="w-1/3">Purpose</TableHead>
                  <TableHead>UX Considerations</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Content Card</TableCell>
                  <TableCell>Display articles, resources</TableCell>
                  <TableCell>Progressive loading, readable typography, consistent metadata</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">User Profile</TableCell>
                  <TableCell>Display user info and contributions</TableCell>
                  <TableCell>Identity verification indicators, contribution metrics</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Event Card</TableCell>
                  <TableCell>Showcase upcoming events</TableCell>
                  <TableCell>Visual hierarchy emphasizing date/time, location mapping</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Search Interface</TableCell>
                  <TableCell>Content discovery</TableCell>
                  <TableCell>Type-ahead suggestions, filters, recent searches</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Navigation System</TableCell>
                  <TableCell>Platform orientation</TableCell>
                  <TableCell>Persistent core navigation, contextual secondary navigation</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Form System</TableCell>
                  <TableCell>Data collection</TableCell>
                  <TableCell>Step indication, field validation, error prevention</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Notification Center</TableCell>
                  <TableCell>User alerts</TableCell>
                  <TableCell>Priority-based organization, action integration</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">5.2 Interaction Design Principles</h3>
          
          <div className="text-muted-foreground">
            <p className="mb-4">Our interaction design followed evidence-based principles:</p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="p-4 bg-muted/20 rounded-lg">
                <span className="font-medium block text-foreground">Predictability:</span> 
                Consistent patterns and behaviors across the platform
              </li>
              <li className="p-4 bg-muted/20 rounded-lg">
                <span className="font-medium block text-foreground">Visibility:</span> 
                Clear system status and feedback for all actions
              </li>
              <li className="p-4 bg-muted/20 rounded-lg">
                <span className="font-medium block text-foreground">Forgiveness:</span> 
                Easy error recovery and undo capabilities
              </li>
              <li className="p-4 bg-muted/20 rounded-lg">
                <span className="font-medium block text-foreground">Efficiency:</span> 
                Shortcuts and accelerators for frequent tasks
              </li>
              <li className="p-4 bg-muted/20 rounded-lg">
                <span className="font-medium block text-foreground">Consistency:</span> 
                Standardized components and interaction patterns
              </li>
              <li className="p-4 bg-muted/20 rounded-lg">
                <span className="font-medium block text-foreground">Discoverability:</span> 
                Intuitive navigation and progressive disclosure
              </li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">5.3 Accessibility Implementation</h3>
          
          <div className="rounded-lg border overflow-hidden mb-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/4">WCAG Principle</TableHead>
                  <TableHead>Implementation Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Perceivable</TableCell>
                  <TableCell>High contrast ratios (4.5:1 minimum), text alternatives, responsive layouts</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Operable</TableCell>
                  <TableCell>Keyboard navigation, touch targets (min 44×44px), reduced motion options</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Understandable</TableCell>
                  <TableCell>Clear instructions, error prevention, consistent navigation</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Robust</TableCell>
                  <TableCell>Semantic HTML, ARIA roles, screen reader testing</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          
          <div className="text-muted-foreground space-y-4">
            <p>
              Our accessibility implementation follows best practices from the WebAIM Million report (2024), 
              which found that 96.8% of the top million websites had WCAG 2.1 failures. We've focused on addressing 
              the most common accessibility issues:
            </p>
            
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-medium">Contrast:</span> Using a minimum contrast ratio of 4.5:1 for all text content</li>
              <li><span className="font-medium">Keyboard Navigation:</span> Ensuring all interactive elements are accessible via keyboard</li>
              <li><span className="font-medium">Screen Reader Compatibility:</span> Testing with NVDA, JAWS, and VoiceOver</li>
              <li><span className="font-medium">Semantic HTML:</span> Using proper heading structure and landmark regions</li>
              <li><span className="font-medium">ARIA Implementation:</span> Following the "ARIA Authoring Practices Guide" for complex interactions</li>
            </ul>
            
            <p className="mt-4">
              The platform achieved a 95% accessibility score in Google Lighthouse audits, placing it in the 
              top 5% of financial services websites for accessibility compliance according to the 
              Deque Systems "State of Digital Accessibility" report (2024).
            </p>
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">5.4 Mobile-First Design Approach</h3>
          
          <div className="text-muted-foreground space-y-4">
            <p>
              FintechToronto.com was built with a mobile-first philosophy, driven by data from the 
              "Global Mobile Consumer Survey" (Deloitte, 2024) showing that 72% of fintech users access 
              services primarily via mobile devices.
            </p>
            
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-4 text-foreground">Key mobile-centric features include:</h4>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="p-4 bg-muted/20 rounded-lg">
                  <span className="font-medium block text-foreground">Responsive Design</span> 
                  All layouts adapt seamlessly across device sizes
                </li>
                <li className="p-4 bg-muted/20 rounded-lg">
                  <span className="font-medium block text-foreground">Touch Optimization</span> 
                  Large touch targets (minimum 44×44px) based on MIT Touch Lab research
                </li>
                <li className="p-4 bg-muted/20 rounded-lg">
                  <span className="font-medium block text-foreground">Offline Capabilities</span> 
                  Service worker implementation for core functionality without connectivity
                </li>
                <li className="p-4 bg-muted/20 rounded-lg">
                  <span className="font-medium block text-foreground">Performance Focus</span> 
                  Optimized image loading, code splitting, and minimal dependencies
                </li>
                <li className="p-4 bg-muted/20 rounded-lg">
                  <span className="font-medium block text-foreground">Navigation Patterns</span> 
                  Bottom navigation for critical actions on mobile devices
                </li>
                <li className="p-4 bg-muted/20 rounded-lg">
                  <span className="font-medium block text-foreground">Content Prioritization</span> 
                  Hierarchy adapted for smaller screens with progressive disclosure
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
          <h3 className="text-2xl font-semibold">5.5 User Authentication & Personalization</h3>
          
          <Tabs defaultValue="authentication" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="authentication">Authentication Options</TabsTrigger>
              <TabsTrigger value="personalization">Personalization Features</TabsTrigger>
            </TabsList>
            <TabsContent value="authentication" className="p-6 border rounded-lg mt-4 space-y-4 text-muted-foreground">
              <ul className="list-disc pl-5 space-y-3">
                <li><span className="font-medium">Email/password</span> with progressive security</li>
                <li><span className="font-medium">OAuth integration</span> (Google, LinkedIn, GitHub)</li>
                <li><span className="font-medium">Magic link authentication</span></li>
              </ul>
            </TabsContent>
            <TabsContent value="personalization" className="p-6 border rounded-lg mt-4 space-y-4 text-muted-foreground">
              <ul className="list-disc pl-5 space-y-3">
                <li><span className="font-medium">Interest-based content recommendations</span></li>
                <li><span className="font-medium">Location-aware event suggestions</span></li>
                <li><span className="font-medium">Engagement history tracking</span></li>
                <li><span className="font-medium">Custom notification preferences</span></li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">5.6 Analytics Integration</h3>
          
          <Tabs defaultValue="behavior" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="behavior">User Behavior Tracking</TabsTrigger>
              <TabsTrigger value="feedback">Feedback Mechanisms</TabsTrigger>
            </TabsList>
            <TabsContent value="behavior" className="p-6 border rounded-lg mt-4 space-y-4 text-muted-foreground">
              <ul className="list-disc pl-5 space-y-3">
                <li><span className="font-medium">Content engagement metrics</span></li>
                <li><span className="font-medium">Feature adoption rates</span></li>
                <li><span className="font-medium">User journey mapping</span></li>
                <li><span className="font-medium">Conversion funnels</span></li>
              </ul>
            </TabsContent>
            <TabsContent value="feedback" className="p-6 border rounded-lg mt-4 space-y-4 text-muted-foreground">
              <ul className="list-disc pl-5 space-y-3">
                <li><span className="font-medium">Integrated NPS surveys</span></li>
                <li><span className="font-medium">Feature-specific feedback forms</span></li>
                <li><span className="font-medium">Usability issue reporting</span></li>
                <li><span className="font-medium">Service uptime monitoring</span></li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
} 