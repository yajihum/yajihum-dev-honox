import type { FC } from 'hono/jsx';

export const Layout: FC = ({ children }) => {
  return (
    <div className='flex min-h-screen flex-col bg-zinc-50 text-zinc-600 dark:bg-zinc-950 dark:text-zinc-200'>
      {children}
    </div>
  );
};
