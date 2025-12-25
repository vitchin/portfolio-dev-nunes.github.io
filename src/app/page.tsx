import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <header id="home" className="z-0">
        <Hero />
      </header>

      <main className="flex-grow">
        <section id="about" className="py-20 shadow-2xl">
          <About />
        </section>

        <section id="projects" className="py-20 bg-gray-100 shadow-lg">
          <Projects />
        </section>

        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>

      <footer className="text-center p-4 bg-[#0b1423]">
        <p className="text-sm text-gray-300">© 2025 DevNunes. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
