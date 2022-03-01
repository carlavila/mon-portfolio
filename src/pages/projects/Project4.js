import React from 'react';
import {DiBootstrap, DiJavascript1, DiHtml5, DiCss3, DiGit, DiGithubBadge} from 'react-icons/di';

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
									<DiBootstrap className="logo" />
									<DiJavascript1 className="logo" />
									<DiHtml5 className="logo" />
									<DiCss3 className="logo" />
									<DiGit className="logo" />
									<DiGithubBadge className="logo" />
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