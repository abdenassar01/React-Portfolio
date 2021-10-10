import Nav from "./Nav";
import "../css/comp-header.css";
import houseIcon from '../imgs/house.png';
import mobileNav from '../imgs/mobileNav.png'
import React, {useState} from 'react';

const Header = () => {

  const [mobileNavFlag, setMobileNavFlag] = useState(false);

  const toggleNav = () =>{
    if (mobileNavFlag) {
      setMobileNavFlag(false);
    }else{
      setMobileNavFlag(true);
    }
  }
  return (
    <div className={mobileNavFlag ? "header header-mobile" : "header"}>
      <a href="#main-section" id="logo">
        <img src={houseIcon} className='home-icon' alt='abdenassar amimi'/>
      </a>
      <Nav mobileNavFlag={mobileNavFlag}/>
        <img src={mobileNav} className='mobile-nav-icon' onClick={toggleNav} alt='abdenassar amimi'/>
    </div>
  );
};

export default Header;
