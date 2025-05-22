import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function DesignThinking() {
  return (
    <section id="design-thinking" className="scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6">3. Design Thinking Process</h2>
      
      <div className="space-y-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">3.1 Empathize & Define</h3>
          <div className="text-muted-foreground space-y-4">
            <p>Our research methodology combined:</p>
            
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-medium">In-depth interviews:</span> 42 stakeholders across fintech startups, financial institutions, government agencies, and venture capital</li>
              <li><span className="font-medium">Contextual inquiry:</span> Observing users navigate existing information sources</li>
              <li><span className="font-medium">Competitive analysis:</span> Evaluating 14 fintech community platforms globally</li>
              <li><span className="font-medium">Surveys:</span> 215 responses from Toronto fintech community members</li>
              <li><span className="font-medium">Heuristic evaluation:</span> Analysis of existing solutions against Nielsen's usability heuristics</li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-3 text-foreground">Key Insights:</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Users often missed relevant events due to information being scattered across platforms</li>
                <li>Content discovery was highly inefficient with poor categorization and search functionality</li>
                <li>Community members felt disconnected despite geographic proximity</li>
                <li>Mobile experiences were consistently poor across existing solutions</li>
              </ul>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-3 text-foreground">Jobs-to-be-Done Framework:</h4>
              <ol className="list-decimal pl-5 space-y-2">
                <li>"Help me stay informed about local fintech developments without excessive research time"</li>
                <li>"Allow me to share my expertise and build my professional profile"</li>
                <li>"Connect me with relevant community members and opportunities"</li>
                <li>"Keep me updated on events that match my specific interests"</li>
              </ol>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">3.2 Ideate</h3>
          <div className="text-muted-foreground space-y-4">
            <p>
              We conducted 3 structured ideation workshops with cross-functional teams using techniques including:
            </p>
            
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-medium">Crazy Eights:</span> Rapid sketching of potential solutions</li>
              <li><span className="font-medium">How Might We:</span> Reframing problems as opportunities</li>
              <li><span className="font-medium">Impact/Effort Matrix:</span> Prioritizing features based on user value and implementation complexity</li>
              <li><span className="font-medium">Card Sorting:</span> Organizing content categories and information architecture</li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-3 text-foreground">Key Solutions:</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-medium">Unified Content Hub:</span> Centralized, categorized repository of news, insights, and resources</li>
                <li><span className="font-medium">Community Profiles:</span> Professional profiles highlighting expertise and contributions</li>
                <li><span className="font-medium">Smart Event Calendar:</span> Personalized event recommendations based on interests</li>
                <li><span className="font-medium">Content Submission System:</span> Streamlined process for community contributions</li>
                <li><span className="font-medium">Notification Engine:</span> Customizable alerts across multiple channels</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">3.3 Prototype & Test</h3>
          <div className="text-muted-foreground space-y-4">
            <p>We created progressive fidelity prototypes:</p>
            
            <ol className="list-decimal pl-5 space-y-2">
              <li><span className="font-medium">Low-fidelity wireframes:</span> Paper sketches for initial concept validation</li>
              <li><span className="font-medium">Mid-fidelity wireframes:</span> Detailed user flows in Figma</li>
              <li><span className="font-medium">High-fidelity interactive prototype:</span> Functional prototype with visual design</li>
            </ol>
            
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-3 text-foreground">Testing Methodology:</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>5 rounds of usability testing with 8-10 participants per round</li>
                <li>A/B tests of critical flows (content submission, event registration)</li>
                <li>Accessibility testing with screen readers and keyboard navigation</li>
                <li>Performance testing on various devices and connection speeds</li>
              </ul>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-3 text-foreground">Key Findings & Iterations:</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Initial content submission flow was too complex; simplified from 7 to 4 steps</li>
                <li>Event registration abandonment decreased 47% after redesigning the confirmation flow</li>
                <li>Newsletter signup conversion improved 32% after implementing social proof elements</li>
                <li>Admin moderation interface required significant simplification after testing</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">3.4 Implement</h3>
          <div className="text-muted-foreground space-y-4">
            <p>Our implementation roadmap followed a phased approach:</p>
            
            <div className="rounded-lg border overflow-hidden my-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Phase</TableHead>
                    <TableHead>Focus</TableHead>
                    <TableHead>Key Deliverables</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">1: Foundation</TableCell>
                    <TableCell>Core platform, content management</TableCell>
                    <TableCell>Content hub, user profiles, admin panel</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">2: Community</TableCell>
                    <TableCell>Engagement features, notifications</TableCell>
                    <TableCell>Comments, likes, personalized feeds</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">3: Events</TableCell>
                    <TableCell>Event management, registration</TableCell>
                    <TableCell>Calendar, registration, reminders</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">4: Growth</TableCell>
                    <TableCell>Analytics, optimization</TableCell>
                    <TableCell>Dashboard, A/B testing framework</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-3 text-foreground">Development Approach:</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Component-driven development with storybook documentation</li>
                <li>Weekly user testing of new features</li>
                <li>Continuous integration and deployment</li>
                <li>Feature flagging for gradual rollouts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 