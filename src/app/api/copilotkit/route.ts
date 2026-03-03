import {
  CopilotRuntime,
  ExperimentalEmptyAdapter,
  copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";
import { MastraAgent } from "@ag-ui/mastra";
import { mastra } from "@/mastra";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const portfolioAgent = MastraAgent.getLocalAgent({
    mastra,
    agentId: "portfolioAgent",
    resourceId: "portfolio-visitor",
  });

  const runtime = new CopilotRuntime({
    agents: {
      portfolioAgent: {
        ...portfolioAgent,
        messages: portfolioAgent.messages || [],
      } as any,
    },
  });

  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    serviceAdapter: new ExperimentalEmptyAdapter(),
    endpoint: "/api/copilotkit",
  });

  return handleRequest(req);
};
