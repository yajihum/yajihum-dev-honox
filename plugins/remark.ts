import type { Root } from 'mdast';
import { visit } from 'unist-util-visit';
import { linkcardEntryPoint } from '../app/lib/cloudflare';

type OGP = {
  title: string;
  description: string;
  siteName: string;
  faviconUrl: string;
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const isOGP = (data: any): data is OGP => {
  return (
    data &&
    typeof data.title === 'string' &&
    typeof data.description === 'string' &&
    typeof data.siteName === 'string' &&
    typeof data.faviconUrl === 'string'
  );
};

const createObject = (
  type: string,
  className: string,
  value: string,
  url?: string,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  children?: any[],
) => ({
  type,
  url,
  data: {
    hProperties: {
      className,
    },
  },
  children,
});

export const remarkLinkCard = () => async (tree: Root) => {
  const promises: Promise<void>[] = [];
  visit(tree, 'paragraph', (paragraph, index, parent) => {
    if (
      !parent ||
      !index ||
      paragraph.children.length > 1 ||
      paragraph.children[0].type !== 'link' ||
      paragraph.children[0].url.includes('x.com')
    )
      return;

    const url = paragraph.children[0].url;

    const promise = fetch(`${linkcardEntryPoint}/api/linkCard?url=${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((ogp: unknown) => {
        if (!isOGP(ogp) || ogp.title === '' || ogp.description === '') return;

        parent.children[index] = {
          type: 'element',
          data: {
            hProperties: {
              className:
                'not-prose rounded-xl border border-zinc-200 bg-zinc-100 shadow shadow-zinc-300 transition-colors duration-300 hover:bg-zinc-50',
            },
          },
          children: [
            {
              type: 'link',
              url,
              data: {
                hProperties: {
                  className:
                    'block px-4 pt-4 font-light text-black no-underline hover:text-black md:px-8 md:pb-2 md:pt-6',
                  target: '_blank',
                  rel: 'noreferrer',
                },
              },
              children: [
                {
                  type: 'element',
                  data: {
                    hProperties: {
                      className: 'grid grid-cols-1 gap-2',
                    },
                  },
                  children: [
                    {
                      type: 'paragraph',
                      data: {
                        hProperties: {
                          className: 'm-0 text-sm md:text-base text-zinc-600',
                        },
                      },
                      children: [
                        {
                          type: 'text',
                          value: ogp.title,
                        },
                      ],
                    },
                    {
                      type: 'paragraph',
                      data: {
                        hProperties: {
                          className:
                            'm-0 line-clamp-2 text-xs text-zinc-500 md:text-sm',
                        },
                      },
                      children: [
                        {
                          type: 'text',
                          value: ogp.description,
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'element',
                  data: {
                    hProperties: {
                      className: 'flex items-center',
                    },
                  },
                  children: [
                    {
                      type: 'image',
                      url: ogp.faviconUrl,
                      alt: `${ogp.siteName} website's favicon`,
                      data: {
                        hProperties: {
                          className: '!w-5 flex-shrink-0',
                          referrerPolicy: 'no-referrer',
                          width: 10,
                          height: 10,
                        },
                      },
                    },
                    {
                      type: 'paragraph',
                      data: {
                        hProperties: {
                          className: 'm-4 text-xs text-neutral-600 md:text-sm',
                        },
                      },
                      children: [
                        {
                          type: 'text',
                          value: ogp.siteName,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        };
      })
      .catch(() => {});
    promises.push(promise);
  });

  await Promise.all(promises);
};
