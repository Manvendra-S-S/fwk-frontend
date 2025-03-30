import React from "react";
import "../styles/Footer.css"; // Import CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Section */}
        <div className="footer-section">
          <h3 className="footer-title">COMPANY</h3>
          <p>T: +91 7838546176</p>
          <p>E: shopdumroo@gmail.com</p>
        </div>

        {/* Policies Section */}
        <div className="footer-section">
          <h3 className="footer-title">POLICIES</h3>
          <ul>
            <li><a href="#">Contact Information</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3 className="footer-title">FOLLOW US</h3>
          <div className="social-icons">
            <a href="#" className="icon facebook">F</a>
            <a href="#" className="icon instagram">I</a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>Copyright ©2024 <span className="brand">Dumroo</span>. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
