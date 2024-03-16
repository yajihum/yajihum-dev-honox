import type { Child, FC } from 'hono/jsx';

type Props = {
  content: Child | undefined;
};

export const PostContent: FC<Props> = ({ content }) => {
  return (
    <div className='prose prose-neutral m-auto mt-5 max-w-4xl text-neutral-200 prose-img:my-4 prose-img:md:w-3/4 prose-a:break-words prose-img:rounded prose-h2:border-neutral-600 prose-h2:border-b prose-pre:px-8 prose-h2:py-4 prose-pre:py-6 hover:prose-a:text-sky-300 prose-a:text-sky-400 prose-blockquote:text-neutral-300 prose-code:text-lime-400 prose-em:text-neutral-200 prose-em:text-sm prose-headings:text-white prose-strong:text-white'>
      {content}
    </div>
  );
};
