import { createRoute } from 'honox/factory';
import { H2, SnsLinks, WorksCards } from '../components/ui';
import { useId } from 'hono/jsx';
import { SpeachSection } from './speach-section';

export default createRoute((c) => {
  const id = useId();

  return c.render(
    <div class="grid grid-cols-1 gap-24 py-14">
      <section
        class="grid grid-cols-1 place-items-stretch gap-10"
        aria-labelledby={`${id}-about-me`}
      >
        <div class="h-16 w-16 rounded-full p-2">
          <img src="https://images.site.yajihum.dev/rorisu.png" alt="Icon" />
        </div>
        <div class="flex flex-col gap-6">
          <h2 class="text-lg md:text-2xl" id={`${id}-about-me`}>
            yajihum / やじはむ
          </h2>
          <p class="flex flex-col gap-1 text-zinc-600 dark:text-zinc-300">
            <span className="block">
              I'm a frontend engineer working at COMPASS.
            </span>
            <span className="block">
              ぬいぐるみとヨルシカがとても好き。毎日ほっこり生きている...
            </span>
          </p>
        </div>
      </section>

      <section
        class="grid grid-cols-1 place-items-stretch gap-6"
        aria-labelledby={`${id}-links`}
      >
        <H2 id={`${id}-links`} title="Links" />
        <SnsLinks />
      </section>

      <SpeachSection />

      <section class="grid grid-cols-1 gap-6" aria-labelledby={`${id}-works`}>
        <H2 id={`${id}-works`} title="Works" />
        <WorksCards />
      </section>
    </div>,
    {
      title: 'yajihum.dev',
      description: "yajihum's portfolio and blog site.",
    }
  );
});
