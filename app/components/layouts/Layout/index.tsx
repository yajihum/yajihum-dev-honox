import type { FC } from 'hono/jsx';
import { Footer } from '../Footer';
import Header from '../Header';

const Container: FC = ({ children }) => {
  return <div className='mt-10 mb-24'>{children}</div>;
};

export const Layout: FC = ({ children }) => {
  return (
    <div className='flex min-h-screen flex-col dark:bg-neutral-800 dark:text-neutral-200'>
      <Header />
      <main className='container mx-auto max-w-3xl flex-grow px-4 md:px-0'>
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
};
