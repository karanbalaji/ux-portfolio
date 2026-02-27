"use client";

import { CopilotKit } from "@copilotkit/react-core";
import { PortfolioCopilot } from "./portfolio-copilot";

export function CopilotProvider({ children }: { children: React.ReactNode }) {
  return (
    <CopilotKit
      runtimeUrl="/api/copilotkit"
      agent="portfolioAgent"
    >
      {children}
      <PortfolioCopilot />
    </CopilotKit>
  );
}
