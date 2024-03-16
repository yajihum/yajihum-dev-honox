import { createRoute } from 'honox/factory';
import { H2Centered, SnsLinks } from '../components';

const greetingTitle = `This site is Yajihum's portfolio and blog site.`;

export default createRoute((c) => {
  return c.render(
    <div class='grid grid-cols-1 gap-28 px-4 py-14 md:gap-36 md:px-0'>
      <section class='grid grid-cols-1 justify-items-center gap-10'>
        <div class='grid grid-cols-1 gap-2 whitespace-pre-wrap text-center font-semibold md:gap-6'>
          <p class='text-3xl md:text-5xl'>Welcome!</p>
          <p class='text-lg md:text-xl'>{greetingTitle}</p>
        </div>
        <img
          src='https://images.site.yajihum.dev/rorisu.png'
          width={200}
          height={200}
          alt='正面から見て左に体を傾け左腕をあげているロリスの画像'
          class='h-36 w-36 md:h-60 md:w-60'
        />
      </section>
      <section
        class='grid grid-cols-1 place-items-stretch gap-14'
        aria-label='About me'
        aria-labelledby='about-me'
      >
        <H2Centered id='about-me' title='About Me' />
        <div class='flex flex-col gap-8'>
          <div role='group' class='flex items-start justify-center gap-4'>
            <div class='relative h-8 w-8 rounded-full bg-white md:h-9 md:w-9'>
              <img
                src='https://images.site.yajihum.dev/rorisu.png'
                alt='Icon'
                class='absolute top-0 left-0 h-full w-full rounded-full'
              />
            </div>
            <p class='text-lg md:text-2xl'>yajihum / やじはむ</p>
          </div>
          <p class='flex flex-col gap-1.5 text-center text-sm'>
            <span className='block'>
              {`I'm a frontend engineer working at `}
              <a
                href='https://qubena.com/'
                className='text-green-500 dark:text-green-300 hover:underline'
              >
                COMPASS
              </a>
              .
            </span>
            <span className='block'>
              ぬいぐるみとヨルシカがとても好き。毎日ほっこり生きている...😴
            </span>
          </p>
        </div>
      </section>
      <section
        class='grid grid-cols-1 place-items-stretch gap-14'
        aria-label='Links'
        aria-labelledby='links'
      >
        <H2Centered id='links' title='Links' />
        <SnsLinks />
      </section>
    </div>,
    {
      title: 'yajihum.dev',
      description: "yajihum's portfolio and blog site.",
    },
  );
});
