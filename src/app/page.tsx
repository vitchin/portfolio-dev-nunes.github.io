"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import FullScreenScroll from '../components/FullScreenScroll';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ["home", "about", "projects", "contact"];

  return (
    <div className="relative">
      <Navbar
        currentSection={sections[currentSection]}
        onNavigate={setCurrentSection}
      />
      <FullScreenScroll
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      >
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </FullScreenScroll>
    </div>
  );
}
