import type { Child, FC } from 'hono/jsx';

type Props = {
  content: Child | undefined;
};

export const PostContent: FC<Props> = ({ content }) => {
  return (
    <div className='prose prose-neutral m-auto mt-5 max-w-4xl text-neutral-700 prose-img:my-4 prose-code:after:hidden prose-code:before:hidden prose-img:md:w-3/4 prose-a:break-words prose-img:rounded dark:prose-h2:border-neutral-600 prose-h2:border-b md:prose-pre:p-6 prose-pre:p-3 prose-code:px-1 prose-h2:py-4 prose-li:pl-0 dark:hover:prose-a:text-sky-300 dark:prose-blockquote:text-neutral-300 dark:prose-code:text-lime-400 dark:prose-h2:text-neutral-100 dark:prose-h3:text-neutral-300 dark:prose-li:marker:text-neutral-400 dark:prose-strong:text-white dark:text-neutral-200 hover:prose-a:text-sky-400 prose-a:text-sky-500 prose-blockquote:text-neutral-500 prose-code:text-lime-600/80 prose-em:text-neutral-200 prose-em:text-sm prose-h2:text-neutral-700 prose-strong:text-black'>
      {content}
    </div>
  );
};
