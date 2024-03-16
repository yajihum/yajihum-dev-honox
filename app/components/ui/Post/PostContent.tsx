import type { Child, FC } from 'hono/jsx';

type Props = {
  content: Child | undefined;
};

export const PostContent: FC<Props> = ({ content }) => {
  return (
    <div className='prose prose-neutral m-auto mt-5 max-w-4xl dark:prose-li:marker:text-neutral-400 prose-code:px-1 prose-code:before:hidden prose-code:after:hidden text-neutral-700 dark:text-neutral-200 prose-img:my-4 prose-img:md:w-3/4 prose-a:break-words prose-img:rounded dark:prose-h3:text-neutral-300 prose-h2:text-neutral-700 dark:prose-h2:text-neutral-100 dark:prose-h2:border-neutral-600 prose-h2:border-b prose-pre:px-8 prose-h2:py-4 prose-pre:py-6 hover:prose-a:text-sky-400 prose-a:text-sky-500 dark:hover:prose-a:text-sky-300 prose-a:text-sky-400 prose-blockquote:text-neutral-500 dark:prose-blockquote:text-neutral-300 prose-code:text-lime-500 dark:prose-code:text-lime-400 prose-em:text-neutral-200 prose-em:text-sm prose-strong:text-black dark:prose-strong:text-white'>
      {content}
    </div>
  );
};
