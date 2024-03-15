export type Tag = 'tech' | 'life';

export type Meta = {
  title: string;
  description: string;
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
