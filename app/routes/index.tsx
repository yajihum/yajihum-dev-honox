import { createRoute } from 'honox/factory';
import Counter from '../islands/counter';

export default createRoute((c) => {
  return c.render(
    <div>
      <Counter />
    </div>,
  );
});
