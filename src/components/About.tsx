import React from 'react';

const About: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">Sobre Mim</h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          Desenvolvedor web com experiência na criação e manutenção de sistemas Web, do backend ao frontend. Trabalho com PHP e JavaScript, com foco em performance, segurança e manutenibilidade. Especializado em Ciência de Dados, utilizo ferramentas como Python, Excel, e Power BI para análise de dados, estruturação de informações e apoio a decisões de negócio.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-[#1a202c] p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Desenvolvimento Web</h3>
            <p className="text-gray-400">
              PHP · JavaScript · MySQL · Laravel · Next.js · Flask · MongoDB · PostgreSQL · Firebase · Supabase
            </p>
          </div>
          <div className="bg-[#1a202c] p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Análise de Dados</h3>
            <p className="text-gray-400">
              Python · SQL · Excel · Power BI · R · Machine Learning · Estatística · Visualização de Dados
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
