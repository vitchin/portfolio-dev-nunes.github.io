"use client";

import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'PyClass',
    description: 'Plataforma interativa para ensino de Python, com lições, exercícios e feedback em tempo real para um aprendizado dinâmico.',
    technologies: 'Flask · JavaScript · SQLAlchemy',
    image: './project-placeholder.svg',
  },
  {
    title: 'IEBIMembresia',
    description: 'Solução full-stack para gestão de membros de igreja, otimizando o controle de dados e a comunicação interna.',
    technologies: 'Next.js · Typescript · Firebase · TailwindCSS',
    image: './Iebimembresia.png',
  },
  {
    title: 'AskServiços',
    description: 'Marketplace que conecta clientes a profissionais locais, com perfis, avaliações e agendamento de serviços.',
    technologies: 'PHP · Laravel · MySQL',
    image: './project-placeholder.svg',
  },
  {
    title: 'FGH QRCode',
    description: 'Ferramenta que agiliza o acesso a manuais e ordens de serviço para equipes de manutenção através de QR Codes.',
    technologies: 'HTML · CSS · JavaScript · TailwindCSS',
    image: './fghqrcode.png',
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Projetos</h2>
      <hr className="w-16 h-1 mx-auto my-6 bg-gray-300 border-0 rounded" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="w-full h-48 relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h5 className="text-xl font-bold mb-2">{project.title}</h5>
              <p className="text-gray-700 flex-grow">{project.description}</p>
              <p className="text-sm text-gray-600 pt-4 font-medium">{project.technologies}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
