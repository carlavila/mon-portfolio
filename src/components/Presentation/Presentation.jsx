import React from "react";
import profile from "../../media/profile.jpeg";
import "./presentation.css";
import { FaGithub } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";

const Presentation = () => {

  const handleEmailClick = () => {
    window.location.href = "mailto:vila.carla@yahoo.fr";
  };

  const handleGithubClick = () => {
	window.open("https://github.com/carlavila", "_blank");
      }; 
    
  return (
    <div className="presentation">
      <div className="presentation-title">
        <h1 className="h1 title-h1"> Carla Vila</h1>
        <h2 className="h2">Développeuse Front End</h2>
        <h3 className="h3">
          Développeuse junior de 26 ans, je suis passionnée par le développement
          web et l'UI/UX depuis 5 ans.
        </h3>
        <div className="bloc-button">
          <button className="contact-button" onClick={handleEmailClick}>
            <FiMessageCircle className="btn-icon" />
            Me contacter
          </button>
         <button className="github-button" onClick={handleGithubClick}>
            <FaGithub className="btn-icon" /> Mon Github
          </button>
        </div>
      </div>
      <div className="profile-image-container">
        <div className="profile-image-circle"></div>
        <div className="profile-image-circle-second"></div>
        <div className="profile-image">
          <img src={profile} alt="Profile" className="img-profile" />
        </div>
      </div>
    </div>
  );
};
export default Presentation;
