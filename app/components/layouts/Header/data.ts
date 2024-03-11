export type LinkType = {
  name: string;
  href: string;
};

export const navigationLinks: LinkType[] = [
  { name: 'Home', href: '/' },
  {
    name: 'Works',
    href: '/works',
  },
  {
    name: 'Speach',
    href: '/speach',
  },
  { name: 'Blog', href: '/blog' },
];
