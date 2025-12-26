"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#070c14] shadow-md z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="hidden md:flex space-x-6">
            <Link href="#home" className="text-gray-50 hover:text-blue-200">Início</Link>
            <Link href="#about" className="text-gray-50 hover:text-blue-200">Sobre</Link>
            <Link href="#stack" className="text-gray-50 hover:text-blue-200">Tecnologias</Link>
            <Link href="#projects" className="text-gray-50 hover:text-blue-200">Projetos</Link>
            <Link href="#contact" className="text-gray-50 hover:text-blue-200">Contato</Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#070c14] pb-4">
          <Link href="#home" className="block py-2 px-4 text-gray-50 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Início</Link>
          <Link href="#about" className="block py-2 px-4 text-gray-50 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Sobre</Link>
          <Link href="#stack" className="block py-2 px-4 text-gray-50 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Tecnologias</Link>
          <Link href="#projects" className="block py-2 px-4 text-gray-50 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Projetos</Link>
          <Link href="#contact" className="block py-2 px-4 text-gray-50 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Contato</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
