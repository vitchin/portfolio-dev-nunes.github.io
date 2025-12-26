"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const personalInfoRef = useRef<HTMLDivElement>(null);
  const professionalInfoRef = useRef<HTMLDivElement>(null);
  const additionalInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slideRefs = [personalInfoRef, professionalInfoRef, additionalInfoRef];
    const setContainerHeight = () => {
      if (containerRef.current && slideRefs[currentSlide]?.current) {
        const newHeight = slideRefs[currentSlide].current.scrollHeight;
        containerRef.current.style.height = `${newHeight}px`;
      }
    };

    setContainerHeight();
    // Re-calculate on window resize for better responsiveness
    window.addEventListener('resize', setContainerHeight);
    return () => window.removeEventListener('resize', setContainerHeight);
  }, [currentSlide]);

  const handleToggle = () => {
    if (hasReachedEnd) {
      // Go backwards
      if (currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
        if (currentSlide - 1 === 0) {
          setHasReachedEnd(false);
        }
      }
    } else {
      // Go forwards
      if (currentSlide < 2) {
        setCurrentSlide(currentSlide + 1);
        if (currentSlide + 1 === 2) {
          setHasReachedEnd(true);
        }
      }
    }
  };

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
            currentSlide === 0 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transform: `translateX(${(0 - currentSlide) * 100}%)` }}
        >
          <p className="text-gray-600 mb-8">
            Desenvolvedor web com experiência em aplicações em produção, atuando do backend ao frontend. Domínio em PHP, JavaScript, TypeScript, Laravel, Next.js e bancos de dados relacionais e NoSQL. Foco em código limpo, performance e soluções alinhadas ao cliente.
          </p>
          <h3 className="text-2xl font-bold mb-4">Linguagens</h3>
          <p className="text-gray-600  mb-8">
            PHP | JavaScript | TypeScript | Python | SQL
          </p>
          <h3 className="text-2xl font-bold mb-4">Frameworks</h3>
          <p className="text-gray-600 mb-8">
            Laravel | Next.js | MySQL | MongoDB | PostgreSQL | Firebase | Supabase | Docker | Git
          </p>
        </div>

        {/* Professional Info View */}
        <div
          ref={professionalInfoRef}
          className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
            currentSlide === 1 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transform: `translateX(${(1 - currentSlide) * 100}%)` }}
        >
          <h3 className="text-2xl font-bold mb-4">Formação</h3>
              <p className="text-gray-600 mb-8">
                Pós-graduação em Ciência de Dados e Big Data Analytics (Estácio, em andamento - previsão dezembro/2025). 
                <br />
                Graduação em Análise e Desenvolvimento de Sistemas (Estácio, julho/2024). 
                <br />
                Técnico em Desenvolvimento de Sistemas (ETE Adv. José David Gil Rodrigues, julho/2023).
              </p>            

          <h3 className="text-2xl font-bold mb-4">Experiência Profissional</h3>
          <p className="text-gray-600">
            Recife Tecnologia – Desenvolvedor Web Suporte / Atual – desde Janeiro de 2024
            Desenvolvimento e manutenção de plataforma web com PHP e JavaScript.
            Uso do Laravel para rotas, controllers e banco de dados.
            Integração de APIs RESTful e uso de Git para versionamento.
            Correção de bugs, suporte técnico e atualização de versões em produção..
            Reuniões para ajustes e uso do Trello para gerenciamento de tarefas.
            Implementação do design conforme padrões de usabilidade.

            Tecnologias: PHP, Laravel, Javascript, Git, API’s RESTful
          </p>
        </div>

        {/* Additional Info View */}
        <div
          ref={additionalInfoRef}
          className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
            currentSlide === 2 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transform: `translateX(${(2 - currentSlide) * 100}%)` }}
        >
          <h3 className="text-2xl font-bold mb-4">Informações Adicionais</h3>
          <p className="text-gray-600">
            Aqui você pode adicionar mais informações sobre seus hobbies, interesses ou qualquer outra coisa que queira compartilhar.
          </p>
        </div>
  </div>

  {/* Toggle Button */}
      <button
        onClick={handleToggle}
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
            d={hasReachedEnd ? "M10 19l-7-7m0 0l7-7m-7 7h18" : "M14 5l7 7m0 0l-7 7m7-7H3"}
          />
        </svg>
      </button>
    </div>
  );
};

export default About;
