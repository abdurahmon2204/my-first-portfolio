import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Error.css'; // CSS faylni import qilamiz

const ErrorPage = () => {
    // 3D effekt kuchini belgilash (qanchalik katta bo'lsa, harakat shuncha kuchli)
    const sensitivity = 20; 
    
    // Raqam elementi uchun reference
    const errorCodeRef = useRef(null);

    const [style, setStyle] = useState({});

    // Sichqoncha harakatini kuzatish funksiyasi
    const handleMouseMove = (e) => {
        if (!errorCodeRef.current) return;

        // Elementning ekrandagi o'rnini olish
        const rect = errorCodeRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Sichqonchaning element markaziga nisbatan o'rni
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        // Aylanish burchaklarini hisoblash
        const rotateX = (-mouseY / centerY) * sensitivity;
        const rotateY = (mouseX / centerX) * sensitivity;

        // 3D transformatsiya va dinamik soya uslubini yaratish
        setStyle({
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            textShadow: `
                ${-rotateY}px ${rotateX}px 0px rgba(0, 210, 255, 0.3),
                ${-rotateY * 2}px ${rotateX * 2}px 0px rgba(0, 210, 255, 0.2),
                ${-rotateY * 3}px ${rotateX * 3}px 0px rgba(0, 210, 255, 0.1)
            `
        });
    };

    // Sichqoncha chiqib ketganda 3D effektni tiklash
    const handleMouseLeave = () => {
        setStyle({
            transform: 'rotateX(0deg) rotateY(0deg)',
            transition: 'transform 0.5s ease-out, text-shadow 0.5s ease-out' // Silliq qaytish
        });
    };

    return (
        <div className="error-container" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            {/* Orqa fondagi suzuvchi aylanalar */}
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>

            <div className="error-content">
                <div className="error-code-wrapper">
                    <h1 
                        className="error-code" 
                        ref={errorCodeRef}
                        style={style} // JS orqali boshqariladigan uslub
                    >
                        404
                    </h1>
                </div>
                
                <div className="error-message">
                    <h2>Voy! Sahifa topilmadi.</h2>
                    <p>
                        Siz izlayotgan sahifa mavjud emas yoki boshqa manzilga ko'chirilgan bo'lishi mumkin.
                    </p>
                    <Link to="/" className="back-home-btn">
                        Bosh sahifaga qaytish
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;