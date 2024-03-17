import { createRoute } from 'honox/factory';
import { H2Centered, WorksCards } from '../components';

export default createRoute((c) => {
  return c.render(
    <section
      class='mx-auto grid max-w-md grid-cols-1 gap-20 md:max-w-max'
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
