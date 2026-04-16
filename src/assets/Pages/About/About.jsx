import React from 'react';
import { FaCode, FaDatabase, FaMicrochip, FaCalculator } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About <span>Me</span></h1>
        <p className="lead-text">Analitik fikrlash va zamonaviy texnologiyalar tutashgan nuqtada.</p>
      </section>

      <div className="about-grid">
        <div className="about-card bio">
          <h3>Men kimman?</h3>
          <p >
            Salom! Mening ismim <b>Abdurahmon</b>. Men murakkab tizimlarni soddalashtirishni va 
            chiroyli interfeyslar yaratishni yaxshi ko'radigan Full-stack dasturchiman.
          </p>
          <p>
            Fizika va matematika bo'yicha akademik bilimlarim menga muammolarga algoritmlar 
            va mantiqiy qonuniyatlar prizmasi orqali qarash imkonini beradi. Har bir loyihamni 
            <b> "System Override" </b> prinsipi asosida — ya'ni standartlarni yaxshilashga intilgan holda yarataman.
          </p>
        </div>

        {/* 3. Yo'nalishlar (Skills) */}
        <div className="skills-grid">
          <div className="skill-box">
            <FaCode className="skill-icon" />
            <h4>Frontend</h4>
            <p>React, HTML, CSS, JavaScript</p>
          </div>
          <div className="skill-box">
            <FaDatabase className="skill-icon" />
            <h4>Backend</h4>
            <p>Node.js, Express, MongoDB, C#</p>
          </div>
          <div className="skill-box">
            <FaCalculator className="skill-icon" />
            <h4>Logic</h4>
            <p>Physics, Math, Algorithms</p>
          </div>
          <div className="skill-box">
            <FaMicrochip className="skill-icon" />
            <h4>Tools</h4>
            <p>Git, Firebase, Render</p>
          </div>
        </div>
      </div>

      {/* 4. Manifest bo'limi */}
      <section className="philosophy">
        <div className="philosophy-item">
          <h4>My Mission</h4>
          <p>Faqat ishlaydigan emas, balki foydalanuvchiga zavq beradigan yechimlar yaratish.</p>
        </div>
      </section>
    </div>
  );
};

export default About;