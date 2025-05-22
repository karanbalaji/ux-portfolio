import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function UXPrinciples() {
  return (
    <section id="ux-principles" className="scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6">6. UX Laws & Principles Applied</h2>
      
      <div className="space-y-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">6.1 Core Principles & Implementation</h3>
          
          <div className="rounded-lg border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/4">Principle</TableHead>
                  <TableHead className="w-1/3">Application</TableHead>
                  <TableHead>Example</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Hick's Law</TableCell>
                  <TableCell>Reduced choice overload</TableCell>
                  <TableCell>Progressive disclosure in navigation, contextual filters</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Fitts's Law</TableCell>
                  <TableCell>Optimized target acquisition</TableCell>
                  <TableCell>Strategic placement of primary actions, appropriate sizing</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Jakob's Law</TableCell>
                  <TableCell>Familiar patterns</TableCell>
                  <TableCell>Industry-standard form patterns, navigation conventions</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Miller's Law</TableCell>
                  <TableCell>Chunking information</TableCell>
                  <TableCell>Content categorization, step-by-step processes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Gestalt Principles</TableCell>
                  <TableCell>Visual organization</TableCell>
                  <TableCell>Proximity grouping, common region for related items</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Aesthetic-Usability Effect</TableCell>
                  <TableCell>Polished visual design</TableCell>
                  <TableCell>Clean typography, consistent color application</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Progressive Disclosure</TableCell>
                  <TableCell>Information revelation</TableCell>
                  <TableCell>"Read more" expansions, collapsible sections</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Recognition over Recall</TableCell>
                  <TableCell>Minimizing memory load</TableCell>
                  <TableCell>Persistent navigation, recent searches</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">6.2 Applying Behavioral Economics</h3>
          
          <div className="text-muted-foreground space-y-4">
            <p className="mb-4">Our design leverages behavioral economics principles:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border bg-muted/20">
                <h4 className="text-lg font-medium mb-3 text-foreground">Social Proof</h4>
                <p>Displaying user counts and engagement metrics on events and content helps users make decisions based on others' actions. Event pages show attendee profiles and testimonials, while articles display view counts and comment numbers.</p>
              </div>
              
              <div className="p-6 rounded-lg border bg-muted/20">
                <h4 className="text-lg font-medium mb-3 text-foreground">Scarcity</h4>
                <p>Event listings highlight limited-capacity events with "Only X spots left" indicators, creating urgency without false pressure. Registration pages show real-time capacity updates to encourage timely decisions.</p>
              </div>
              
              <div className="p-6 rounded-lg border bg-muted/20">
                <h4 className="text-lg font-medium mb-3 text-foreground">Loss Aversion</h4>
                <p>Notification emails frame missed events as opportunities lost rather than just informational updates. The platform emphasizes what users might miss without creating negative pressure or FOMO.</p>
              </div>
              
              <div className="p-6 rounded-lg border bg-muted/20">
                <h4 className="text-lg font-medium mb-3 text-foreground">Endowment Effect</h4>
                <p>Users can create personalized content "collections" for later reference, increasing platform value through ownership. Content contributions receive prominent attribution, building psychological ownership.</p>
              </div>
              
              <div className="p-6 rounded-lg border bg-muted/20">
                <h4 className="text-lg font-medium mb-3 text-foreground">Default Effect</h4>
                <p>Strategic default settings for notification preferences are balanced between engagement and user control. Based on user research, we established reasonable defaults for update frequency that match expectations.</p>
              </div>
              
              <div className="p-6 rounded-lg border bg-muted/20">
                <h4 className="text-lg font-medium mb-3 text-foreground">Anchoring</h4>
                <p>Feature comparison tables use strategic ordering to highlight value. Showcasing premium events first establishes value perception for all events. Testimonials are ordered to establish positive expectations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 