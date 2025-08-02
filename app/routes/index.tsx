import { createRoute } from 'honox/factory';
import { H2, SnsLinks, WorksCards } from '../components/ui';
import { useId } from 'hono/jsx';
import { SpeachSection } from './speach-section';

export default createRoute((c) => {
  const id = useId();

  return c.render(
    <div class="grid grid-cols-1 gap-10 py-10 lg:gap-24 lg:py-14">
      <h1 class="text-2xl md:text-3xl font-bold">Hello, I'm yajihum</h1>

      <div class="grid grid-cols-1 gap-14">
        <div class="size-28 md:size-36 rounded-full p-2">
          <img
            src="https://images.site.yajihum.dev/rorisu.png"
            alt="Icon"
            width={144}
            height={144}
          />
        </div>

        <div class="flex flex-col gap-6 justify-center">
          <h2 class="text-2xl md:text-3xl" id={`${id}-about-me`}>
            やじはむ
          </h2>

          <p class="flex flex-col gap-1 text-zinc-600 dark:text-zinc-300">
            <span className="block">Frontend Engineer</span>
            <span className="block">
              ぬいぐるみとヨルシカがとても好き。毎日ほっこり生きている...😴
            </span>
          </p>
        </div>

        <SnsLinks />
      </div>
    </div>,
    {
      title: 'yajihum.dev',
      description: "yajihum's portfolio and blog site.",
    }
  );
});
