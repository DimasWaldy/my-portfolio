import Navbar from "@/components/Navbar";
import ArchitectBackground from "@/components/ui/ArchitectBackground";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Journey from "@/components/sections/Journey";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ArchitectBackground />
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider mx-auto max-w-5xl" />
        <About />
        <div className="section-divider mx-auto max-w-5xl" />
        <Skills />
        <div className="section-divider mx-auto max-w-5xl" />
        <Projects />
        <div className="section-divider mx-auto max-w-5xl" />
        <Journey />
        <div className="section-divider mx-auto max-w-5xl" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
