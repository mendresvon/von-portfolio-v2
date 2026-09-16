import { getAllPosts } from "@/lib/blog";
import BlogList from "@/components/blog_list";

export const metadata = {
  title: "Blog | Von Mendres",
  description: "Read my latest thoughts, guides, and updates.",
};

export default async function BlogPage() {
  const enPosts = await getAllPosts("en");
  const zhPosts = await getAllPosts("zh-TW");
  const allPosts = [...enPosts, ...zhPosts];

  return <main className="blog-route"><BlogList initialPosts={allPosts} /></main>;
}
