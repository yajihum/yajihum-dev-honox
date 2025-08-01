import type { FC } from 'hono/jsx';
import { useRequestContext } from 'hono/jsx-renderer';
import { navigationLinks } from './data';

export const Header: FC = () => {
  const c = useRequestContext();
  const current = c.req.path;

  return (
    <header>
      <nav className="flex justify-end max-w-3xl mx-auto px-4 lg:px-0">
        <ul className="flex justify-items-center gap-6 py-6">
          {navigationLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                class={
                  current === link.href
                    ? 'font-bold'
                    : 'text-zinc-600 dark:text-zinc-400'
                }
              >
                <p className="text-md">{link.name}</p>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
