import React, { useState } from "react";
import Copyright from '../components/Copyright';
import Navigation from '../components/Navigation';
import { BsGithub } from "react-icons/bs";
import { FaLinkedin, FaArtstation } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { AiOutlineSend } from "react-icons/ai";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import './contact.css';

const Contact = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isEmail = () => {
    let mail = document.getElementById('not-mail');
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regex)) {
      mail.style.display = "none";
      return true;
    } else {
      mail.style.display = "block";
      mail.style.animation = "dongle 1s";
      setTimeout(() => {
        mail.style.animation = "none";
      }, 1000);
      return false;
    }
  };

  const failMessage = (message) => {
    let formMess = document.querySelector('.form-message');

    formMess.innerHTML = message;
    formMess.style.opacity = '1';
    formMess.style.background = 'rgb(253,87,87)';

    document.getElementById('name').classList.add('error');
    document.getElementById('email').classList.add('error');
    document.getElementById('message').classList.add('error');
  }

  const successMessage = () => {
    let formMess = document.querySelector('.form-message');

    formMess.innerHTML = 'Votre message a bien été envoyé !';
    formMess.style.background = '#00c1ec';
    formMess.style.opacity = '1';


    document.getElementById('name').classList.remove('error');
    document.getElementById('email').classList.remove('error');
    document.getElementById('message').classList.remove('error');

    setTimeout(() => {
      formMess.style.opacity = '0';
    }, 5000); 
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && isEmail() && message) {
      sendFeedback("template_25tftxv", {
        name,
        company,
        phone,
        email,
        message,
      });
    } else { 
      failMessage("Merci de remplir correctement les champs requis *");
    }
  };


  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("service_z7npxpj", templateId, variables)
      .then((res) => {
        successMessage();
        setName("");
        setCompany("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) => {
          failMessage ("Une erreur s'est produite, veuillez réessayer.")
        }
      );  
  }; 

  return (
      <div>
        <Navigation />
       
        <div className="container-contact">
        <h2 className="title-infos">On rentre en contact ?</h2>
          <div className="infos-contact">
            
            <div className="contact">
              
                <div className="div-info">
                  <a href="mailto:vila.carla@yahoo.fr">
                    <MdOutlineMarkEmailRead className="symbole"/>
                  </a>
                </div>
                <div className="div-info">
                  <a href="https://www.linkedin.com/in/vilacarla">
                    <FaLinkedin className="symbole"/>
                  </a>
                </div>

                <div className="div-info">
                  <a href="https://www.github.com/carlavila">
                    <BsGithub className="symbole"/>
                  </a>
                </div>

                <div className="div-info">
                  <a href="https://www.artstation.com/carlitovila">
                    <FaArtstation className="symbole" />
                  </a>
                </div>       
          </div>
          <button className="pdf"> 
                  <a className="pdf-cv" href="./media/cv.pdf" target="_blank"> Télécharger mon CV</a>
                  <FiDownload className="download"/>
          </button>
        </div>

          <form className="contact-form">
            <div className="form-content">
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="nom *"
                value={name}
                autoComplete="off"
              />
              <input
                type="text"
                id="company"
                name="company"
                onChange={(e) => setCompany(e.target.value)}
                placeholder="société"
                value={company}
              />
              <input
                type="text"
                id="phone"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                placeholder="téléphone"
                value={phone}
              />
              <div className="email-content">
                <label id="not-mail">Email non valide</label>
                <input
                  type="mail"
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email *"
                  value={email}
                  autoComplete="off"
                />
              </div>
              <textarea
                id="message"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="message *"
                value={message}
              />
            </div>
            <button className="costum-button button"onClick={handleSubmit}> Envoyer <AiOutlineSend className="send" /> </button>
        <div className="form-message"></div>
      </form>
      </div>
      <Copyright />
      </div>
  );
};

export default Contact;