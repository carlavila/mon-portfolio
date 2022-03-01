import React from 'react';
import {DiNodejsSmall, DiMongodb, DiGit, DiGithubBadge} from 'react-icons/di';
import {SiPostman} from "react-icons/si";
import './projects.css'

const Project5 = () => {
	return (
			<div className = "item">

					<div className="image-infos"> 

	    					<img className="img" src="../media/sopeckocko.png" alt="So peckocko"/>

	    					<div className="infos">
							<div className="text">
								<h2>So peckocko</h2>
								<p className="icons">
									<DiNodejsSmall className="logo" />
									<img className="logo" src="./media/express.png" alt="Express"/>
									<SiPostman className="logo" />
									<DiMongodb className="logo" />
									<DiGit className="logo" />
									<DiGithubBadge className="logo" />
								</p>
								<p className="description">Développement <strong>back end</strong> d'une application <strong>d'avis gastronomique</strong></p>
								<button className="custom-btn btn"><a href="https://github.com/carlavila/p6-so-peckocko">Voir le projet</a></button>
							</div>
	    					</div>
				
					</div>
			</div>
	);
};

export default Project5;