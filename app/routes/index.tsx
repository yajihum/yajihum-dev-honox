import { createRoute } from 'honox/factory';
import { SnsLinks } from '../components/layouts/ui/SnsLinks';

const greetingTitle = `This site is Yajihum's portfolio and blog site.`;

export default createRoute((c) => {
  return c.render(
    <div class='grid grid-cols-1 gap-36 py-14'>
      <section class='grid grid-cols-1 justify-items-center gap-10'>
        <div class='grid grid-cols-1 gap-2 whitespace-pre-wrap text-center font-semibold md:gap-6'>
          <p class='text-2xl md:text-4xl'>Welcome!</p>
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
        class='grid grid-cols-1 place-items-stretch gap-14 text-center'
        aria-label='About me'
      >
        <h2 class='text-3xl text-neutral-300/90'>
          <span class='border-b border-neutral-300 py-2'>About me</span>
        </h2>
        <div class='flex flex-col gap-8'>
          <div role='group' class='flex gap-4 items-start justify-center'>
            <div class='relative w-9 h-9 bg-white rounded-full'>
              <img
                src='https://images.site.yajihum.dev/rorisu.png'
                alt='Icon'
                class='absolute top-0 left-0 w-full h-full rounded-full'
              />
            </div>
            <p class='text-2xl'>yajihum / やじはむ</p>
          </div>
          <p class='flex flex-col gap-1.5'>
            <span className='block'>
              {`I'm a frontend engineer working at `}
              <a
                href='https://qubena.com/'
                className='text-green-300 hover:underline'
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
        class='grid grid-cols-1 place-items-stretch gap-14 text-center'
        aria-label='Links'
      >
        <h2 class='text-3xl text-neutral-300/90'>
          <span class='border-b border-neutral-300 py-2'>Links</span>
        </h2>
        <SnsLinks />
      </section>
    </div>,
  );
});
