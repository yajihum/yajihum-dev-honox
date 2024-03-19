import type { FC } from 'hono/jsx';

export const Layout: FC = ({ children }) => {
  return (
    <div className='flex min-h-screen flex-col bg-neutral-50 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-200'>
      {children}
    </div>
  );
};
