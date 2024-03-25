import type { FC } from 'hono/jsx';

export const Footer: FC = () => {
  return (
    <footer className='border-t p-2 text-center text-sm text-zinc-400 dark:border-zinc-900 dark:text-zinc-500'>
      <p>Copyright © 2024-2025 yajihum</p>
    </footer>
  );
};
