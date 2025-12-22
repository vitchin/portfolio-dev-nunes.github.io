"use client";

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <Link href="/" className="navbar-brand">Your Name</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="#home" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="#about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link href="#projects" className="nav-link">Projects</Link>
            </li>
            <li className="nav-item">
              <Link href="#contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
