import { getPostData } from "@/lib/blog";
import { notFound } from "next/navigation";
import BlogPostClient from "@/components/blog_post_client";
import BlogPostView from "@/components/blog_post_view";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  
  const postEn = await getPostData(slug, "en");
  const postZh = await getPostData(slug, "zh-TW");

  if (!postEn && !postZh) {
    notFound();
  }

  const posts = {
    en: postEn ? <BlogPostView post={postEn} language="en" /> : null,
    "zh-TW": postZh ? <BlogPostView post={postZh} language="zh-TW" /> : null,
  };

  return <main className="blog-route"><BlogPostClient initialPosts={posts} /></main>;
}
