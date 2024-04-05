import React from 'react';
import "./navigation.css"
import { FaHome } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { FaRegLightbulb } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { IoIosContact } from "react-icons/io";

const Navigation = ({ scrollTo, activeIcon }) => {
  const handleClick = (icon) => {
    scrollTo(icon); // Appel de la fonction scrollTo en passant l'icône
  }

  return (
    <div className="navbar">
      <div className={`link-nav ${activeIcon === 'presentation' ? 'active' : ''}`} onClick={() => handleClick('presentation')}>
        <FaHome className='icon-navbar'/>
      </div>
      <div className={`link-nav ${activeIcon === 'propos' ? 'active' : ''}`} onClick={() => handleClick('propos')}>
        <ImProfile className='icon-navbar'/>
      </div>
      <div className={`link-nav ${activeIcon === 'knowledges' ? 'active' : ''}`} onClick={() => handleClick('knowledges')}>
        <FaRegLightbulb className='icon-navbar'/>
      </div>
      <div className={`link-nav ${activeIcon === 'projects' ? 'active' : ''}`} onClick={() => handleClick('projects')}>
        <MdComputer className='icon-navbar'/>
      </div>
      <div className={`link-nav ${activeIcon === 'contact' ? 'active' : ''}`} onClick={() => handleClick('contact')}>
        <IoIosContact className='icon-navbar'/>
      </div>
    </div>
  );
};
 
export default Navigation;
