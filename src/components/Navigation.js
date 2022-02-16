import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import {FiMenu, FiX} from 'react-icons/fi';
import "./navigation.css"



const Navigation = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	return (
		<>
			<nav className="navbar">
				<div className="nav-container">
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<NavLink to="/" className="nav-links" onClick={handleClick}>
								Accueil
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/competences" activeclassname="active" className="nav-links" onClick={handleClick}>
								Compétences
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/projets" className="nav-links" onClick={handleClick}>
								Projets
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/contact" className="nav-links" onClick={handleClick}>
								Contact
							</NavLink>
						</li>
					</ul>
					{click ? (
						 <FiX size={25} className="nav__icon" onClick={handleClick}/> 
					) : ( 
						<FiMenu size={25} className="nav__icon" onClick={handleClick}/>
			
					)}
					
				</div>
			</nav>
		</>
	);
};

export default Navigation;


