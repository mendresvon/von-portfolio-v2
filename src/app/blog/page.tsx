import { getAllPosts } from "@/lib/blog";
import BlogList from "@/components/blog_list";

export const metadata = {
  title: "Blog | Von Mendres",
  description: "Read my latest thoughts, guides, and updates.",
};

export default async function BlogPage() {
  // We fetch both languages here or just handle it in the client
  // For simplicity, let's fetch all posts and let the client filter or just provide both
  const enPosts = await getAllPosts('en');
  const zhPosts = await getAllPosts('zh-TW');
  
  // Combine them for the client to handle based on current language
  const allPosts = [...enPosts, ...zhPosts];

  return (
    <main className="min-h-screen">
      <BlogList initialPosts={allPosts} />
    </main>
  );
}
