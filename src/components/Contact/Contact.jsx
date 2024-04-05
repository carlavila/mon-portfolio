import React from "react";
import "./contact.css";
import { TiArrowRight } from "react-icons/ti";
import mail from "../../media/mail.png";
import linkedin from "../../media/linkedin.png";
import github from "../../media/github.png";

const Contact = () => {

  const handleEmailClick = () => {
    window.location.href = "mailto:vila.carla@yahoo.fr";
  };

  const handleLinkedinClick = () => {
    window.location.href = "https://www.linkedin.com/in/vilacarla/";
  };

  const handleGitHubClick = () => {
    window.location.href = "https://github.com/carlavila";
  };
 
  return (
    <div className="contact">
      <div className="bloc-titles">
        <h2 className="h2 h2-contact">Contactez moi</h2>
        <p className="p-contact-title">Get in touch</p>
      </div>

      <div className="bloc-contact">
        <div className="item-contact">
          <img src={mail} alt={mail} className="img-contact" />
          <h3 className="title-contact">Email</h3>
          <a
            href="#"
            onClick={handleEmailClick}
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Un email par ici <TiArrowRight className="icon-arrow" />
          </a>
        </div>

        <div className="item-contact">
          <img src={linkedin} alt={linkedin} className="img-contact" />
          <h3 className="title-contact">Linkedin</h3>
          <a
            href="#"
            onClick={handleLinkedinClick}
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ou un message par là <TiArrowRight className="icon-arrow" />
          </a>
        </div>
        <div className="item-contact">
          <img src={github} alt={github} className="img-contact" />
          <h3 className="title-contact">GitHub</h3>
          <a
            href="#"
            onClick={handleGitHubClick}
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mes projets <TiArrowRight className="icon-arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contact;
