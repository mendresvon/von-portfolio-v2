import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export interface PostMetadata {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  description: string;
  image?: string;
  tags?: string[];
  lang: string;
}

export async function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) return [];
  const files = fs.readdirSync(postsDirectory);
  return files
    .filter((file) => file.endsWith('.mdx') && file !== 'README.md')
    .map((file) => file.replace(/\.(en|zh-TW)\.mdx$/, ''))
    .filter((v, i, a) => a.indexOf(v) === i); // Unique slugs
}

export async function getPostData(slug: string, lang: string) {
  const fileName = `${slug}.${lang}.mdx`;
  const fullPath = path.join(postsDirectory, fileName);
  
  const targetPath = fs.existsSync(fullPath) ? fullPath : path.join(postsDirectory, `${slug}.en.mdx`);
  
  if (!fs.existsSync(targetPath)) return null;

  const fileContents = fs.readFileSync(targetPath, 'utf8');
  const { data, content } = matter(fileContents);

  const mdxSource = await serialize(content);

  return {
    slug,
    metadata: { ...data, slug, lang: fs.existsSync(fullPath) ? lang : 'en' } as PostMetadata,
    content: mdxSource,
  };
}

export async function getAllPosts(lang: string): Promise<PostMetadata[]> {
  if (!fs.existsSync(postsDirectory)) return [];
  const files = fs.readdirSync(postsDirectory);
  
  const posts = files
    .filter((file) => file.endsWith(`.${lang}.mdx`))
    .map((fileName) => {
      const slug = fileName.replace(`.${lang}.mdx`, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      
      return {
        ...data,
        slug,
        lang,
      } as PostMetadata;
    });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
