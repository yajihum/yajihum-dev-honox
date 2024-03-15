import fs from 'node:fs';
import path from 'node:path';
import type { ExtendedMeta, Tag } from '../types';

const postsDirectory = path.join(process.cwd(), 'app/posts');

const listDirectoryFiles = (tag: Tag) =>
  fs
    .readdirSync(`${postsDirectory}/${tag}`, { withFileTypes: true })
    .flatMap((dirent) =>
      dirent.isFile()
        ? [`${dirent.name}`]
        : listFilesRecursively(`${dirent.name}`, tag),
    );

const listFilesRecursively = (dir: string, tag: Tag): string[] =>
  fs
    .readdirSync(path.join(`${postsDirectory}/${tag}`, dir), {
      withFileTypes: true,
    })
    .flatMap((dirent) =>
      dirent.isFile()
        ? [`${dir}/${dirent.name}`]
        : listFilesRecursively(`${dir}/${dirent.name}`, tag),
    );

export type Items = {
  [key: string]: string;
};

export const getPostBySlug = (
  tag: Tag,
  slug: string,
  fields: (keyof ExtendedMeta)[] = [],
) => {
  const realSlug = slug.split(',').join('/').replace(/\.md$/, '');
  const fileName = `${realSlug}.md`;
  const fullPath = path.join(`${postsDirectory}/${tag}`, fileName, '');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { frontMatter, content } = parseFrontMatterAndContent(fileContents);

  const items: Items = {};

  for (const field of fields) {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof frontMatter[field] !== 'undefined') {
      items[field] = frontMatter[field];
    }
  }

  return items;
};

export const getPostsByTag = (
  tag: Tag,
  fields: (keyof ExtendedMeta)[] = [],
) => {
  const slugs = listDirectoryFiles(tag);
  const posts = slugs
    .filter((slug) => slug.match(/\.md$/))
    .map((slug) => getPostBySlug(tag, slug, fields))
    .sort((post1, post2) => (post1.pubDate > post2.pubDate ? -1 : 1));
  return posts;
};

const parseFrontMatterAndContent = (fileContents: string) => {
  const match = fileContents.match(/---\n([\s\S]+?)\n---([\s\S]*)$/);
  if (!match) {
    throw new Error('No front matter found in the file.');
  }

  const frontMatterString = match[1];
  const content = match[2].trim();
  const frontMatterLines = frontMatterString.split('\n');
  const frontMatter: { [key: string]: string } = {};

  for (const line of frontMatterLines) {
    const [key, ...valueParts] = line.split(':');
    const value = valueParts.join(':').trim();
    frontMatter[key] = value.replace(/^'(.*)'$/, '$1');
  }

  return { frontMatter, content };
};
