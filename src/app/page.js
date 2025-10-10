import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Projects />
      <section id="achievements" className="py-20 bg-gray-950 text-white">
        <Achievements />
        <TechStack />
        <Contact />
        <Footer />
      </section>
    </main>
  );
}

