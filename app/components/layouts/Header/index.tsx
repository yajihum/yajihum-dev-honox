import type { FC } from 'hono/jsx';
import { Navigation } from './Navigation';

export const Header: FC = ({ children }) => {
  return (
    <header className='sticky top-0 z-10 border-zinc-200 border-b py-3 backdrop-blur transition-colors dark:border-zinc-800 dark:bg-zinc-950/60'>
      <div className='mx-auto flex max-w-3xl items-center justify-between px-4 md:px-0'>
        <a href='/' className='hover:underline'>
          <h2 className='flex items-center gap-1.5 font-bold text-lg'>
            <img
              src='https://cdn.emoji.yajihum.dev/animals-and-nature/83.png'
              width='40'
              height='40'
              alt='かえるの絵文字'
              className='inline-block h-7 w-7'
            />
            <span class='pb-0.5'>yajihum.dev</span>
          </h2>
        </a>
        <Navigation>{children}</Navigation>
      </div>
    </header>
  );
};
