import React from 'react';
import '../ProjectsComponents/projects.css';

const Project5 = () => {
	return (

		<div className = "item">
				
	    		<figure>
				<img className="img" src="../media/sopeckocko.png" alt="So peckocko"/>
				<figcaption>
					<h2>So peckocko</h2>
					<p className="description">Développement back end d'une application d'avis gastronomique</p>
				</figcaption>

				<div className="infos">
                                        <div className="text">
					<button className="custom-btn btn"><a href="https://github.com/carlavila/p6-so-peckocko">Voir le code</a></button>
                                        </div>
                                </div>  

							
			</figure>

		</div>
			
	);
};

export default Project5;