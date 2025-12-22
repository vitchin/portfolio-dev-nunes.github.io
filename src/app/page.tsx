import React from 'react';
import Navbar from '../components/Navbar.tsx';
import Hero from '../components/Hero.tsx';
import About from '../components/About.tsx';
import Projects from '../components/Projects.tsx';
import Contact from '../components/Contact.tsx';

export default function Home() {
  return (
    <div>
      <Navbar />

      <header id="home">
        <Hero />
      </header>

      <main>
        <section id="about" className="py-5">
          <About />
        </section>

        <section id="projects" className="py-5 bg-light">
          <Projects />
        </section>

        <section id="contact" className="py-5">
          <Contact />
        </section>
      </main>

      <footer className="text-center p-4 mt-auto py-3 bg-light">
        <p className="mb-0">© 2024 Your Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
