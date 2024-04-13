import type { Child, FC } from 'hono/jsx';
import { useRequestContext } from 'hono/jsx-renderer';
import { emojiDomain } from '../../../lib/cloudflare';
import type { Meta, Tag } from '../../../types';
import { HeroiconsSvgWrapper, SnsSvgWrapper, SvgPaths } from '../../icons';
import { PostContent } from './PostContent';

type Props = {
  tag: Tag;
  children: Child | undefined;
  frontmatter: Meta;
};

export const Post: FC<Props> = ({ tag, children, frontmatter }: Props) => {
  const { title, description, pubDate, icon } = frontmatter;

  const c = useRequestContext();
  const current = c.req.path;
  const slug = current.split('/').pop();

  return (
    <div className='grid grid-cols-1 gap-28 py-4 md:py-8'>
      <div className='flex flex-col gap-6 md:gap-10'>
        <div className='flex justify-center'>
          <img
            src={`${emojiDomain}${icon}.png`}
            alt='絵文字アイコン'
            className='h-16 w-16 p-1 md:h-24 md:w-24'
          />
        </div>
        <section className='grid grid-cols-1 justify-items-center gap-2 md:gap-4'>
          <h1 className='font-semibold text-xl md:text-3xl'>{title}</h1>
          <div className='flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-300 md:text-sm'>
            <HeroiconsSvgWrapper className='h-4 w-4'>
              {SvgPaths.calendar}
            </HeroiconsSvgWrapper>
            <time>{pubDate}</time>
          </div>
        </section>
      </div>
      <section className='rounded-xl p-1'>
        <p class='leading-7'>{description}</p>
        <PostContent content={children} />
      </section>
      {/* <Stamp /> */}
      <section className='flex items-center justify-between'>
        <a
          href={`https://twitter.com/intent/tweet?text=${title}&url=https://blog.yajihum.dev/blog/posts/${tag}/${slug}`}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Xでポストする'
          className='px-2'
        >
          <SnsSvgWrapper
            fill='currentColor'
            className='h-6 w-6 text-zinc-700 md:h-6 md:w-6 dark:hover:text-zinc-100 dark:text-zinc-300 hover:text-zinc-700'
          >
            {SvgPaths.x}
          </SnsSvgWrapper>
        </a>
        <a
          href={`https://github.com/yajihum/yajihum-dev-honox/blob/main/app/routes/blog/posts/${tag}/${slug}.mdx`}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-1.5 rounded-full border border-zinc-300 bg-zinc-100 px-4 py-2 text-sm text-zinc-600 dark:border-zinc-400 dark:bg-zinc-950 dark:hover:bg-zinc-900 hover:bg-zinc-50 dark:text-white'
        >
          <SnsSvgWrapper className='h-5 w-5 fill-zinc-700 md:h-5 md:w-5 dark:fill-white'>
            {SvgPaths.github}
          </SnsSvgWrapper>
          GitHubで編集を提案
        </a>
      </section>
    </div>
  );
};
