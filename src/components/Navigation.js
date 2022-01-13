import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
	return (
		<div className="sidebar">

		<div className="idContent">
				<img src="./media/IMG_2389.jpg" alt="profil-picture" width="100%"  />
				<h3>Carla Vila</h3>
		</div>
			<div className="navigation">
				<ul>
					<li>
						<NavLink exact to="/" activeClassName="navActive">
							<i className="fas fa-home"></i>
							<span>Accueil</span>
						</NavLink>
					</li>
					<li>
						<NavLink exact to="/competences" activeClassName="navActive">
							<i className="fas fa-mountain"></i>
							<span>Compétences</span>
						</NavLink>
					</li>
					<li>
						<NavLink exact to="/projets" activeClassName="navActive">
							<i className="fas fa-images"></i>
							<span>Projets</span>
						</NavLink>
					</li>
					<li>
						<NavLink exact to="/contact" activeClassName="navActive">
							<i className="fas fa-address-book"></i>
							<span>Contact</span>
						</NavLink>
					</li>
				</ul>
			</div>

			
		</div>
		
	);
};

export default Navigation;