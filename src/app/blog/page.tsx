import Footer from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Von Mendres",
  description: "Read my latest thoughts, guides, and updates.",
};

export default function BlogPage() {
  return (
    <>
      <main className="min-h-screen bg-grid flex flex-col pt-24">
        <div className="container mx-auto px-6 py-20 flex-1">
          <h1 className="text-5xl font-bold text-center mb-6 text-white drop-shadow-md">Blog</h1>
          <p className="text-xl text-center text-gray-400 mb-12">New posts coming soon!</p>
          
          {/* Post list will go here */}
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="p-8 rounded-xl bg-gray-800/40 backdrop-blur-sm border border-teal-500/20 text-center">
               <p className="text-gray-400 italic">No posts yet. Check back later!</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
