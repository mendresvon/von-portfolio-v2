import { getPostData } from "@/lib/blog";
import { notFound } from "next/navigation";
import BlogPostClient from "@/components/blog_post_client";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  
  // We try to get data for both languages to check existence
  // In a real app, you might use the language from a cookie or header here
  // For now, we'll fetch EN as default and ZH as secondary if we can
  const postEn = await getPostData(slug, 'en');
  const postZh = await getPostData(slug, 'zh-TW');

  if (!postEn && !postZh) {
    notFound();
  }

  // Pass both to the client so it can toggle between them instantly
  const posts = {
    en: postEn,
    'zh-TW': postZh
  };

  return (
    <main className="min-h-screen">
       <BlogPostClient initialPosts={posts} />
    </main>
  );
}
