import Hero from "@/components/hero";
import About from "@/components/about_me";
import Experience from "@/components/experience";
import Skills from "@/components/education_skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact_me";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
