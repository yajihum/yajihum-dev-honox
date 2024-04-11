import type { Child, FC } from 'hono/jsx';

type Props = {
  content: Child | undefined;
};

export const PostContent: FC<Props> = ({ content }) => {
  return (
    <div className='prose prose-zinc m-auto mt-5 max-w-4xl text-sm text-zinc-700 leading-7 prose-img:mx-auto prose-img:md:w-3/4 prose-h2:scroll-mt-20 prose-h3:scroll-mt-20 prose-a:break-words prose-img:rounded-md dark:prose-h2:border-zinc-600 prose-h2:border-b md:prose-pre:p-6 prose-pre:p-3 prose-code:px-1 prose-h2:py-4 prose-li:pl-0 dark:hover:prose-a:text-teal-300 dark:prose-a:text-teal-300/80 dark:prose-blockquote:text-zinc-400 dark:prose-code:text-teal-300/80 dark:prose-h2:text-zinc-100 dark:prose-h3:text-zinc-300 dark:prose-li:marker:text-zinc-400 dark:prose-strong:text-white dark:text-zinc-200 hover:prose-a:text-teal-500 md:text-base prose-a:text-teal-600 prose-blockquote:text-zinc-500 prose-code:text-teal-600 prose-em:text-sm prose-em:text-zinc-200 prose-h2:text-zinc-700 prose-strong:text-black md:leading-8'>
      {content}
    </div>
  );
};
