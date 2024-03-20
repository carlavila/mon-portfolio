import React from 'react';
import '../ProjectsComponents/projects.css';

const Project2 = () => {
	return (

		<div className = "item">
				
	    		<figure>
				<img className="img" src="../media/ohmyfood.png" alt="Oh my food"/>
				<figcaption>
					<h2>Oh my food</h2>
					<p className="description">Utilisation de Sass et des @keyframes</p>
				</figcaption>

				<div className="infos">
                                        <div className="text">
						<button className="custom-btn btn"><a href="https://carlavila.github.io/CarlaVila_3_18032021/">Voir le projet</a></button>
                                                <button className="custom-btn btn"><a href="https://github.com/carlavila/CarlaVila_3_18032021">Voir le code</a></button>
                                        </div>
                                </div>  

							
			</figure>

		</div>
			
	);
};

export default Project2;