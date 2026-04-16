import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const myProjects = [
    {
      id: 1,
      title: "School Management System",
      description: "O'qituvchilar, talabalar va ma'murlar uchun rollarga asoslangan boshqaruv tizimi. Davomat va baholash funksiyalari mavjud.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/abdurahmon-2204/school-system",
      demo: "https://demo-link.com"
    },
    {
      id: 2,
      title: "Cosmetic E-commerce",
      description: "Kosmetika mahsulotlari uchun backend tizimi. Render platformasiga deploy qilingan, Firebase va Multer integratsiyasi bilan.",
      tech: ["Node.js", "Firebase", "Express", "Render"],
      github: "https://github.com/abdurahmon-2204/cosmetic-backend",
      demo: "#"
    },
    {
      id: 3,
      title: "Bookshop API Server",
      description: "Kitoblar katalogini boshqarish uchun mo'ljallangan API. Ma'lumotlarni qo'shish, o'chirish va tahrirlash imkoniyati.",
      tech: ["Node.js", "MongoDB", "Mongoose"],
      github: "https://github.com/abdurahmon-2204/bookshop-api",
      demo: "#"
    }
  ];

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>My <span>Projects</span></h1>
        <p>Mening eng sara ishlarim va texnik yechimlarim</p>
      </div>

      <div className="projects-grid">
        {myProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-icon-box">
              <FaCode className="main-icon" />
            </div>
            
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((t, index) => (
                  <span key={index}>{t}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub /> GitHub
                </a>
                {project.demo !== "#" && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;