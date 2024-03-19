import { createRoute } from 'honox/factory';

import { H2Centered, PostLinks } from '../components/ui';
import type { Meta } from '../types';

export default createRoute((c) => {
  const techPosts = import.meta.glob<{ frontmatter: Meta }>(
    './blog/posts/tech/*.mdx',
    {
      eager: true,
    },
  );
  const lifePosts = import.meta.glob<{ frontmatter: Meta }>(
    './blog/posts/life/*.mdx',
    {
      eager: true,
    },
  );

  return c.render(
    <section class='grid grid-cols-1 gap-20 md:gap-32' aria-labelledby='blog'>
      <H2Centered id='blog' title='Blog' />
      <div class='grid grid-cols-1 gap-20 md:gap-28'>
        <sectopn aria-labelledby='teach-posts' class='grid grid-cols-1 gap-8'>
          <h3 id='teach-posts' class='text-center text-xl'>
            Tech Posts
          </h3>
          <PostLinks tag='tech' posts={Object.entries(techPosts).reverse()} />
        </sectopn>
        <sectopn aria-labelledby='life-posts' class='grid grid-cols-1 gap-8'>
          <h3 id='life-posts' class='text-center text-xl'>
            Life Posts
          </h3>
          <PostLinks tag='life' posts={Object.entries(lifePosts).reverse()} />
        </sectopn>
      </div>
    </section>,
    {
      title: 'Blog',
      description: 'Blog posts that Yajihum has written.',
    },
  );
});
