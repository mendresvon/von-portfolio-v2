import Hero from "@/components/hero";
import About from "@/components/about_me";
import Experience from "@/components/experience";
import Skills from "@/components/education_skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact_me";
import { getAllPosts } from "@/lib/blog";

export default async function Home() {
  const enPosts = await getAllPosts("en");
  const zhPosts = await getAllPosts("zh-TW");
  const allPosts = [...enPosts, ...zhPosts];

  return (
    <main>
      <Hero />
      <About latestPosts={allPosts} />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
