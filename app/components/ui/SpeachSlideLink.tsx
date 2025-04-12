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
      target="_blank"
      rel="noreferrer"
      class="flex flex-col gap-4 rounded-lg border border-zinc-200 bg-zinc-100 p-3 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800 hover:bg-zinc-50 dark:hover:text-white hover:text-zinc-800"
    >
      <img src={ogImageUrl} alt={title} className="rounded-lg object-cover" />
      <div class="flex flex-col gap-2 flex-1">
        <p className="text-md">{title}</p>
        <p className="text-start text-sm text-zinc-500 dark:text-zinc-400">{`@ ${eventName}`}</p>
      </div>
    </a>
  );
};
