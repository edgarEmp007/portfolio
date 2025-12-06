import Hero from "@/components/redesign/Hero";
import Experience from "@/components/redesign/Experience";
import Journey from "@/components/redesign/Journey";
import Skills from "@/components/redesign/Skills";
import Projects from "@/components/redesign/Projects";
import Contact from "@/components/redesign/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] overflow-hidden selection:bg-[var(--accent)] selection:text-black">
      <Hero />
      <Experience />
      <Journey />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
