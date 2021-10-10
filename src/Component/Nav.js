import "../css/comp-nav.css";
import React from 'react';
import houseIcon from '../imgs/house.png';
import aboutIcon from '../imgs/man.png';
import contactIcon from '../imgs/email.png';

const Nav = ({mobileNavFlag}) => {

  if(mobileNavFlag === true){
    return(
      <nav>
        <ul className="nav-list-mobile">
          <li className="nav-item">
            <a href="#main-section">
              <img
                src={houseIcon}
                alt="home icon png"
                className="nav-icon"
                />
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#cv-section">
              <img
                src={aboutIcon}
                alt="home icon png"
                className="nav-icon"
                />
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact-section">
              <img
                src={contactIcon}
                alt="home icon png"
                className="nav-icon"
                />
              Contact
            </a>
          </li>
        </ul>
      </nav>
    )
  }else{
    return (
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#main-section">
              <img
                src={houseIcon}
                alt="home icon png"
                className="nav-icon"
                />
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#cv-section">
              <img
                src={aboutIcon}
                alt="home icon png"
                className="nav-icon"
                />
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact-section">
              <img
                src={contactIcon}
                alt="home icon png"
                className="nav-icon"
                />
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Nav;
