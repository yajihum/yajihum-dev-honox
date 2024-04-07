import pages from '@hono/vite-cloudflare-pages';
import ssg from '@hono/vite-ssg';
import rehypeToc from '@jsdevtools/rehype-toc';
import mdx from '@mdx-js/rollup';
import honox from 'honox/vite';
import client from 'honox/vite/client';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import { defineConfig } from 'vite';
import type { Toc, TocChildren } from './app/types';
import { remarkLinkCard } from './plugins/remark';

const entry = './app/server.ts';

const rehypePrettyCodeOptions = {
  grid: false,
  theme: 'poimandres',
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
  if (mode === 'client') {
    return {
      build: {
        rollupOptions: {
          input: ['./app/style.css'],
          output: {
            assetFileNames: 'static/assets/[name].[ext]',
          },
        },
      },
      plugins: [client()],
    };
  }
  return {
    build: {
      emptyOutDir: false,
    },
    plugins: [
      honox(),
      pages(),
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
