import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center">
      <h2 className="text-4xl font-bold mb-6">Contato</h2>
      <p className="text-lg text-gray-300 mb-8 max-w-2xl px-4">
        Estou disponível para novos projetos e colaborações. Sinta-se à vontade para entrar em contato.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <a href="mailto:victoroliv2004@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
          <i className="fas fa-envelope fa-2x"></i>
          <span className="text-lg">victoroliv2004@gmail.com</span>
        </a>
        <a href="https://www.linkedin.com/in/victornunesdev/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
          <i className="fab fa-linkedin fa-2x"></i>
          <span className="text-lg">linkedin.com/in/victornunesdev</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
