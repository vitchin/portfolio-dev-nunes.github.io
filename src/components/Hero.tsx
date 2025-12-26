"use client";

import React from 'react';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <div className="relative pt-24 md:pt-24 pb-32 min-h-[700px] flex flex-col items-center justify-center bg-[#0b1423] text-white shadow-sm overflow-hidden">
      {/* Background Logo */}
      <div className="absolute inset-0 flex justify-center items-center z-0 opacity-20 pointer-events-none select-none">
        <Image
          src="./DevNunes.png"
          alt="Logo Placeholder"
          width={1000}
          height={1000}
          className="rounded-full object-contain"
          style={{ maxWidth: '95vw', maxHeight: '95vh' }}
        />
      </div>
      {/* Main Content */}
      <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-center px-6 md:px-12 gap-8 md:gap-16 text-center md:text-left z-10">
        {/* Profile Image */}
        <div className="flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto">
          <div className="w-40 h-40 md:w-56 md:h-56 relative">
            <Image
              src="./Victor Perfil.png"
              alt="Profile Placeholder"
              fill
              className="rounded-full object-cover"
              sizes="(max-width: 768px) 160px, 224px"
              priority
            />
          </div>
        </div>
        {/* Text Content */}
        <div className="max-w-xl flex flex-col items-center md:items-start justify-center">
          <h1 className="mb-2 mt-5 md:mt-0 text-3xl md:text-4xl font-black text-[#acbfff] tracking-widest">
            <Typewriter
              words={['VICTOR RICARDO']}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={120}
            />
          </h1>
          <h2 className="mb-5 text-2xl font-semibold">Desenvolvedor Web & Cientista de Dados</h2>
          <p className="text-lg text-gray-400 mb-4">
            Desenvolvedor Web com mais de 1 ano de experiência em desenvolvimento, manutenção e suporte de sistemas web corporativos. Sólidos conhecimentos em PHP, JavaScript, Python e Java aplicados na construção, integração e melhoria contínua de plataformas web. Atualmente em pós-graduação em Ciência de Dados e Big Data Analytics, busco oportunidades que valorizem qualidade de código, performance e boas práticas de desenvolvimento.
            <br />
            <br />
            PHP | JavasScript | Python | MySQL | Laravel | Next.js 
          </p>
          <a href="#parameuzap" className="w-full md:w-auto flex justify-center md:justify-start">
            <button className="flex flex-row items-center justify-center gap-2 mt-2 px-8 py-3 font-bold rounded-full bg-[#e71919] text-white transition duration-300 animate-pulse cursor-pointer hover:bg-[#dd0808] shadow-lg hover:shadow-xl">
              Fale comigo pelo Whatsapp
              <i className="text-xl fa-brands fa-whatsapp"></i>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
