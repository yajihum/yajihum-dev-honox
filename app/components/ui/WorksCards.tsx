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
    <ul class='grid grid-cols-1 gap-6 md:grid-cols-2'>
      {works.map((work) => (
        <li
          key={work.name}
          class='rounded-xl shadow-lg dark:shadow-none border border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800'
        >
          <a
            href={work.url}
            target='_blank'
            class='grid grid-cols-1 gap-1'
            rel='noreferrer'
          >
            <div class=''>
              <img
                src={work.image}
                alt={work.name}
                class='h-52 w-full rounded-t-xl'
              />
            </div>
            <section class='grid grid-cols-1 gap-6 p-4 text-center'>
              <section class='grid grid-cols-1 gap-1'>
                <p class='font-bold text-lg'>{work.name}</p>
                <p class='text-neutral-400 text-sm'>{work.description}</p>
              </section>
              <ul class='flex justify-center gap-2'>
                {work.technologies.map((technology) => (
                  <li
                    key={technology}
                    class='rounded-md bg-green-200/20 px-3 py-1 font-bold text-green-500 text-sm dark:bg-green-900/30 dark:text-green-300'
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </section>
          </a>
        </li>
      ))}
    </ul>
  );
};
