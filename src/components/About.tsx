import React from 'react';

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <h2 className="section-heading">About Me</h2>
          <hr className="my-4" />
          <p className="text-muted mb-4">
            [A brief paragraph about yourself. Your background, your passion for coding, etc.]
          </p>
          <h3>My Specializations</h3>
          <p className="text-muted">[Your specializations, e.g., Frontend Development, Backend Development, Data Science, etc.]</p>
          <h3>My Tech Stack</h3>
          <p className="text-muted">[List of technologies you work with, e.g., React, Next.js, Node.js, Python, etc.]</p>
        </div>
      </div>
    </div>
  );
};

export default About;
