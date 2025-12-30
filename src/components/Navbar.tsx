"use client";

import React, { useState } from 'react';

interface NavbarProps {
  currentSection: string;
  onNavigate: (index: number) => void;
}

const navLinks = [
  { name: 'Home', section: 'home', index: 0 },
  { name: 'About', section: 'about', index: 1 },
  { name: 'Projects', section: 'projects', index: 2 },
  { name: 'Contact', section: 'contact', index: 3 },
];

const Navbar: React.FC<NavbarProps> = ({ currentSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (index: number) => {
    onNavigate(index);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-transparent text-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold">DevNunes</div>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.index)}
                className={`hover:text-blue-300 transition-colors ${
                  currentSection === link.section ? 'text-blue-400 font-semibold' : ''
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-gray-900 bg-opacity-90 rounded-lg">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.index)}
                className={`hover:text-blue-300 transition-colors ${
                  currentSection === link.section ? 'text-blue-400 font-semibold' : ''
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
