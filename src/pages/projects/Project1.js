import React from 'react';
import './projects.css'


const Project1 = () => {
	return (

			<div className = "item">
				<a href="https://github.com/carlavila/CarlaVila_2_22122020">
					<figure> 
	    					<img class="img"src="./media/reservia.png" alt="Reservia"/>
	    					<figcaption>
							<div className="title">
	    							<h2>Reservia</h2>
							</div>
							<p className="icons">
								<img className="logo" src="./media/html5.png" alt="Html5"/>
								<img className="logo" src="./media/css3.png" alt="Css3"/>
								<img className="logo" src="./media/git.png" alt="Git"/>
							</p>
							<p className="description">Maquette graphique en HTML5 et CSS3</p>
	    					</figcaption>
				
					</figure>
				</a>
			</div>


	);
};

export default Project1;