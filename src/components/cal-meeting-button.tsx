"use client"

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CalMeetingButton() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

  return (
    <Button
      size="lg"
      data-cal-namespace="30min"
      data-cal-link="karan-balaji/30min"
      data-cal-config='{"layout":"month_view"}'
      className="gap-2 w-full sm:w-auto bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 text-white shadow-lg transition-all duration-200 transform hover:scale-105 px-6 sm:px-8"
    >
      Book a Meeting <Calendar className="h-4 w-4" />
    </Button>
  );
} 