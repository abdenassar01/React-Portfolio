import '../css/copm-footer.css'
import React from 'react'

const FooterNav = () => {
    return (
      <nav>
        <ul className="footer-nav-list">
          <li className="footer-nav-item">
            <a href="#main-section">Home</a>
          </li>
          <li className="footer-nav-item">
            <a href="#cv-section">About</a>
          </li>
          <li className="footer-nav-item">
            <a href="#contact-section">Contact</a>
          </li>
        </ul>
      </nav>
    );
};

export default FooterNav;
