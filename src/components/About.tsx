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
    
    // Use ResizeObserver to monitor changes in the current slide element
    const resizeObserver = new ResizeObserver(() => {
      setContainerHeight();
    });
    
    if (slideRefs[currentSlide]?.current) {
      resizeObserver.observe(slideRefs[currentSlide].current!);
    }
    
    return () => {
      window.removeEventListener('resize', setContainerHeight);
      resizeObserver.disconnect();
    };
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
        className="relative max-w-3xl h-fit mx-auto overflow-hidden transition-all duration-500 ease-in-out"
        style={{ height: 'auto' }} // Initial height
      >
        {/* Personal Info View */}
        <div
          ref={personalInfoRef}
          className={`absolute top-0 left-0 w-full h-fit transition-all duration-500 ease-in-out ${
            currentSlide === 0 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transform: `translateX(${(0 - currentSlide) * 100}%)` }}
        >
          <p className="text-gray-600 mb-8">
            Desenvolvedor web com experiência na criação e manutenção de sistemas Web, do backend ao frontend. Trabalho com PHP e JavaScript, com foco em performance, segurança e manutenibilidade.
            Especializado em Ciência de Dados consigo utilizar ferramentas como Python, Excel, Power BI, R, entre outros, para análise e mensuração de dados, estruturar informações, gerar métricas e apoiar decisões técnicas e de negócio.
          </p>
          <div className="space-y-0 mb-8"> 
            <details className="group border border-gray-300 rounded-t-lg overflow-hidden">
              <summary className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors duration-200">
                <span className="font-semibold text-gray-700">Desenvolvimento Web</span>
                <svg className="w-5 h-5 text-gray-600 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <p className="text-gray-600 p-4 bg-white border-t border-gray-300">
                PHP · JavaScript · MySQL · Laravel · Next.js · Flask · MongoDB · PostgreSQL · Firebase · Supabase
              </p>
            </details>
            <details className="group border border-gray-300 rounded-b-lg overflow-hidden">
              <summary className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors duration-200">
                <span className="font-semibold text-gray-700">Análise de Dados</span>
                <svg className="w-5 h-5 text-gray-600 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <p className="text-gray-600 p-4 bg-white border-t border-gray-300">
                Python · SQL · Excel · Power BI · R · Machine Learning · Estatística · Visualização de Dados
              </p>
            </details>
          </div>
          <div className="space-y-0 mb-8">
            <details className="group border border-gray-300 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors duration-200">
                <span className="font-semibold text-gray-700">Idiomas</span>
                <svg className="w-5 h-5 text-gray-600 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M 19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <p className="text-gray-600 p-4 bg-white border-t border-gray-300">
                Inglês Intermediário( C1 ): Leitura, Escrita e Conversação
              </p>
            </details>
          </div>
        </div>

        {/* Professional Info View */}
        <div
          ref={professionalInfoRef}
          className={`absolute top-0 left-0 w-full h-fit transition-all duration-500 ease-in-out ${
            currentSlide === 1 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transform: `translateX(${(1 - currentSlide) * 100}%)` }}
        >
          <h3 className="text-2xl font-bold mb-4">Formação</h3>
              <div className="space-y-0 mb-8">
                <details className="group border border-gray-300 rounded-t-lg overflow-hidden">
                  <summary className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors duration-200">
                    <span className="font-semibold text-gray-700">Pós-graduação</span>
                    <svg className="w-5 h-5 text-gray-600 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </summary>
                  <p className="text-gray-600 p-4 bg-white border-t border-gray-300">
                    Ciência de Dados e Big Data Analytics (Estácio, dezembro/2025)
                  </p>
                </details>

                <details className="group border border-gray-300 overflow-hidden">
                  <summary className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors duration-200">
                    <span className="font-semibold text-gray-700">Graduação</span>
                    <svg className="w-5 h-5 text-gray-600 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </summary>
                  <p className="text-gray-600 p-4 bg-white border-t border-gray-300">
                    Análise e Desenvolvimento de Sistemas (Estácio, julho/2024)
                  </p>
                </details>

                <details className="group border border-gray-300 rounded-b-lg overflow-hidden">
                  <summary className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors duration-200">
                    <span className="font-semibold text-gray-700">Técnico</span>
                    <svg className="w-5 h-5 text-gray-600 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </summary>
                  <p className="text-gray-600 p-4 bg-white border-t border-gray-300">
                    Desenvolvimento de Sistemas (ETE Adv. José David Gil Rodrigues, julho/2023)
                  </p>
                </details>
              </div>

        </div>


        {/* Additional Info View */}
        <div
          ref={additionalInfoRef}
          className={`absolute top-0 left-0 w-full h-fit transition-all duration-500 ease-in-out ${
            currentSlide === 2 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transform: `translateX(${(2 - currentSlide) * 100}%)` }}
        >
          <h3 className="text-2xl font-bold mb-4">Experiência Profissional</h3>
            <div className="space-y-0 mb-8">
              <details className="group border border-gray-300 rounded-t-lg overflow-hidden">
                <summary className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors duration-200 gap-4">
                  <span className="font-semibold text-gray-700 break-words text-left">Desenvolvedor Web</span>
                  <svg className="w-5 h-5 text-gray-600 group-open:rotate-180 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </summary>
                <p className="text-gray-600 p-4 bg-white border-t border-gray-300 text-left">
                  Recife Tecnologia — MikrotikSDWAN (janeiro/2024 - dezembro/2025)
                  <br /><br />
                  Minhas atividades consistiam em: 
                  <br /><br />
                  Desenvolvimento e manutenção de plataforma web com PHP e JavaScript;
                  Uso do Laravel para rotas, controllers e banco de dados;
                  Integração de APIs RESTful e uso de Git para versionamento;
                  Correção de bugs, suporte técnico e atualização de versões em produção;
                  Reuniões para ajustes e uso do Trello para gerenciamento de tarefas;
                  Implementação do design conforme padrões de usabilidade;
                  <br /><br />
                  Principais tecnologias: PHP, Laravel, Javascript, Git, API's RESTful
                </p>
              </details>
            </div>
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