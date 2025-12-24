import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-8">
          <Image
            src="/DevNunes - logo.png"
            alt="Logo Placeholder"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-64 h-64 relative">
            <Image
              src="/perfilFoto.png"
              alt="Profile Placeholder"
              width={250}
              height={250}
              className="rounded-full"
            />
          </div>
          <div className="md:text-left">
            <h1 className="text-4xl font-bold text-green-400">VICTOR RICARDO OLIVEIRA NUNES</h1>
            <p className="mt-4 text-lg text-gray-400">
              Desenvolvedor Web Full Stack
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
