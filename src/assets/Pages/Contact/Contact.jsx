import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaTelegram, FaGithub, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    emailjs.init("ABZ8xK61QlyJhnSkh");
  }, []);

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_lojhil5', 
      'template_h1x2nma', 
      form.current
    )
    .then((result) => {
        console.log("Muvaffaqiyatli:", result.text);
        alert("Xabaringiz muvaffaqiyatli yuborildi! ✅");
        
        setFormData({
          user_name: '',
          user_email: '',
          message: ''
        });
    }, (error) => {
        console.error("Xatolik tafsiloti:", error);
        alert("Xatolik yuz berdi: " + (error.text || "Pochta xizmatida muammo"));
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <header className="contact-header">
          <h1>Get in <span>Touch</span></h1>
          <p>Loyiha takliflari yoki savollar uchun istalgan vaqtda yozishingiz mumkin.</p>
        </header>

        <div className="contact-wrapper">
          <div className="contact-details">
            <div className="detail-card">
              <FaEnvelope className="detail-icon" />
              <div className='detail-card-links'>
                <h4>Email</h4>
                <p>abdurahmonsobitjonov7@example.com</p>
              </div>
            </div>

            <div className="detail-card">
              <FaTelegram className="detail-icon" />
              <div className='detail-card-links'>
                <h4>Telegram</h4>
                <p>@abdurahmon_9506</p>
              </div>
            </div>

            <div className="detail-card">
              <FaMapMarkerAlt className="detail-icon" />
              <div className='detail-card-links'>
                <h4>Manzil</h4>
                <p>Chust, Namangan, O'zbekiston</p>
              </div>
            </div>

            <div className="social-links-row">
              <a href="https://github.com/abdurahmon-2204" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://t.me/abdurahmon_9506" target="_blank" rel="noreferrer"><FaTelegram /></a>
              <a href="https://instagram.com/abdurahmon_9506" target="_blank" rel="noreferrer"><FaInstagram /></a>
            </div>
          </div>

          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="input-group">
              <input 
                type="text" 
                name="user_name" 
                placeholder="Ismingiz" 
                value={formData.user_name}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="input-group">
              <input 
                type="email" 
                name="user_email" 
                placeholder="Email manzilingiz" 
                value={formData.user_email}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="input-group">
              <textarea 
                name="message" 
                placeholder="Xabaringizni bu yerga yozing..." 
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit-btn">
              Xabarni yuborish <FaPaperPlane className="plane-icon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;