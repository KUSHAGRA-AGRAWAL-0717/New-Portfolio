import React, { useState } from 'react';
import "./footer.css";

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer 
      className={`footer ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="footer-content">
        <p className="footerText">Thank you for visiting! Feel free to connect with me.</p>
        <div className="social-icons">
          <span className="icon">📱</span>
          <span className="icon">📧</span>
          <span className="icon">💼</span>
        </div>
      </div>
      <div className="footer-particles">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="particle"></div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;