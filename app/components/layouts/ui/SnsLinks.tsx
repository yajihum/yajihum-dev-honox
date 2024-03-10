import { SnsSvgWrapper, SvgPaths } from '../../icons';

const snsLinks = [
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
    fill: '#3EA8FF',
  },
  {
    name: 'Speaker Deck',
    url: 'https://speakerdeck.com/yajihum',
    icon: SvgPaths.speakerDeck,
    userName: '@yajihum',
    fill: '#009287',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/yajihum',
    icon: SvgPaths.instagram,
    userName: '@yajihum',
    fill: '#E4405F',
  },
];

export const SnsLinks = () => {
  return (
    <ul className='grid grid-cols-1 gap-6 max-w-sm mx-auto md:max-w-3xl md:grid-cols-5 md:gap-4'>
      {snsLinks.map((link) => (
        <li key={link.name}>
          <a
            href={link.url}
            target='_blank'
            rel='noreferrer'
            className='flex gap-4 md:gap-3'
          >
            <SnsSvgWrapper
              fill={link.fill}
              className='rounded-md bg-white p-1.5 h-10 w-10'
            >
              {link.icon}
            </SnsSvgWrapper>
            <div className='grid grid-cols-1 text-left'>
              <p className='text-sm'>{link.name}</p>
              <p className='text-xs text-neutral-400 md:text-sm'>
                {link.userName}
              </p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};
