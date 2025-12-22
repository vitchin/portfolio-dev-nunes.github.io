import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="container" style={{ paddingTop: '80px' }}>
      <div className="row justify-content-center text-center mb-4">
        <div className="col-md-12">
          <Image
            src="/logo-placeholder.svg"
            alt="Logo Placeholder"
            width={100}
            height={100}
            className="img-fluid rounded-circle"
          />
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-4 text-center">
          <Image
            src="/profile-placeholder.svg"
            alt="Profile Placeholder"
            width={250}
            height={250}
            className="img-fluid rounded-circle"
          />
        </div>
        <div className="col-md-8">
          <h1>Hello, I'm [Your Name]</h1>
          <p className="lead">
            [Your professional summary here. Briefly introduce yourself and your expertise.]
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
