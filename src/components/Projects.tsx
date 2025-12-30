import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'IEBIMembresia',
    description: 'Sistema CRUD de controle de membros/congregados de uma igreja local.',
    languages: 'Next.js · Typescript · Firebase · TailwindCSS',
    image: '/Iebimembresia.png',
  },
  {
    title: 'FGH QRCode',
    description: 'Sistema de geração de QRCode para equipe de manutenção predial do Hospital Miguel Arraes.',
    languages: 'HTML · CSS · JavaScript · TailwindCSS',
    image: '/fghqrcode.png',
  },
  {
    title: 'PyClass',
    description: 'Uma plataforma para gerenciamento de aulas e alunos.',
    languages: 'Python · Flask · SQLite',
    image: '/project-placeholder.svg',
  },
  {
    title: 'AskServiços',
    description: 'Aplicação para conectar prestadores de serviço a clientes.',
    languages: 'PHP · Laravel · MySQL',
    image: '/project-placeholder.svg',
  },
];

const Projects: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-12">Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 max-w-5xl">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#1a202c] rounded-lg shadow-lg overflow-hidden">
            <Image src={project.image} alt={project.title} width={400} height={250} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <p className="text-sm text-blue-400">{project.languages}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
