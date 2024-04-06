export type Tag = 'tech' | 'life';

export type Meta = {
  title: string;
  description?: string;
  published: boolean;
  pubDate: string;
  tag: Tag;
  icon: string;
};

export type ExtendedMeta = Meta & {
  slug?: string;
  content?: string;
};

export type Post = [
  string,
  {
    frontmatter: Meta;
  },
];

export type TocChildren = {
  type: string;
  tagName?: string;
  value?: string;
  properties?: {
    id?: string;
    className?: string;
    href?: string;
  };
  children?: TocChildren[];
};

export type Toc = {
  type: string;
  tagName: string;
  properties: {
    id?: string;
    className?: string;
  };
  value?: string;
  children?: TocChildren[];
};
