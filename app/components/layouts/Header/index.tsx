import type { FC } from 'hono/jsx';
import { Navigation } from './Navigation';

export const Header: FC = ({ children }) => {
  return (
    <header className="py-3 transition-colors dark:bg-zinc-950/60">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 md:px-0">
        <a href="/" className="hover:underline text-xl">
          yajihum.dev
        </a>
        <Navigation>{children}</Navigation>
      </div>
    </header>
  );
};
