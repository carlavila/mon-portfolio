import React from 'react'
import "./navigation.css"
import {useState} from 'react';

const Navigation = () => {

	const [showLinks, setShowLinks]= useState(false)

	const handleShowLinks = () => {
		setShowLinks(!showLinks)
	}

	return (
		<nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
			<ul className="navbar__links">
				<li className="navbar__item">
					<a href="/" className="navbar__link">
						Accueil 
					</a>
					<a href="/competences" className="navbar__link">
						Compétences
					</a>
					<a href="/projets" className="navbar__link">
						Projets
					</a>
					<a href="/contact" className="navbar__link">
						Contact
					</a>

				</li>
			</ul>
			
			<button className="navbar__burger" onClick={handleShowLinks}> 
				<span className="burger-bar"></span>
                        </button>


		</nav>
		
	);
};

export default Navigation;