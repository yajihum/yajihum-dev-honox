import {} from 'hono';
import type { Meta } from './types';

type Head = {
  title: string;
  description?: string;
};

declare module 'hono' {
  interface ContextRenderer {
    (
      content: string | Promise<string>,
      meta?: Head & { frontmatter?: Meta },
    ): Response | Promise<Response>;
  }
}
