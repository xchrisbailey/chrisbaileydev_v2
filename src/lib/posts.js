import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDir = join(process.cwd(), 'content', 'posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDir);
}

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs().filter((file) => file.endsWith('md'));
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.meta.date > post2.meta.date ? '-1' : '1'));
  return posts;
}
