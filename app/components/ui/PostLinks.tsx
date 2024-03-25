import { emojiDomain } from '../../lib/cloudflare';
import type { Post, Tag } from '../../types';
import { HeroiconsSvgWrapper, SvgPaths } from '../icons';

type Props = {
  posts: Post[];
  tag: Tag;
};

export const PostLinks = ({ posts, tag }: Props) => {
  return (
    <section className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
      {posts.map(([id, module]) => {
        const slug = id.replace(/^.*\//, '').replace(/\.mdx$/, '');
        return (
          <article
            key={id}
            className='rounded-xl border border-zinc-200 bg-zinc-100 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 hover:bg-zinc-50 hover:dark:bg-zinc-800'
          >
            <a
              href={`/blog/posts/${tag}/${slug}`}
              className='flex items-center gap-4 p-4 md:p-5'
            >
              <div className='flex max-h-20 items-center rounded-xl bg-white p-2 md:w-1/4'>
                <img
                  src={`${emojiDomain}${module.frontmatter.icon}.png`}
                  alt='絵文字アイコン'
                  className='h-14 w-14 p-1 md:h-16 md:w-16'
                />
              </div>
              <div className='flex w-3/4 flex-col gap-2'>
                <div className='flex flex-col gap-1.5'>
                  <div className='flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-300'>
                    <HeroiconsSvgWrapper className='h-4 w-4'>
                      {SvgPaths.calendar}
                    </HeroiconsSvgWrapper>
                    <time>{module.frontmatter.pubDate}</time>
                  </div>
                  <p className='font-semibold text-sm'>
                    {module.frontmatter.title}
                  </p>
                </div>
                <p className='line-clamp-2 text-xs text-zinc-500 dark:text-zinc-300'>
                  {module.frontmatter.description}
                </p>
              </div>
            </a>
          </article>
        );
      })}
    </section>
  );
};
