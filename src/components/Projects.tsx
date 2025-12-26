"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const projects = [
  {
    type: 'Programming',
    title: 'PyClass',
    description: 'A brief description of the programming project.',
    image: './project-placeholder.svg',
  },
  {
    type: 'Programming',
    title: 'IEBI Membresia',
    description: 'A brief description of the programming project.',
    image: './project-placeholder.svg',
  },
  {
    type: 'Programming',
    title: 'AskServiços',
    description: 'Another programming project.',
    image: './project-placeholder.svg',
  },
  {
    type: 'Programming',
    title: 'Gerador QRCode (FGH)',
    description: 'Another programming project.',
    image: './project-placeholder.svg',
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1440) {
        setProjectsPerPage(4);
      } else if (window.innerWidth >= 1024) {
        setProjectsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setProjectsPerPage(2);
      } else {
        setProjectsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

    // Cálculos derivados (sem setState em effect)
    const totalPages = Math.max(
      1,
      Math.ceil(projects.length / projectsPerPage)
    );

    const safeCurrentIndex =
      currentIndex >= totalPages ? 0 : currentIndex;

    const startIndex = safeCurrentIndex * projectsPerPage;
    const visibleProjects = projects.slice(
      startIndex,
      startIndex + projectsPerPage
    );

    const goToPrevious = () => {
      setCurrentIndex(prev =>
        prev === 0 ? totalPages - 1 : prev - 1
      );
    };

    const goToNext = () => {
      setCurrentIndex(prev =>
        prev === totalPages - 1 ? 0 : prev + 1
      );
    };

  return (
    <div className="container h-[400px] mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Projetos</h2>
      <hr className="w-16 h-1 mx-auto my-6 bg-gray-300 border-0 rounded" />
      <div className="relative">
        <div
          className="grid gap-8"
          style={{ gridTemplateColumns: `repeat(${projectsPerPage}, 1fr)` }}
        >
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
