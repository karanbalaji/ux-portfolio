"use client";

import { useState } from "react";
import { Calendar, Clock, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MeetingSchedulerProps {
  meetingType?: "quick-chat" | "consultation" | "coffee-chat";
  className?: string;
}

const meetingTypes = {
  "quick-chat": {
    title: "Quick Chat",
    duration: "15 min",
    description: "A brief conversation to connect and discuss ideas",
    calLink: "karanbalaji/quick-chat",
  },
  consultation: {
    title: "Consultation",
    duration: "30 min",
    description: "Discuss your project requirements and explore solutions",
    calLink: "karanbalaji/consultation",
  },
  "coffee-chat": {
    title: "Coffee Chat",
    duration: "45 min",
    description: "A relaxed conversation about UX, AI, or anything else",
    calLink: "karanbalaji/coffee-chat",
  },
};

export function MeetingScheduler({ meetingType = "quick-chat", className }: MeetingSchedulerProps) {
  const [showCal, setShowCal] = useState(false);
  const meeting = meetingTypes[meetingType];

  const calUrl = `https://cal.com/${meeting.calLink}`;

  if (showCal) {
    return (
      <Card className={cn("overflow-hidden", className)}>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Schedule a {meeting.title}
          </CardTitle>
          <CardDescription>
            {meeting.duration} • {meeting.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-[4/3] w-full bg-muted rounded-lg overflow-hidden">
            <iframe
              src={`${calUrl}?embed=true&theme=dark`}
              className="w-full h-full border-0"
              title="Schedule meeting"
            />
          </div>
          <Button
            variant="outline"
            className="w-full mt-3"
            onClick={() => setShowCal(false)}
          >
            Cancel
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Schedule a Meeting
        </CardTitle>
        <CardDescription>
          Pick a time that works best for you
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {Object.entries(meetingTypes).map(
          ([key, config]) => (
            <Button
              key={key}
              variant={key === meetingType ? "default" : "outline"}
              className="w-full justify-start h-auto py-3"
              onClick={() => setShowCal(true)}
            >
              <div className="flex items-center justify-between w-full">
                <div className="text-left">
                  <div className="font-medium">{config.title}</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {config.duration}
                  </div>
                </div>
                {key === meetingType && (
                  <span className="text-xs bg-primary-foreground/20 px-2 py-0.5 rounded">
                    Recommended
                  </span>
                )}
              </div>
            </Button>
          )
        )}

        <Button variant="ghost" className="w-full" asChild>
          <a href={calUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Open in new tab
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
