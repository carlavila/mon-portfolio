import React from 'react';
import {DiHtml5, DiCss3, DiGit, DiGithubBadge} from 'react-icons/di';
import { SiLighthouse} from "react-icons/si";
import './projects.css'
const Project3 = () => {
	return (
			<div className = "item">
					<div className="image-infos">
	    					<img className="img" src="../media/lachouetteagence.png" alt="La chouette agence"/>
	    					
						<div className="infos">
							<div className="text">
								<h2>La chouette agence</h2>
								<p className="icons">
									<SiLighthouse className="logo" />
									<DiHtml5 className="logo" />
									<DiCss3 className="logo" />
									<DiGit className="logo" />
									<DiGithubBadge className="logo" />
								
								</p>
								<p className="description">Optimisation du <strong>référencement SEO</strong></p>
								<button className="custom-btn btn"><a href="https://github.com/carlavila/p4_vila_carla">Voir le projet</a></button>
							</div>
						</div>
					</div>
			</div>
	);
};

export default Project3;