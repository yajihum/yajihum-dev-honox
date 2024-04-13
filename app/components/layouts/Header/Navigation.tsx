import type { FC } from 'hono/jsx';
import { useRequestContext } from 'hono/jsx-renderer';
import IslandSideBar from '../../../islands/sideBar';
import { navigationLinks } from './data';

export const Navigation: FC = () => {
  const c = useRequestContext();
  const current = c.req.path;
  return (
    <>
      <div className='block md:hidden'>
        <IslandSideBar />
      </div>
      <nav className='my-0.5 hidden items-end md:flex'>
        <ul className='grid grid-cols-4 justify-items-center gap-4'>
          {navigationLinks.map((link) => {
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  class={
                    current === link.href
                      ? 'text-green-500 dark:text-green-300'
                      : ''
                  }
                >
                  <p className='text-sm'>{link.name}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
