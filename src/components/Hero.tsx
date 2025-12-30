import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white tracking-widest">
          VICTOR RICARDO
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-8">
          Desenvolvedor Web & Cientista de Dados
        </h2>
        <a
          href="https://wa.me/5581983790276"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 mt-4 px-8 py-3 font-bold rounded-full bg-blue-600 text-white transition duration-300 hover:bg-blue-700 shadow-lg"
        >
          Fale comigo no WhatsApp
          <i className="fab fa-whatsapp text-xl"></i>
        </a>
      </div>
    </div>
  );
};

export default Hero;
