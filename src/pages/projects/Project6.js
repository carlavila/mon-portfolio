import React from 'react';
import {DiNodejsSmall, DiGit, DiGithubBadge, DiMysql } from 'react-icons/di';
import { FaVuejs} from "react-icons/fa";
import {SiPostman} from "react-icons/si";
import './projects.css'

const Project6 = () => {
	return (
			<div className = "item">

					<div className="image-infos"> 

	    					<img className="img" src="../media/groupomania.png" alt="Groupomania"/>

	    					<div className="infos">
							<div className="text">
								<h2>Groupomania</h2>
								<p className="icons">
									<FaVuejs className="logo" />
									<DiNodejsSmall className="logo" />
									<img className="logo" src="./media/express.png" alt="Express"/>
									<SiPostman className="logo" />
									<DiMysql className="logo" />
									<DiGit className="logo" />
									<DiGithubBadge className="logo" />
								</p>
								<p className="description">Développement <strong>fullstack</strong> d'un <strong>réseau social d'entreprise</strong></p>
								<button className="custom-btn btn"><a href="https://github.com/carlavila/p7_vila_groupomania">Voir le projet</a></button>
							</div>
	    					</div>
				
					</div>
			</div>
	);
};

export default Project6;