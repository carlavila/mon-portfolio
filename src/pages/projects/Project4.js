import React from 'react';
import './projects.css'

const Project4 = () => {
	return (

		<div className = "item">
				
	    		<figure>
				<img className="img" src="../media/orinoco.png" alt="Orinoco"/>
				<figcaption>
					<h2>Orinoco</h2>
					<p className="description">Développement front en d'un site e-commerce</p>
				</figcaption>

				<div className="infos">
                                        <div className="text">
                                                <button className="custom-btn btn"><a href="https://github.com/carlavila/orinoco">Voir le code</a></button>
                                        </div>
                                </div>  

							
			</figure>

		</div>
			
	);
};

export default Project4;