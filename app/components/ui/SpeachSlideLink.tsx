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
        <div class='flex items-center justify-start gap-2 md:justify-end'>
          <p className='text-sm md:font-semibold md:text-base'>{title}</p>
          <HeroiconsSvgWrapper aria-hidden className='hidden h-5 w-5 md:block'>
            {SvgPaths.arrowUpRight}
          </HeroiconsSvgWrapper>
        </div>
        <p className='text-start text-xs text-zinc-600 md:text-end dark:text-zinc-30 dark:text-zinc-300 md:text-sm'>{`@ ${eventName}`}</p>
      </div>
    </a>
  );
};
