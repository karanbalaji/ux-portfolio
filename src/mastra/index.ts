import { Mastra } from '@mastra/core/mastra';
import { portfolioAgent } from './agents/portfolio-agent';

export const mastra = new Mastra({
  agents: {
    portfolioAgent,
  },
  server: {
    port: process.env.MASTRA_PORT ? parseInt(process.env.MASTRA_PORT) : undefined,
    cors: {
      origin: process.env.NODE_ENV === 'production'
        ? ['https://karanbalaji.com', 'https://www.karanbalaji.com']
        : ['http://localhost:3000'],
      allowMethods: ['GET', 'POST', 'OPTIONS'],
      allowHeaders: ['Content-Type', 'Authorization'],
    },
  },
});

export { portfolioAgent };
