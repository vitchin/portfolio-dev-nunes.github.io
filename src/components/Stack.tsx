"use client";

import React from 'react';

const Stack = () => {
  return (
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Tecnologias</h2>
      <hr className="w-16 h-1 mx-auto my-6 bg-gray-300 border-0 rounded" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">Linguagens</h3>
          <p className="text-gray-600">PHP · JavaScript · Python · SQL</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Frameworks</h3>
          <p className="text-gray-600">Laravel · Next.js · Flask</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Bancos de Dados</h3>
          <p className="text-gray-600">MySQL · MongoDB · PostgreSQL · Firebase · Supabase</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Dados & Análise</h3>
          <p className="text-gray-600">Excel · Power BI · R · Machine Learning · Estatística</p>
        </div>
      </div>
    </div>
  );
};

export default Stack;
