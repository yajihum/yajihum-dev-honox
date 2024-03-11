import { createRoute } from 'honox/factory';
import { H2Centered, WorksCards } from '../components';

export default createRoute((c) => {
  return c.render(
    <section class='grid grid-cols-1 gap-20' aria-labelledby='works'>
      <H2Centered id='works' title='Works' />
      <WorksCards />
    </section>,
  );
});
