import type { Metadata } from "next";
import { getPostData } from "@/lib/blog";
import { notFound } from "next/navigation";
import BlogPostClient from "@/components/blog_post_client";
import BlogPostView from "@/components/blog_post_view";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostData(slug, "en");
  if (!post) return {};

  const { title, subtitle, description, date, image, tags } = post.metadata;
  const summary = description || subtitle;

  return {
    title: `${title} | Von Mendres`,
    description: summary,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title,
      description: summary,
      url: `/blog/${slug}`,
      publishedTime: date,
      authors: ["Von Breznev A. Mendres"],
      tags,
      images: image ? [image] : undefined,
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description: summary,
      images: image ? [image] : undefined,
    },
  };
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
    // getPostData falls back to the English file, so label it by the language it is actually in
    "zh-TW": postZh ? <BlogPostView post={postZh} language={postZh.metadata.lang === "zh-TW" ? "zh-TW" : "en"} /> : null,
  };

  return <main className="blog-route"><BlogPostClient initialPosts={posts} /></main>;
}
