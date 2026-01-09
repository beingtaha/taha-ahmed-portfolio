import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "React.js", level: 85 },
    { name: "JavaScript (ES6)", level: 80 },
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "Front-End Development", level: 85 },
    { name: "Git", level: 75 },
    { name: "ERP Systems (Odoo)", level: 70 },
    { name: "MS Office", level: 85 },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-other">
          <h3>Other Interests</h3>
          <div className="interests-list">
            <span className="interest-tag">React Developer</span>
            <span className="interest-tag">Web Developer</span>
            <span className="interest-tag">Frontend Developer</span>
            <span className="interest-tag">User Interface Designer</span>
            <span className="interest-tag">Javascript Developer</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
