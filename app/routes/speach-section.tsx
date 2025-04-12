import type { OGP } from '../../plugins/remark';
import { speakerDeckEmbeddings } from '../components/speacker-deck';
import { H2 } from '../components/ui';
import { SpeachSlideLink } from '../components/ui/SpeachSlideLink';
import { linkcardEntryPoint } from '../lib/cloudflare';
import { useId } from 'hono/jsx';

interface SpeachSlide extends OGP {
  speakerDeckUrl: string;
}

export const SpeachSection = async () => {
  const id = useId();

  const speachSlides = await Promise.all(
    speakerDeckEmbeddings.map(async (speach) => {
      const res = await fetch(
        `${linkcardEntryPoint}/api/linkCard?url=${speach.speakerDeckUrl}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const slide: SpeachSlide = await res.json();
      return {
        title: slide.title.split(' - ')[0],
        ogImageUrl: slide.imageUrl,
        eventName: speach.event,
        speakerDeckUrl: speach.speakerDeckUrl,
      };
    })
  );

  return (
    <section class="grid grid-cols-1 gap-6" aria-labelledby={id}>
      <H2 id={id} title="Speach" />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {speachSlides.map((slide) => (
          <SpeachSlideLink
            title={slide.title}
            ogImageUrl={slide.ogImageUrl}
            eventName={slide.eventName}
            speakerDeckUrl={slide.speakerDeckUrl}
          />
        ))}
      </div>
    </section>
  );
};
