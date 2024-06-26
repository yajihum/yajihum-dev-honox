import { createRoute } from 'honox/factory';
import { H2Centered, WorksCards } from '../components/ui';

export default createRoute((c) => {
  return c.render(
    <section
      class='grid grid-cols-1 gap-20 px-0 md:px-0 sm:px-14'
      aria-labelledby='works'
    >
      <H2Centered id='works' title='Works' />
      <WorksCards />
    </section>,
    {
      title: 'Works',
      description: 'Works that Yajihum has created.',
    },
  );
});
