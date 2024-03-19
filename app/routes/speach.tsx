import { createRoute } from 'honox/factory';
import { H2Centered, SpeachLinks } from '../components/ui';

export default createRoute((c) => {
  return c.render(
    <section class='grid grid-cols-1 gap-20' aria-labelledby='speach-slides'>
      <H2Centered id='speach-slides' title='Speach slides' />
      <div class='grid grid-cols-1 gap-10'>
        <SpeachLinks />
      </div>
    </section>,
    {
      title: 'Speach slides',
      description: 'Speach slides that Yajihum has presented.',
    },
  );
});
