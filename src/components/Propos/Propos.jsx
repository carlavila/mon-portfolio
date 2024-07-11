import React from "react";
import art from "../../media/art.png";
import autonome from "../../media/autonome.png";
import curieuse from "../../media/curieuse.png";
import portrait from "../../media/IMG_4974.jpeg";
import "./propos.css";

const Propos = () => {
  return (
    <div className="a-propos">
      <div className="bloc-titles">
        <h2 className="h2 h2-propos">À propos de moi</h2>
        <p className="p-propos-title">Présentation</p>
      </div>
      <section className="section">
        <div className="bloc1-propos"> 
          <img src={portrait} alt="portrait" className="portrait-image" />
        </div>

        <div className="bloc2-propos">
          <div className="bloc-soft-skills">
            <div className="softskills">
              <img src={art} alt="art" className="logo-softskills" />
              <p className="p-softskills">Créative</p>
            </div>
            <div className="softskills">
              <img src={autonome} alt="autonome" className="logo-softskills" />
              <p className="p-softskills">Autonome</p>
            </div>
            <div className="softskills">
              <img src={curieuse} alt="curieuse" className="logo-softskills" />
              <p className="p-softskills">Curieuse</p>
            </div>
          </div>

          <div className="bloc-h3">
            <p className="p-propos">
              Je m'appelle Carla, j'ai 26 ans et je suis développeuse front end
              junior.
            </p>
            <p className="p-propos">
              J'ai découvert le monde du web en 2019, et après des études dans
              l’immobilier, j'ai décidé de changer de voie et de me reconvertir
              professionnellement. Oui un pari risqué mais qui vaut le coup !
            </p>
            <p className="p-propos">
              J'ai débuté mon apprentissage de manière autodidacte avec une
              formation d'une durée d'un an, puis j'ai poursuivi en alternance.
              Cette expérience combinée m'a permis de renforcer mes compétences
              en développement front end, en affrontant les défis pratiques et
              enjeux du métier, consolidant ainsi ma passion pour ce domaine.
            </p>
            <p className="p-propos">
              Le front end, la vitrine du développement, me plaît car je prends
              un réel plaisir à créer, reproduire, intégrer des interfaces. Je
              vois en cette partie visible et design, une forme d'art.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Propos;
