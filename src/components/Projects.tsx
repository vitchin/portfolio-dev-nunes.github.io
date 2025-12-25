"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    type: 'Programming',
    title: 'PyClass',
    description: 'A brief description of the programming project.',
    image: '/project-placeholder.svg',
  },
  {
    type: 'Programming',
    title: 'IEBI Membresia',
    description: 'A brief description of the programming project.',
    image: '/project-placeholder.svg',
  },
  {
    type: 'Programming',
    title: 'Mikrotik-SDWAN',
    description: 'Another programming project.',
    image: '/project-placeholder.svg',
  },
  {
    type: 'Programming',
    title: 'AskServiços',
    description: 'Another programming project.',
    image: '/project-placeholder.svg',
  },
  {
    type: 'Programming',
    title: 'Gerador QRCode (FGH)',
    description: 'Another programming project.',
    image: '/project-placeholder.svg',
  },
  {
    type: 'Programming',
    title: 'OdontoRAIZ',
    description: 'Another programming project.',
    image: '/project-placeholder.svg',
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const goToPrevious = () => {
    const isFirstPage = currentIndex === 0;
    const newIndex = isFirstPage ? totalPages - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastPage = currentIndex === totalPages - 1;
    const newIndex = isLastPage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const startIndex = currentIndex * projectsPerPage;
  const visibleProjects = projects.slice(startIndex, startIndex + projectsPerPage);

  return (
    <div className="container h-[400px] mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Projetos</h2>
      <hr className="w-16 h-1 mx-auto my-6 bg-gray-300 border-0 rounded" />
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={350}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h5 className="text-xl font-bold mb-2">{project.title}</h5>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Projects;
