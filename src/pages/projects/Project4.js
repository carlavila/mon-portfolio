import React from 'react';
import './projects.css'

const Project4 = () => {
	return (
			<div className = "item">
					<div className="image-info">

	    					<img className="img" src="../media/orinoco.png" alt="Orinoco"/>

	    					<div className="infos">
							<div className="text">
								<h2>Orinoco</h2>
								<p className="icons">
									<img className="logo" src="./media/javascript.png" alt="Javascript"/>
									<img className="logo" src="./media/bootstrap.png" alt="Bootstrap"/>
									<img className="logo" src="./media/html5.png" alt="Html5"/>
									<img className="logo" src="./media/css3.png" alt="Css3"/>
									<img className="logo" src="./media/git.png" alt="Git"/>
								</p>
								<p className="description">Développement <strong>front end</strong> d'un site <strong>e-commerce</strong></p>
								<button className="custom-btn btn"><a href="https://github.com/carlavila/orinoco">Voir le projet</a></button>
							</div>
	    					</div>
				
					</div>
			</div>
	);
};

export default Project4;