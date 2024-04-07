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
              className: 'not-prose link-card',
            },
          },
          children: [
            {
              type: 'link',
              url,
              data: {
                hProperties: {
                  target: '_blank',
                  rel: 'noreferrer',
                },
              },
              children: [
                {
                  type: 'element',
                  data: {
                    hProperties: {
                      className: 'link-card-title',
                    },
                  },
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          value: ogp.title,
                        },
                      ],
                    },
                    {
                      type: 'paragraph',
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
                      className: 'link-card-site',
                    },
                  },
                  children: [
                    {
                      type: 'image',
                      url: ogp.faviconUrl,
                      alt: `${ogp.siteName} website's favicon`,
                      data: {
                        hProperties: {
                          // className: '!w-5 flex-shrink-0',
                          referrerPolicy: 'no-referrer',
                          width: 10,
                          height: 10,
                        },
                      },
                    },
                    {
                      type: 'paragraph',
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
