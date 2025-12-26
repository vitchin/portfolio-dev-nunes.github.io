"use client";

import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Sobre mim</h2>
      <hr className="w-16 h-1 mx-auto my-6 bg-gray-300 border-0 rounded" />
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-600 mb-8">
          Desenvolvedor web com experiência na criação e manutenção de sistemas robustos, atuando do backend ao frontend com foco em performance, segurança e código limpo.
          <br /><br />
          Com background em Ciência de Dados, utilizo Python, Power BI e SQL para extrair insights, estruturar informações e gerar métricas que apoiam decisões técnicas e de negócio, agregando valor além do desenvolvimento tradicional.
        </p>
      </div>
    </div>
  );
};

export default About;