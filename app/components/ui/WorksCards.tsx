type Work = {
  name: string;
  url: string;
  image: string;
  description: string;
  technologies: string[];
};

const works: Work[] = [
  {
    name: 'Microsoft 3D Emoji Picker',
    url: 'https://github.com/yajihum/microsoft-3d-emoji-picker',
    image: 'https://images.site.yajihum.dev/microsoft-3d-emoji-picker.png',
    description: 'Microsoft Fluent Emojiを使った絵文字ピッカー',
    technologies: ['React', 'Cloudflare R2', 'Figma API'],
  },
  {
    name: 'ロリスとおしゃべりタイム🐒',
    url: 'https://rorisu-chat.vercel.app/',
    image: 'https://images.site.yajihum.dev/rorisu-tochat.png',
    description: 'ChatGPT APIを使ったチャットアプリ',
    technologies: ['Next.js', 'ChatGPT-API'],
  },
  {
    name: 'Poketto',
    url: 'https://poketto-mon.vercel.app/',
    image: 'https://images.site.yajihum.dev/poketto.png',
    description: '好きなポケモンをシェアできるアプリ',
    technologies: ['React', 'Next.js', 'Firebase'],
  },
];

export const WorksCards = () => {
  return (
    <ul class="grid grid-cols-1 gap-6">
      {works.map((work) => (
        <li key={work.name}>
          <a
            href={work.url}
            target="_blank"
            class="grid grid-cols-1 gap-1 hover:underline underline-offset-2 text-md"
            rel="noreferrer"
          >
            {work.name}
          </a>
          <p class="text-sm text-zinc-400 hover:no-underline">
            {work.description}
          </p>
        </li>
      ))}
    </ul>
  );
};
