import { createRoute } from 'honox/factory';
import type { OGP } from '../../plugins/remark';
import { speakerDeckEmbeddings } from '../components/speacker-deck';
import { H2Centered } from '../components/ui';
import { SpeachSlideLink } from '../components/ui/SpeachSlideLink';
import { linkcardEntryPoint } from '../lib/cloudflare';

type SpeachSlide = {
  speakerDeckUrl: string;
} & OGP;

export default createRoute(async (c) => {
  const speachSlides = await Promise.all(
    speakerDeckEmbeddings.map(async (speach) => {
      const res = await fetch(
        `${linkcardEntryPoint}/api/linkCard?url=${speach.speakerDeckUrl}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const slide: SpeachSlide = await res.json();
      return {
        title: slide.title.split(' - ')[0],
        ogImageUrl: slide.imageUrl,
        eventName: speach.event,
        speakerDeckUrl: speach.speakerDeckUrl,
      };
    }),
  );

  return c.render(
    <section class='grid grid-cols-1 gap-20' aria-labelledby='speach-slides'>
      <H2Centered id='speach-slides' title='Speach slides' />
      <div class='grid grid-cols-1 gap-10'>
        {speachSlides.map(async (slide) => {
          return (
            <SpeachSlideLink
              title={slide.title}
              ogImageUrl={slide.ogImageUrl}
              eventName={slide.eventName}
              speakerDeckUrl={slide.speakerDeckUrl}
            />
          );
        })}
      </div>
    </section>,
    {
      title: 'Speach slides',
      description: 'Speach slides that Yajihum has presented.',
    },
  );
});
