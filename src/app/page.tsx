import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Stack from '../components/Stack';
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
        <section id="about">
          <About />
        </section>

        <section id="stack" className="bg-white">
          <Stack />
        </section>

        <section id="projects" className="bg-gray-100">
          <Projects />
        </section>

        <section id="contact" className="bg-[#0b1423]">
          <Contact />
        </section>
      </main>

      <footer className="text-center p-4 bg-[#070c14]">
        <p className="text-sm text-gray-300">© 2025 DevNunes. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
