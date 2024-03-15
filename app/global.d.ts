import {} from 'hono';
import type { Meta } from './types';

type Head = {
  title?: string;
};

declare module 'hono' {
  // interface Env {
  //   Variables: {};
  //   Bindings: {};
  // }
  interface ContextRenderer {
    (
      content: string | Promise<string>,
      meta?: Meta & { frontmatter: Meta },
    ): Response | Promise<Response>;
  }
}
