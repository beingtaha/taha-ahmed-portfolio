import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Taha Ahmed</h1>
        <h2 className="hero-subtitle">React JS Developer</h2>
        <p className="hero-description">
          Building modern, responsive web applications with React.js
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-hero">
            View Projects
          </a>
          <a href="#contact" className="btn-hero btn-outline">
            Get In Touch
          </a>
        </div>

        <div className="hero-links">
          <a
            href="https://github.com/beingtaha"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/taha-ahmed-402822152"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://login-system-mu-lilac.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Project 1
          </a>
          <a
            href="https://islamic-guide-web.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Project 2
          </a>
          <a
            href="https://ecommerce-website-react-dusky.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Project 3
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
