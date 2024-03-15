import type { ExtraProps } from 'react-markdown';
import { H2WithId } from '..';

const H2 = ({ node, children, id }: Hono.HTMLAttributes & ExtraProps) => {
  const title =
    node?.children[0] && 'value' in node.children[0]
      ? node?.children[0].value
      : '';

  if (id === 'footnote-label') {
    return (
      <H2WithId id={id} hasBorder={true}>
        脚注
      </H2WithId>
    );
  }

  return (
    <H2WithId id={title} hasBorder={true}>
      {children}
    </H2WithId>
  );
};

// type OGP = {
//   title: string;
//   description: string;
//   siteName: string;
//   faviconUrl: string;
// };

// const LinkCard = async ({ href }: { href: string }) => {
//   const res = await fetch(`${linkcardEntryPoint}/api/linkCard?url=${href}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   const ogp: OGP = await res.json();

//   if (!ogp || !ogp.title) return <a href={href}>{href}</a>;

//   return (
//     <div className='rounded-xl border-4 bg-neutral-100 shadow shadow-neutral-300 transition-colors duration-300 hover:border-neutral-500 hover:bg-neutral-50'>
//       <a
//         href={href}
//         target='_blank'
//         className='block px-4  pt-4 font-light text-black no-underline hover:text-black md:px-8 md:pb-2 md:pt-6'
//         rel='noreferrer'
//       >
//         <div className='grid grid-cols-1 gap-2'>
//           {ogp.title && <p className='m-0 text-sm md:text-base'>{ogp.title}</p>}
//           {ogp.description && (
//             <p className='m-0 line-clamp-2 text-xs text-neutral-600 md:text-sm'>
//               {ogp.description}
//             </p>
//           )}
//         </div>
//         <div className='flex items-center'>
//           <img
//             src={ogp.faviconUrl}
//             alt={`${ogp.siteName} website's favicon`}
//             referrerPolicy='no-referrer'
//             width={10}
//             height={10}
//             className='!w-5 flex-shrink-0'
//           />
//           <p className='m-4 text-xs text-neutral-600 md:text-sm'>
//             {ogp.siteName}
//           </p>
//         </div>
//       </a>
//     </div>
//   );
// };

// type AnchorProps = ClassAttributes<HTMLAnchorElement> &
//   AnchorHTMLAttributes<HTMLAnchorElement> &
//   ExtraProps;

// const Anchor = ({ href, children, ...props }: AnchorProps) => {
//   if (!href) return null;

//   const isInlineLink =
//     children &&
//     (!children.toString().startsWith('http') ||
//       !children.toString().startsWith('https'));

//   if (isInlineLink)
//     return (
//       <a href={href} {...props}>
//         {children}
//       </a>
//     );

//   if (checkTwitterLink(href)) {
//     const tweetId = extractTweetId(href);
//     return (
//       <section className='not-prose flex justify-center'>
//         <Tweet id={tweetId} />
//       </section>
//     );
//   }
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <LinkCard href={href} />
//     </Suspense>
//   );
// };

// const isImage = (children: ReactNode) => {
//   if (Array.isArray(children)) {
//     return children.some((child) => {
//       return child.type === 'img';
//     });
//   }
//   return false;
// };

// type ParagraphProps = ClassAttributes<HTMLParagraphElement> &
//   HTMLAttributes<HTMLParagraphElement> &
//   ExtraProps;

// const Paragraph = ({ children }: ParagraphProps) => {
//   if (!children) return null;

//   if (Array.isArray(children) && isImage(children)) {
//     return (
//       <div className='my-8 grid grid-cols-1 justify-items-center'>
//         {children.map((child) => {
//           return child;
//         })}
//       </div>
//     );
//   }

//   if (typeof children === 'object' && !Array.isArray(children)) {
//     return <>{children}</>;
//   }

//   return <p className='my-8'>{children}</p>;
// };

// type CodeProps = ClassAttributes<HTMLElement> &
//   HTMLAttributes<HTMLElement> &
//   ExtraProps;

// type NodeData = {
//   meta?: string;
// };

// const CodeBlock = ({ className, children, node }: CodeProps) => {
//   const meta = (node?.data as NodeData)?.meta;
//   const filename = meta ? meta.replace(':', '') : '';

//   return (
//     <>
//       {filename && (
//         <div className='px-2 font-semibold md:px-0'>
//           <span>{filename}</span>
//         </div>
//       )}
//       <code className={cn('scrollbar-dark break-all', className)}>
//         {children}
//       </code>
//     </>
//   );
// };

// type PreProps = ClassAttributes<HTMLPreElement> &
//   HTMLAttributes<HTMLPreElement> &
//   ExtraProps;

// const Pre = (props: PreProps) => {
//   if (isValidElement(props.children) && props.children.type === 'code') {
//     const childClassName = props.children.props.className;
//     const childChildren = props.children.props.children;
//     console.log(props.children.props);

//     return (
//       <pre
//         className={cn('grid grid-cols-1 gap-1 px-2 md:px-4', props.className)}
//       >
//         <CodeBlock className={childClassName} node={props.children.props.node}>
//           {childChildren}
//         </CodeBlock>
//       </pre>
//     );
//   }

//   return (
//     <pre className={cn('grid grid-cols-1 gap-3 px-2 md:px-4', props.className)}>
//       {props.children}
//     </pre>
//   );
// };

export const ReactMarkdownComponents = {
  h2: H2,
  // a: Anchor,
  // p: Paragraph,
  // code: CodeBlock,
  // pre: Pre,
};

const checkTwitterLink = (href: string) => {
  const pattern = /(?:x\.com|twitter\.com)/;
  return pattern.test(href);
};

const extractTweetId = (href: string) => {
  const match = href.match(/\/status\/(\d+)/);
  return match ? match[1] : '';
};
