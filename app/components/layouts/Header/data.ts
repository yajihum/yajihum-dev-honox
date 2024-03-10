export type LinkType = {
  name: string;
  href: string;
};

export const navigationLinks: LinkType[] = [
  { name: 'Home', href: '/' },
  {
    name: 'Speach',
    href: '/speach',
  },
  { name: 'Blog', href: '/blog' },
];
