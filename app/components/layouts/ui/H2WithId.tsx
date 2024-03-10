import { cx } from 'hono/css';
import type { PropsWithChildren } from 'hono/jsx';
import { HeroiconsSvgWrapper, SvgPaths } from '../../icons';

type Props = {
  id: string;
  title?: string;
  justifyContent?:
    | 'justify-start'
    | 'justify-normal'
    | 'justify-end'
    | 'justify-center'
    | 'justify-between'
    | 'justify-stretch';
  hasBorder?: boolean;
} & PropsWithChildren;

export const H2WithId = ({
  id,
  title,
  justifyContent = 'justify-normal',
  children,
  hasBorder = false,
}: Props) => {
  const borderClass = hasBorder ? 'border-b border-neutral-700 py-3' : '';
  return (
    <h2
      id={id}
      class={cx(
        'h2-hover relative flex scroll-mt-20 items-center gap-1 text-lg text-${textPosition} font-bold md:gap-0 md:text-2xl',
        borderClass,
        justifyContent,
      )}
    >
      <a id={id} href={`#${id}`} class='md:absolute md:-left-7'>
        <HeroiconsSvgWrapper className='hover-opacity h-6 w-6 text-emerald-500 transition-opacity duration-200 md:opacity-0'>
          {SvgPaths.hashtag}
        </HeroiconsSvgWrapper>
      </a>
      {title}
      {children}
    </h2>
  );
};
