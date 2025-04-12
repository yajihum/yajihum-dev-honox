import { createRoute } from 'honox/factory';

import { H2, PostLinks } from '../components/ui';
import { getPublishedPosts } from '../lib/blog';
import type { Meta } from '../types';

export default createRoute((c) => {
  const techPosts = import.meta.glob<{ frontmatter: Meta }>(
    './blog/posts/tech/*.mdx',
    {
      eager: true,
    }
  );

  return c.render(
    <section class="grid grid-cols-1 gap-10 py-10">
      <PostLinks tag="tech" posts={getPublishedPosts(techPosts)} />
    </section>,
    {
      title: 'Blog',
      description: 'Blog posts that Yajihum has written.',
    }
  );
});
