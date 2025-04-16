import type { Child, FC } from 'hono/jsx';

type Props = {
  content: Child | undefined;
};

export const PostContent: FC<Props> = ({ content }) => {
  return (
    <div className="prose prose-zinc m-auto mt-5 max-w-3xl text-base text-zinc-700 leading-7 prose-code:mx-1 prose-img:mx-auto prose-code:after:hidden prose-code:before:hidden prose-img:md:w-full prose-h2:scroll-mt-20 prose-h3:scroll-mt-20 prose-a:break-words prose-code:rounded-md prose-img:rounded-md dark:prose-code:bg-zinc-800 prose-code:bg-zinc-200/70 md:prose-pre:p-6 prose-figcaption:p-1.5 prose-pre:p-3 prose-code:px-2 prose-code:py-1 prose-h2:py-4 prose-li:pl-0 dark:hover:prose-a:text-blue-300 dark:prose-a:text-blue-400 dark:prose-blockquote:text-zinc-400 dark:prose-code:text-blue-200 dark:prose-em:text-zinc-400 dark:prose-figcaption:text-zinc-400 dark:prose-h2:text-zinc-100 dark:prose-h3:text-zinc-300 dark:prose-li:marker:text-zinc-400 dark:prose-strong:text-white dark:text-zinc-200 hover:prose-a:text-zinc-600 md:text-base prose-blockquote:text-zinc-700 prose-code:text-blue-900 prose-em:text-sm prose-em:text-zinc-700 prose-figcaption:text-zinc-700 prose-h2:text-zinc-700 prose-li:marker:text-zinc-700 prose-strong:text-black md:leading-8 prose-code:font-medium">
      {content}
    </div>
  );
};
