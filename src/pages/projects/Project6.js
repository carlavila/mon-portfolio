import React from 'react';
import './projects.css'

const Project6 = () => {
	return (

		<div className = "item">
				
	    		<figure>
				<img className="img" src="../media/groupomania.png" alt="Groupomania"/>
				<figcaption>
					<h2>Groupomania</h2>
					<p className="description">Développement fullstack d'un réseau social d'entreprise</p>
				</figcaption>

				<div className="infos">
                                        <div className="text">
					<button className="custom-btn btn"><a href="https://github.com/carlavila/p7_vila_groupomania">Voir le projet</a></button>
                                        </div>
                                </div>  				
			</figure>

		</div>
			
	);
};

export default Project6;