import React from 'react';
import './projects.css'

const Project4 = () => {
	return (
			<div className = "item">
				<a href="https://github.com/carlavila/orinoco">
					<figure> 
	    					<img class="img" src="../media/orinoco.png" alt="Orinoco"/>
	    					<figcaption>
							<div className="title">
	    							<h2>Orinoco</h2>
							</div>
							<p className="icons">
								<img className="logo" src="./media/javascript.png" alt="Javascript"/>
								<img className="logo" src="./media/bootstrap.png" alt="Bootstrap"/>
								<img className="logo" src="./media/html5.png" alt="Html5"/>
								<img className="logo" src="./media/css3.png" alt="Css3"/>
								<img className="logo" src="./media/git.png" alt="Git"/>
							</p>
							<p className="description">Développement front end d'un site e-commerce</p>
	    					</figcaption>
				
					</figure>
				</a>
			
			</div>
	);
};

export default Project4;