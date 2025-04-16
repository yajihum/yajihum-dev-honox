import { emojiDomain } from '../../lib/cloudflare';
import type { Post, Tag } from '../../types';
import { HeroiconsSvgWrapper, SvgPaths } from '../icons';

type Props = {
  posts: Post[];
  tag: Tag;
};

export const PostLinks = ({ posts, tag }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-12">
      {posts.map(([id, module]) => {
        const slug = id.replace(/^.*\//, '').replace(/\.mdx$/, '');

        return (
          <div
            key={id}
            href={`/blog/posts/${tag}/${slug}`}
            class="flex flex-col gap-3 dark:text-zinc-300"
          >
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400">
                <HeroiconsSvgWrapper className="h-4 w-4">
                  {SvgPaths.calendar}
                </HeroiconsSvgWrapper>
                <time>{module.frontmatter.pubDate}</time>
              </div>
              <a
                className="cursor-pointer font-bold text-lg md:text-xl hover:underline"
                href={`/blog/posts/${tag}/${slug}`}
              >
                {module.frontmatter.title}
              </a>
            </div>

            <p className="line-clamp-2 text-sm text-zinc-800 dark:text-zinc-300">
              {module.frontmatter.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};
