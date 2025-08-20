import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <h3 className="footer-logo">PROSOL</h3>
            <p className="footer-tagline">We grow brands, create experiences and solve business problems.</p>
          </div>
          <div className="footer-nav">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/services" className="footer-link">Services</Link>
            <Link to="/portfolio" className="footer-link">Portfolio</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>
          <div className="footer-social">
            <a href="#" className="social-link" aria-label="Facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} PROSOL Integrated Services. All rights reserved.</p>
          </div>
          <div className="footer-legal">
            <a href="#" className="legal-link">Privacy Policy</a>
            <a href="#" className="legal-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
