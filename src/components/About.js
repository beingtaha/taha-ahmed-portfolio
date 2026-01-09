import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <h3>React JS Developer | Frontend Developer | JavaScript</h3>

            <p>
              React JS Developer with hands-on experience in building responsive
              and interactive front-end applications using React, JavaScript
              (ES6), HTML, and CSS. Skilled in functional components, hooks
              (useState), form handling, conditional rendering, and dynamic list
              management.
            </p>

            <p>
              Currently working on real-world React projects and available for
              remote frontend opportunities.
            </p>

            <div className="about-info">
              <div className="info-item">
                <strong>Email:</strong> tahaahmed434@gmail.com
              </div>
              <div className="info-item">
                <strong>Phone:</strong> +92 316-2020727
              </div>
              <div className="info-item">
                <strong>Location:</strong> Karachi, Pakistan
              </div>
              <div className="info-item">
                <strong>LinkedIn:</strong>
                <a
                  href="https://linkedin.com/in/tahaahmed-402822152"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/tahaahmed-402822152
                </a>
              </div>
            </div>

            <div className="about-buttons">
              <a
                href="https://github.com/beingtaha"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                GitHub Profile
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
          </div>
          <div className="about-image">
            <div className="photo-frame">
              <img
                src="/images/taha.jpg"
                alt="Taha Ahmed"
                className="profile-photo-rect"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<div class="initials-fallback"><span>TA</span></div>';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
