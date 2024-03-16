import type { Child } from 'hono/jsx';
import { SnsSvgWrapper, SvgPaths } from '../icons';

type SnsLink = {
  name: string;
  url: string;
  icon: Child;
  userName: string;
  fill?: string;
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
    fill: 'fill-blue-500',
  },
  {
    name: 'Speaker Deck',
    url: 'https://speakerdeck.com/yajihum',
    icon: SvgPaths.speakerDeck,
    userName: '@yajihum',
    fill: 'fill-green-500',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/yajihum',
    icon: SvgPaths.instagram,
    userName: '@yajihum',
    fill: 'fill-pink-500',
  },
];

export const SnsLinks = () => {
  return (
    <ul className='mx-auto grid max-w-sm grid-cols-1 gap-2 md:max-w-4xl md:grid-cols-5 md:gap-3'>
      {snsLinks.map((link, index) => (
        <li key={link.name}>
          <a
            href={link.url}
            target='_blank'
            rel='noreferrer'
            className={`flex gap-4 md:gap-3 hover:bg-neutral-100 dark:hover:bg-inherit ${
              index === 3 ? 'py-2 pl-2 pr-4' : 'p-2'
            } rounded-lg`}
          >
            <SnsSvgWrapper
              className={`h-10 w-10 md:h-11 md:w-11 rounded-md dark:bg-white p-1.5 ${link.fill}`}
            >
              {link.icon}
            </SnsSvgWrapper>
            <div className='grid grid-cols-1 text-left'>
              <p className='text-sm'>{link.name}</p>
              <p className='text-neutral-400 text-xs md:text-sm'>
                {link.userName}
              </p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};
