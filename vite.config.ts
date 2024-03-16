import pages from '@hono/vite-cloudflare-pages';
import mdx from '@mdx-js/rollup';
import honox from 'honox/vite';
import client from 'honox/vite/client';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import remarkToc from 'remark-toc';
import { defineConfig } from 'vite';

const rehypePrettyCodeOptions = {
  theme: 'ayu-dark',
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
    plugins: [
      honox(),
      pages(),
      mdx({
        jsxImportSource: 'hono/jsx',
        remarkPlugins: [
          remarkFrontmatter,
          remarkMdxFrontmatter,
          remarkGfm,
          [remarkToc, { maxDepth: 3, heading: '目次' }],
        ],
        rehypePlugins: [
          rehypeSlug,
          [rehypePrettyCode, rehypePrettyCodeOptions],
        ],
      }),
    ],
  };
});
