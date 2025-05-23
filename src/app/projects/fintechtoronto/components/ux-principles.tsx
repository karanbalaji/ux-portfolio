import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function UXPrinciples() {
  return (
    <section id="ux-principles" className="scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-grey-900 dark:text-grey-50">6. UX Laws & Principles Applied</h2>
      
      <div className="space-y-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50">6.1 Nielsen's Heuristics Implementation</h3>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="visibility">
              <AccordionTrigger className="text-left">Visibility of System Status</AccordionTrigger>
              <AccordionContent className="text-grey-600 dark:text-grey-300">
                Real-time feedback throughout the platform: loading states for content, progress indicators during form submission, 
                clear status messages for user actions (saved drafts, published content, event registrations), 
                and visual confirmation of user interactions.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="match">
              <AccordionTrigger className="text-left">Match Between System and Real World</AccordionTrigger>
              <AccordionContent className="text-grey-600 dark:text-grey-300">
                Language and concepts familiar to the fintech community: using industry terminology appropriately, 
                organizing information in logical hierarchies that match mental models, and implementing navigation 
                patterns consistent with professional platforms.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="control">
              <AccordionTrigger className="text-left">User Control and Freedom</AccordionTrigger>
              <AccordionContent className="text-grey-600 dark:text-grey-300">
                Clear escape routes and undo functionality: easily accessible back buttons, draft saving for content creation, 
                confirmation dialogs for destructive actions, and the ability to modify or cancel event registrations.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="consistency">
              <AccordionTrigger className="text-left">Consistency and Standards</AccordionTrigger>
              <AccordionContent className="text-grey-600 dark:text-grey-300">
                Consistent design patterns throughout: standardized button styles and behaviors, uniform card layouts, 
                consistent navigation structure, and adherence to platform conventions for similar actions.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="prevention">
              <AccordionTrigger className="text-left">Error Prevention</AccordionTrigger>
              <AccordionContent className="text-grey-600 dark:text-grey-300">
                Proactive design to prevent user errors: form validation with real-time feedback, confirmation steps for 
                critical actions, auto-save functionality, and clear formatting requirements for content submission.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50">6.2 Behavioral Economics in UX</h3>
          <div className="text-grey-600 dark:text-grey-300 space-y-4">
            <p className="mb-4">Our design leverages behavioral economics principles:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border border-grey-200 dark:border-grey-700 bg-grey-50 dark:bg-grey-800">
                <h4 className="text-lg font-medium mb-3 text-grey-900 dark:text-grey-50">Social Proof</h4>
                <p className="text-grey-600 dark:text-grey-300">Displaying user counts and engagement metrics on events and content helps users make decisions based on others' actions. Event pages show attendee profiles and testimonials, while articles display view counts and comment numbers.</p>
              </div>
              
              <div className="p-6 rounded-lg border border-grey-200 dark:border-grey-700 bg-grey-50 dark:bg-grey-800">
                <h4 className="text-lg font-medium mb-3 text-grey-900 dark:text-grey-50">Scarcity</h4>
                <p className="text-grey-600 dark:text-grey-300">Event listings highlight limited-capacity events with "Only X spots left" indicators, creating urgency without false pressure. Registration pages show real-time capacity updates to encourage timely decisions.</p>
              </div>
              
              <div className="p-6 rounded-lg border border-grey-200 dark:border-grey-700 bg-grey-50 dark:bg-grey-800">
                <h4 className="text-lg font-medium mb-3 text-grey-900 dark:text-grey-50">Loss Aversion</h4>
                <p className="text-grey-600 dark:text-grey-300">Notification emails frame missed events as opportunities lost rather than just informational updates. The platform emphasizes what users might miss without creating negative pressure or FOMO.</p>
              </div>
              
              <div className="p-6 rounded-lg border border-grey-200 dark:border-grey-700 bg-grey-50 dark:bg-grey-800">
                <h4 className="text-lg font-medium mb-3 text-grey-900 dark:text-grey-50">Endowment Effect</h4>
                <p className="text-grey-600 dark:text-grey-300">Users can create personalized content "collections" for later reference, increasing platform value through ownership. Content contributions receive prominent attribution, building psychological ownership.</p>
              </div>
              
              <div className="p-6 rounded-lg border border-grey-200 dark:border-grey-700 bg-grey-50 dark:bg-grey-800">
                <h4 className="text-lg font-medium mb-3 text-grey-900 dark:text-grey-50">Default Effect</h4>
                <p className="text-grey-600 dark:text-grey-300">Strategic default settings for notification preferences are balanced between engagement and user control. Based on user research, we established reasonable defaults for update frequency that match expectations.</p>
              </div>
              
              <div className="p-6 rounded-lg border border-grey-200 dark:border-grey-700 bg-grey-50 dark:bg-grey-800">
                <h4 className="text-lg font-medium mb-3 text-grey-900 dark:text-grey-50">Anchoring</h4>
                <p className="text-grey-600 dark:text-grey-300">Feature comparison tables use strategic ordering to highlight value. Showcasing premium events first establishes value perception for all events. Testimonials are ordered to establish positive expectations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 