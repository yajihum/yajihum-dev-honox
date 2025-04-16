import type { Child } from 'hono/jsx';
import { SnsSvgWrapper, SvgPaths } from '../icons';

type SnsLink = {
  name: string;
  url: string;
  icon: Child;
  userName: string;
};

const snsLinks: SnsLink[] = [
  {
    name: 'X',
    url: 'https://twitter.com/yajihum',
    icon: SvgPaths.x,
    userName: '@yajihum',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/yajihum',
    icon: SvgPaths.github,
    userName: '@yajihum',
  },
  {
    name: 'Zenn',
    url: 'https://zenn.dev/rorisutarou',
    icon: SvgPaths.zenn,
    userName: '@rorisutarou',
  },
  {
    name: 'Speaker Deck',
    url: 'https://speakerdeck.com/yajihum',
    icon: SvgPaths.speakerDeck,
    userName: '@yajihum',
  },
];

export const SnsLinks = () => {
  return (
    <ul className="grid grid-cols-1 gap-2">
      {snsLinks.map((link) => (
        <li key={link.name}>
          <a
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-lg md:gap-3 hover:underline underline-offset-2 w-fit"
          >
            <SnsSvgWrapper
              className="h-10 w-10 rounded-md p-2"
              fill="currentColor"
            >
              {link.icon}
            </SnsSvgWrapper>
            <div className="flex gap-2 items-baseline">
              <p>{link.name}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 md:text-base">
                {link.userName}
              </p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};
