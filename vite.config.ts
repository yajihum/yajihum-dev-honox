import ssg from '@hono/vite-ssg';
import rehypeToc from '@jsdevtools/rehype-toc';
import mdx from '@mdx-js/rollup';
import honox from 'honox/vite';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import { defineConfig } from 'vite';
import type { Toc, TocChildren } from './app/types';
import { remarkLinkCard } from './plugins/remark';
import tailwindcss from '@tailwindcss/vite';
import build from '@hono/vite-build/cloudflare-pages';

const entry = './app/server.ts';

/** @type {import('rehype-pretty-code').Options} */
const rehypePrettyCodeOptions = {
  grid: false,
  theme: 'poimandres',
  transformers: [
    {
      // biome-ignore lint/suspicious/noExplicitAny
      code(node: any) {
        node.properties = {
          className: 'not-prose',
        };
      },
    },
  ],
};

const tocOptions = {
  headings: ['h2', 'h3'],
  position: 'afterbegin',
  cssClasses: {
    link: 'toc-link not-prose',
  },
  customizeTOC: (toc: Toc) => {
    const newChildren: TocChildren[] = [
      {
        type: 'element',
        tagName: 'h2',
        properties: {
          id: 'table-of-contents',
        },
        children: [{ type: 'text', value: '目次' }],
      },
      ...(toc.children || []),
    ];
    return { ...toc, children: newChildren };
  },
};

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      honox({
        client: {
          input: ['/app/style.css'],
        },
      }),
      build(),
      tailwindcss(),
      mdx({
        jsxImportSource: 'hono/jsx',
        remarkPlugins: [
          remarkFrontmatter,
          remarkMdxFrontmatter,
          remarkGfm,
          remarkLinkCard,
        ],
        rehypePlugins: [
          rehypeSlug,
          [rehypeToc, tocOptions],
          [rehypePrettyCode, rehypePrettyCodeOptions],
        ],
      }),
      ssg({ entry }),
    ],
  };
});
