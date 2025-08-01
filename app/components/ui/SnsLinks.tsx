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
    <ul className="flex gap-6">
      {snsLinks.map((link) => (
        <li key={link.name} className="my-auto">
          <a
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4"
          >
            <SnsSvgWrapper className="h-6 w-6" fill="currentColor">
              {link.icon}
            </SnsSvgWrapper>
          </a>
        </li>
      ))}
    </ul>
  );
};
