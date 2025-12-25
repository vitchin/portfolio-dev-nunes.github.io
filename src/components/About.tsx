"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const About = () => {
  const [showProfessionalInfo, setShowProfessionalInfo] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const personalInfoRef = useRef<HTMLDivElement>(null);
  const professionalInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setContainerHeight = () => {
      if (containerRef.current && personalInfoRef.current && professionalInfoRef.current) {
        const newHeight = showProfessionalInfo
          ? professionalInfoRef.current.scrollHeight
          : personalInfoRef.current.scrollHeight;
        containerRef.current.style.height = `${newHeight}px`;
      }
    };

    setContainerHeight();
    // Re-calculate on window resize for better responsiveness
    window.addEventListener('resize', setContainerHeight);
    return () => window.removeEventListener('resize', setContainerHeight);
  }, [showProfessionalInfo]);

  return (
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Sobre mim</h2>
      <hr className="w-16 h-1 mx-auto my-6 bg-gray-300 border-0 rounded" />

      {/* Animated content container */}
      <div
        ref={containerRef}
        className="relative max-w-3xl mx-auto overflow-hidden transition-all duration-500 ease-in-out"
        style={{ height: 'auto' }} // Initial height
      >
        {/* Personal Info View */}
        <div
          ref={personalInfoRef}
          className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
            showProfessionalInfo ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'
          }`}
        >
          <p className="text-gray-600 mb-8">
            Desenvolvedor web com experiência em aplicações em produção, atuando do backend ao frontend. Domínio em PHP, JavaScript, TypeScript, Laravel, Next.js e bancos de dados relacionais e NoSQL. Foco em código limpo, performance e soluções alinhadas ao cliente.
          </p>
          <h3 className="text-2xl font-bold mb-4">Formação</h3>
          <p className="text-gray-600 mb-8">
            Técnico em Desenvolvimento de Sistemas, graduado em Análise e Desenvolvimento de Sistemas e pós-graduado em Ciência de Dados e Big Data Analytics.
          </p>
          <h3 className="text-2xl font-bold mb-4">Minha Stack</h3>
          <p className="text-gray-600">
            PHP | JavaScript | TypeScript | Laravel | Next.js | MySQL | MongoDB | PostgreSQL | Firebase | Supabase | RESTful APIs
          </p>
        </div>

        {/* Professional Info View */}
        <div
          ref={professionalInfoRef}
          className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
            showProfessionalInfo ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <h3 className="text-2xl font-bold mb-4">Linguagens de Programação</h3>
          <p className="text-gray-600 mb-8">
            PHP | JavaScript | TypeScript
          </p>

          <h3 className="text-2xl font-bold mb-4">Stack e Ferramentas</h3>
          <p className="text-gray-600 mb-8">
            Laravel | Next.js | React | Node.js | MySQL | MongoDB | PostgreSQL | Firebase | Supabase | Docker | Git
          </p>

          <h3 className="text-2xl font-bold mb-4">Experiência Profissional</h3>
          <p className="text-gray-600">
            Mais de 5 anos de experiência no desenvolvimento de aplicações web robustas, escaláveis e de alta performance, atuando em projetos para diversos setores e portes de empresa.
          </p>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setShowProfessionalInfo(!showProfessionalInfo)}
        className="mt-8 text-gray-600 hover:text-gray-900 transition-colors duration-300 focus:outline-none"
        aria-label="Alternar visualização de informações"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={showProfessionalInfo ? "M10 19l-7-7m0 0l7-7m-7 7h18" : "M14 5l7 7m0 0l-7 7m7-7H3"}
          />
        </svg>
      </button>
    </div>
  );
};

export default About;
