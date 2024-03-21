import type { Meta } from '../types';

type Posts = Record<
  string,
  {
    frontmatter: Meta;
  }
>;

export const getPublishedPosts = (posts: Posts) =>
  Object.entries(posts)
    .filter(([_, module]) => module.frontmatter.published)
    .reverse();
