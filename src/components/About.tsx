import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Sobre mim</h2>
      <hr className="w-16 h-1 mx-auto my-6 bg-gray-300 border-0 rounded" />
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-600 mb-8">
          Desenvolvedor web com experiência no desenvolvimento e manutenção de aplicações em produção. Domínio em PHP, JavaScript e Typescript, trabalhando com frameworks como Laravel e Next.js, e possuo conhecimento em MySQL, MongoDB, postgresSQL e APIs RESTful. Como desenvolvedor criei aplicações que estão em produção de fato, atuo da arquitetura aos ajustes finais, entregando código limpo, performance e soluções estáveis alinhadas às necessidades do cliente.
        </p>
        <h3 className="text-2xl font-bold mb-4">Formação</h3>
        <p className="text-gray-600 mb-8">
          Técnico em Desenvolvimento de Sistemas, graduado em Análise e Desenvolvimento de Sistemas e pós-graduado em Ciência de Dados e Big Data Analytics.
          </p>
        <h3 className="text-2xl font-bold mb-4">Minha Stack</h3>
        <p className="text-gray-600">
          PHP | JavaScript | TypeScript | Laravel | Next.js | MySQL | MongoDB | PostgreSQL | Firebase | Supabase | RESTful APIs</p>
      </div>
    </div>
  );
};

export default About;
