"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Tech Stack Section */}
      <section id="tech">
        <TechStack />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Achievements & Certifications Section */}
      <section id="achievements">
        <Achievements />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}

