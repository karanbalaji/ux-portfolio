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
      <h2 className="text-3xl font-bold mb-6 text-grey-900 dark:text-grey-50">2. Problem Statement & Context Analysis</h2>
      <div className="space-y-8">
        <div className="text-grey-600 dark:text-grey-300">
          <p className="text-lg mb-6">
            Toronto's fintech community lacked a centralized, user-friendly platform for sharing news, events, 
            and resources. Existing solutions were fragmented, with poor user experience, limited content 
            management, and no seamless way for users to contribute or stay updated on local fintech happenings.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50">2.1 Market Analysis</h3>
          <p className="text-grey-600 dark:text-grey-300">
            Toronto ranks as the 2nd largest financial center in North America and hosts over 380 fintech 
            startups, yet research revealed significant fragmentation in the ecosystem. Our competitive 
            analysis identified:
          </p>

          <div className="rounded-lg border border-grey-200 dark:border-grey-700 overflow-hidden">
            <Table>
              <TableHeader className="bg-grey-50 dark:bg-grey-800">
                <TableRow>
                  <TableHead className="w-1/2 text-grey-900 dark:text-grey-50">Existing Solution</TableHead>
                  <TableHead className="text-grey-900 dark:text-grey-50">Primary Limitations</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium text-grey-800 dark:text-grey-200">LinkedIn Groups</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-300">Poor discoverability, limited content organization</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-grey-800 dark:text-grey-200">Meetup.com</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-300">Event-focused only, no content or resource sharing</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-grey-800 dark:text-grey-200">Corporate blogs</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-300">Siloed information, company-specific focus</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-grey-800 dark:text-grey-200">Industry newsletters</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-300">One-way communication, no community features</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50">2.2 User Needs Assessment</h3>
          <p className="text-grey-600 dark:text-grey-300">
            Through interviews with 42 stakeholders across the fintech ecosystem and surveys of 215 community 
            members, we identified core user needs:
          </p>

          <ul className="space-y-4 text-grey-600 dark:text-grey-300 list-disc pl-5">
            <li><span className="font-medium text-grey-800 dark:text-grey-200">Information Consolidation:</span> 76% of users reported spending 3+ hours weekly searching for fintech news and events across multiple platforms</li>
            <li><span className="font-medium text-grey-800 dark:text-grey-200">Community Connection:</span> 83% expressed interest in networking opportunities with easier discovery</li>
            <li><span className="font-medium text-grey-800 dark:text-grey-200">Content Contribution:</span> 64% wanted to share insights but lacked appropriate channels</li>
            <li><span className="font-medium text-grey-800 dark:text-grey-200">Career Development:</span> 91% sought ecosystem visibility for professional growth</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-grey-900 dark:text-grey-50">2.3 Key User Personas</h3>
          <div className="rounded-lg border border-grey-200 dark:border-grey-700 overflow-x-auto">
            <Table>
              <TableHeader className="bg-grey-50 dark:bg-grey-800">
                <TableRow>
                  <TableHead className="min-w-[150px] text-grey-900 dark:text-grey-50">Persona</TableHead>
                  <TableHead className="text-grey-900 dark:text-grey-50">Description</TableHead>
                  <TableHead className="text-grey-900 dark:text-grey-50">Primary Needs</TableHead>
                  <TableHead className="text-grey-900 dark:text-grey-50">Pain Points</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium text-tertiary">Fintech Professional</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-300">Mid-career tech or finance specialist working in fintech</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-300">Industry insights, networking opportunities, career advancement</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-300">Information overload, fragmented resources</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-tertiary">Event Organizer</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-300">Community builder planning meetups and conferences</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-300">Audience reach, streamlined registration, event promotion</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-300">Poor targeting, manual processes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-tertiary">Content Creator</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-300">Thought leader, writer, industry analyst</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-300">Platform for sharing expertise, audience growth</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-300">Limited distribution channels, low visibility</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-tertiary">Fintech Entrepreneur</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-300">Startup founder seeking connections and resources</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-300">Investor connections, talent acquisition, market insights</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-300">Time constraints, ecosystem fragmentation</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-tertiary">Fintech Enthusiast</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-300">Student or career-changer interested in the industry</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-300">Learning resources, entry points to the community</TableCell>
                  <TableCell className="text-grey-600 dark:text-grey-300">Overwhelmed by technical jargon</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  )
} 