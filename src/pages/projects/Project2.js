import React from 'react';
import './projects.css'

const Project2 = () => {
	return (
			<div className = "item">
				<a href="https://github.com/carlavila/CarlaVila_3_18032021">
					<figure> 
	    					<img class="img" src="../media/ohmyfood.png" alt="Oh my food"/>
	    					<figcaption>
	    						<div className="title">
							    <h2>Oh my food</h2>
							</div>
							<p className="icons">
								<img className="logo" src="./media/sass.png" alt="Sass"/>
								<img className="logo" src="./media/html5.png" alt="Html5"/>
								<img className="logo" src="./media/git.png" alt="Git"/>
								
							</p>
							<p className="description">Utilisation de Sass et des @keyframes</p>
	    					</figcaption>
				
					</figure>
				</a>
			
			</div>
	);
};

export default Project2;