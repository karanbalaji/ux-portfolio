import {
  CopilotRuntime,
  ExperimentalEmptyAdapter,
  copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";
import { MastraAgent } from "@ag-ui/mastra";
import { mastra } from "@/mastra";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  // Wire the Mastra portfolioAgent as a CopilotKit CoAgent via AG-UI protocol
  const portfolioAgent = MastraAgent.getLocalAgent({
    mastra,
    agentId: "portfolioAgent",
    resourceId: "portfolio-visitor",
  });

  const runtime = new CopilotRuntime({
    agents: { portfolioAgent: portfolioAgent as any },
  });

  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    serviceAdapter: new ExperimentalEmptyAdapter(),
    endpoint: "/api/copilotkit",
  });

  return handleRequest(req);
};
