import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function ProblemStatement() {
  return (
    <section id="problem-statement" className="scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6">2. Problem Statement & Context Analysis</h2>
      <div className="space-y-8">
        <div className="text-muted-foreground">
          <p className="text-lg mb-6">
            Toronto's fintech community lacked a centralized, user-friendly platform for sharing news, events, 
            and resources. Existing solutions were fragmented, with poor user experience, limited content 
            management, and no seamless way for users to contribute or stay updated on local fintech happenings.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">2.1 Market Analysis</h3>
          <p className="text-muted-foreground">
            Toronto ranks as the 2nd largest financial center in North America and hosts over 380 fintech 
            startups, yet research revealed significant fragmentation in the ecosystem. Our competitive 
            analysis identified:
          </p>

          <div className="rounded-lg border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/2">Existing Solution</TableHead>
                  <TableHead>Primary Limitations</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">LinkedIn Groups</TableCell>
                  <TableCell>Poor discoverability, limited content organization</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Meetup.com</TableCell>
                  <TableCell>Event-focused only, no content or resource sharing</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Corporate blogs</TableCell>
                  <TableCell>Siloed information, company-specific focus</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Industry newsletters</TableCell>
                  <TableCell>One-way communication, no community features</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">2.2 User Needs Assessment</h3>
          <p className="text-muted-foreground">
            Through interviews with 42 stakeholders across the fintech ecosystem and surveys of 215 community 
            members, we identified core user needs:
          </p>

          <ul className="space-y-4 text-muted-foreground list-disc pl-5">
            <li><span className="font-medium">Information Consolidation:</span> 76% of users reported spending 3+ hours weekly searching for fintech news and events across multiple platforms</li>
            <li><span className="font-medium">Community Connection:</span> 83% expressed interest in networking opportunities with easier discovery</li>
            <li><span className="font-medium">Content Contribution:</span> 64% wanted to share insights but lacked appropriate channels</li>
            <li><span className="font-medium">Career Development:</span> 91% sought ecosystem visibility for professional growth</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">2.3 Key User Personas</h3>
          <div className="rounded-lg border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[150px]">Persona</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Primary Needs</TableHead>
                  <TableHead>Pain Points</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Fintech Professional</TableCell>
                  <TableCell>Mid-career tech or finance specialist working in fintech</TableCell>
                  <TableCell>Industry insights, networking opportunities, career advancement</TableCell>
                  <TableCell>Information overload, fragmented resources</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Event Organizer</TableCell>
                  <TableCell>Community builder planning meetups and conferences</TableCell>
                  <TableCell>Audience reach, streamlined registration, event promotion</TableCell>
                  <TableCell>Poor targeting, manual processes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Content Creator</TableCell>
                  <TableCell>Thought leader, writer, industry analyst</TableCell>
                  <TableCell>Platform for sharing expertise, audience growth</TableCell>
                  <TableCell>Limited distribution channels, low visibility</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Fintech Entrepreneur</TableCell>
                  <TableCell>Startup founder seeking connections and resources</TableCell>
                  <TableCell>Investor connections, talent acquisition, market insights</TableCell>
                  <TableCell>Time constraints, ecosystem fragmentation</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Fintech Enthusiast</TableCell>
                  <TableCell>Student or career-changer interested in the industry</TableCell>
                  <TableCell>Learning resources, entry points to the community</TableCell>
                  <TableCell>Overwhelmed by technical jargon</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  )
} 