import React from 'react';
import { FaGithub, FaTelegramPlane, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>System Override</h3>
          <p>My first professional portfolio</p>
        </div>

        <div className="footer-socials">
          <h4>Bog'lanish uchun:</h4>
          <div className="social-links">
            <a 
              href="https://github.com/abdurahmon-2204" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-item"
            >
              <FaGithub className="icon" />
              <span>GitHub </span>
            </a>

            <a 
              href="https://t.me/abdurahmon_9506" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-item"
            >
              <FaTelegramPlane className="icon" />
              <span>Telegram </span>
            </a>

            <a 
              href="https://instagram.com/abdurahmon_9506" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-item"
            >
              <FaInstagram className="icon" />
              <span>Instagram </span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Abdurahmon. Barcha huquqlar himoyalangan.</p>
      </div>
    </footer>
  );
};

export default Footer;