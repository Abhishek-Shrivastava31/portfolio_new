import About from "@/components/About";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main className="flex flex-col justify-start items-center bg-custom-gradient text-yellow-50 h-full min-h-screen tracking-wide">
      <NavBar />
      <Hero />
      <About />
      <Project />
      <Approach />
      <Contact />
    </main>
  );
}
