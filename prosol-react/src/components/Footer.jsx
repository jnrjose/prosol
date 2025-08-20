import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">PROSOL</h3>
            <p className="footer-description">Your trusted partner for comprehensive business solutions and integrated services.</p>
            <div className="footer-social">
              <a href="#" className="social-link"><i className="bi bi-facebook"></i></a>
              <a href="#" className="social-link"><i className="bi bi-twitter"></i></a>
              <a href="#" className="social-link"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="social-link"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#consulting">Business Consulting</a></li>
              <li><a href="#technology">Technology Solutions</a></li>
              <li><a href="#marketing">Digital Marketing</a></li>
              <li><a href="#support">Support Services</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <div className="footer-contact">
              <p><i className="bi bi-envelope"></i> info@prosol.com</p>
              <p><i className="bi bi-telephone"></i> +1 (555) 123-4567</p>
              <p><i className="bi bi-geo-alt"></i> 123 Business Ave, City, State 12345</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} PROSOL Integrated Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
