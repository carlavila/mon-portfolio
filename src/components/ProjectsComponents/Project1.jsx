import React from 'react';
import '../ProjectsComponents/projects.css';


const Project1 = () => {
	return (

		<div className = "item">
				
	    		<figure>
				<img className="img"src="./media/reservia.png" alt="Reservia"/>
				<figcaption>
					<h2>Reservia</h2>
					<p className="description">Maquette graphique en HTML5 et CSS3</p>
				</figcaption>

				<div className="infos">
                                        <div className="text">
						<button className="custom-btn btn"><a href="https://carlavila.github.io/CarlaVila_2_22122020/reservia.html">Voir le projet</a></button>
                                                <button className="custom-btn btn"><a href="https://github.com/carlavila/CarlaVila_2_22122020">Voir le code</a></button>
                                        </div>
                                </div>  

							
			</figure>

		</div>


	);
};

export default Project1;