import React from 'react';
import './projects.css'
const Project3 = () => {
	return (

		<div className = "item">
				
	    		<figure>
				<img className="img" src="../media/lachouetteagence.png" alt="La chouette agence"/>
				<figcaption>
					<h2>La chouette agence</h2>
					<p className="description">Optimisation du référencement SEO</p>
				</figcaption>

				<div className="infos">
                                        <div className="text">
						<button className="custom-btn btn"><a href="https://carlavila.github.io/p4_vila_carla/">Voir le projet</a></button>
                                                <button className="custom-btn btn"><a href="https://github.com/carlavila/p4_vila_carla">Voir le code</a></button>
                                        </div>
                                </div>  

							
			</figure>

		</div>
			
	);
};

export default Project3;