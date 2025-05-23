import { cx } from 'hono/css';
import type { PropsWithChildren } from 'hono/jsx';
import { HeroiconsSvgWrapper, SvgPaths } from '../icons';

type Props = {
  id: string;
  title?: string;
  hasBorder?: boolean;
} & PropsWithChildren;

export const H2WithId = ({ id, title, children, hasBorder = false }: Props) => {
  const borderClass = hasBorder ? 'border-b border-zinc-700 py-3' : '';
  return (
    <h2
      id={id}
      class={cx(
        'h2-hover relative flex scroll-mt-20 items-center gap-1 font-bold text-${textPosition} text-lg md:gap-0 md:text-2xl',
        borderClass
      )}
    >
      <a id={id} href={`#${id}`} class="md:-left-7 md:absolute">
        <HeroiconsSvgWrapper className="hover-opacity h-6 w-6 text-emerald-500 transition-opacity duration-200 md:opacity-0">
          {SvgPaths.hashtag}
        </HeroiconsSvgWrapper>
      </a>
      {title}
      {children}
    </h2>
  );
};

type H2Props = {
  title: string;
  id: string;
};

export const H2 = ({ title, id }: H2Props) => {
  return (
    <h2 id={id} class="text-xl text-zinc-600 dark:text-zinc-200 md:text-3xl">
      {title}
    </h2>
  );
};
