import "../css/comp-nav.css";
import React from 'react'

const Nav = ({mobileNavFlag}) => {

  if(mobileNavFlag === true){
    return(
      <nav>
        <ul className="nav-list-mobile">
          <li className="nav-item">
            <a href="#main-section">Home</a>
          </li>
          <li className="nav-item">
            <a href="#cv-section">About</a>
          </li>
          <li className="nav-item">
            <a href="#contact-section">Contact</a>
          </li>
        </ul>
      </nav>
    )
  }else{
    return (
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#main-section">Home</a>
          </li>
          <li className="nav-item">
            <a href="#cv-section">About</a>
          </li>
          <li className="nav-item">
            <a href="#contact-section">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Nav;
