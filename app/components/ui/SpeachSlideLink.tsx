import type { FC } from 'hono/jsx';
import { HeroiconsSvgWrapper, SvgPaths } from '../icons';

type Props = {
  title: string;
  eventName: string;
  ogImageUrl: string;
  speakerDeckUrl: string;
};

export const SpeachSlideLink: FC<Props> = ({
  title,
  eventName,
  ogImageUrl,
  speakerDeckUrl,
}) => {
  return (
    <a
      href={speakerDeckUrl}
      target='_blank'
      rel='noreferrer'
      class='grid grid-cols-1 gap-4 rounded-lg border border-zinc-200 bg-zinc-100 p-3 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800 hover:bg-zinc-50 md:p-4 dark:hover:text-white hover:text-zinc-800'
    >
      <img src={ogImageUrl} alt={title} className='rounded-lg' />
      <div class='grid grid-cols-1 gap-1'>
        <div class='flex items-center justify-end gap-2'>
          <p className='text-sm md:font-semibold md:text-base'>{title}</p>
          <HeroiconsSvgWrapper className='hidden h-5 w-5 md:block'>
            {SvgPaths.arrowUpRight}
          </HeroiconsSvgWrapper>
        </div>
        <div className='flex items-center gap-1 text-zinc-600 md:justify-end dark:text-zinc-300'>
          <HeroiconsSvgWrapper className='h-4 w-4'>
            {SvgPaths.atSymbol}
          </HeroiconsSvgWrapper>
          <p className='text-xs md:text-sm'>{eventName}</p>
        </div>
      </div>
    </a>
  );
};
