import React from 'react';
import Img1 from '../components/Img1Home';
import Slider from '../components/Slider';
import img_1 from '../media/img1.jpeg';
import img_2 from '../media/img2.jpeg';
import img_3 from '../media/img3.jpeg';
import Navigation from '../components/Navigation';
import Copyright from '../components/Copyright';
import '../pages/home.css';


const navbarLinks = [
	{url:"/", title: "Accueil"},
	{url:"/competences", title: "Compétences"},
	{url:"/projets", title: "Projets"},
	{url:"/contact", title: "Contact"}
]

function Home() {
	return (
	
		<div className="Home">
			<Navigation navbarLinks={navbarLinks} />
			<Img1 imageSrc={img_1}/>
			
			<Slider 
				imageSrc={img_2} 
				title={"Bienvenue sur mon Portfolio !"} 
				subtitle={"Vous pouvez découvrir mes projets et en apprendre un peu plus sur moi."}
			/>

			<Slider 
				imageSrc={img_3} 
				title={"Présentation"} 
				subtitle1={"Je m'appelle Carla Vila, j'ai 24 ans et je suis développeuse front end junior depuis peu."}
				
				subtitle2={"J'ai découvert le monde du web en 2019, et après des études dans l’immobilier, j'ai décidé de changer de voie et de me reconvertir professionnellement. Oui un pari risqué mais qui vaut le coup !"}
				
				subtitle3={"J'ai eu l'opportunité d'apprendre le code via l’organisme OpenClassrooms. J'ai pu ainsi découvrir tous les aspects du développement web, ce qui m'a permis de choisir une spécialité...le FRONT END."}
				
				subtitle4= {"Le front end, la vitrine du développement, me plaît car je prends un réel plaisir à créer, reproduire, intégrer des interfaces. Je vois en cette partie visible et design, une forme d'art."} 
				flipped= {true}	
			/>
			<Copyright />

		</div>
	);
};

export default Home;