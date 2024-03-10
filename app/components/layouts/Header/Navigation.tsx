import { useRequestContext } from 'hono/jsx-renderer';
import SideBar from '../../../islands/sideBar';
import { navigationLinks } from './data';

export const Navigation = () => {
  const c = useRequestContext();
  const current = c.req.path;
  return (
    <>
      <div className='block md:hidden'>
        <SideBar />
      </div>
      <nav className='my-0.5 hidden items-end md:flex'>
        <ul className='grid grid-cols-3 justify-items-center gap-4'>
          {navigationLinks.map((link) => {
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  class={current === link.href ? 'text-green-300' : ''}
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
