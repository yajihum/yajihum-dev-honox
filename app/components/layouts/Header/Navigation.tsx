import type { FC } from 'hono/jsx';
import { useRequestContext } from 'hono/jsx-renderer';
import { navigationLinks } from './data';

export const Navigation: FC = ({ children }) => {
  const c = useRequestContext();
  const current = c.req.path;
  return (
    <>
      <nav className="my-0.5 flex items-end">
        <ul className="flex justify-items-center gap-6">
          {navigationLinks.map((link) => {
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  class={
                    current === link.href
                      ? 'text-blue-500 dark:text-blue-300'
                      : 'hover:underline underline-offset-2'
                  }
                >
                  <p className="text-md">{link.name}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
