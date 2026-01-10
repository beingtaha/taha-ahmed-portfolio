import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Login System",
      description:
        "A secure login system with authentication built using React.js and form handling.",
      tech: ["React", "JavaScript", "CSS", "Form Handling"],
      github: "https://github.com/beingtaha",
      live: "https://login-system-mu-lilac.vercel.app/login",
      image: "/images/projects/login.png",
    },
    {
      title: "Islamic Guide Web",
      description:
        "An Islamic guidance web application with prayer times, Quran verses, and Islamic resources.",
      tech: ["React", "API Integration", "CSS", "JavaScript"],
      github: "https://github.com/beingtaha",
      live: "https://islamic-guide-web.vercel.app/",
      image: "/images/projects/islamic.png",
    },
    {
      title: "ShopEasy - E-commerce Website",
      description:
        "A full-featured e-commerce platform with product browsing, cart functionality, and secure checkout.",
      tech: ["React", "JavaScript", "CSS", "E-commerce", "State Management"],
      github: "https://github.com/beingtaha/ecommerce-website-react",
      live: "https://ecommerce-website-react-dusky.vercel.app/",
      image: "/images/projects/shopeasy.png",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Real-world React applications I've built
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay"></div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                  >
                    <i className="fas fa-code"></i> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn live-btn"
                  >
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="github-cta">
          <p>Explore more projects on my GitHub profile</p>
          <a
            href="https://github.com/beingtaha"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            <i className="fab fa-github"></i> View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
