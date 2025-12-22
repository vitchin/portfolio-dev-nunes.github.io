"use client";

import React from 'react';
import Image from 'next/image';

const Projects = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading">Projects</h2>
          <hr className="my-4" />
        </div>
      </div>
      <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <Image
                    src="/project-placeholder.svg"
                    alt="Project Placeholder"
                    width={350}
                    height={250}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Programming Project 1</h5>
                    <p className="card-text">
                      A brief description of the programming project.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <Image
                    src="/project-placeholder.svg"
                    alt="Project Placeholder"
                    width={350}
                    height={250}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Data Project 1</h5>
                    <p className="card-text">
                      A brief description of the data project.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <Image
                    src="/project-placeholder.svg"
                    alt="Project Placeholder"
                    width={350}
                    height={250}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Programming Project 2</h5>
                    <p className="card-text">
                      A brief description of the programming project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Add more carousel-item for more projects */}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#projectCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#projectCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Projects;
