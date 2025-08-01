import type { FC } from 'hono/jsx';

export const Container: FC = ({ children }) => {
  return (
    <main className="container mx-auto max-w-3xl flex-grow px-6 lg:px-0">
      <div className="mt-10 mb-24">{children}</div>
    </main>
  );
};
