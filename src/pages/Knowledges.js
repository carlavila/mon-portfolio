import React from 'react';
import {DiHtml5, DiCss3, DiSass, DiBootstrap, DiJavascript1, DiReact, DiNodejsSmall, DiWindows, DiGit, DiGithubBadge, DiMongodb, DiMysql } from 'react-icons/di';
import { FaVuejs, FaApple } from "react-icons/fa";
import { SiLighthouse, SiPostman} from "react-icons/si";
import Copyright from '../components/Copyright';
import Navigation from '../components/Navigation';
import computer from '../media/computer.jpeg'
import './knowledges.css'

const Knowledges = () => {
	return (
		<div>
			<Navigation />

			<div className="knowledges">

				<div className="img__knowledges">
					<img src={computer} alt="computer" className="img__computer" />
					<h1 className="title__knowledges">Mes Compétences</h1>
				</div>

				<div className="items">
					<div className="informations">

						<h2 className="title_info">front end</h2>
						
						<div className="list">
							<div className="info_icons">
								<DiHtml5 className="icon" />
								<p className="p">HTML</p>
							</div>
							
							<div className="info_icons">
								<DiCss3 className="icon" />
								<p className="p">CSS</p>
							</div>

							<div className="info_icons">
								<DiSass className="icon" />
								<p className="p">Sass</p>
							</div>

							<div className="info_icons">
								<DiBootstrap className="icon" />
								<p className="p">Bootstrap</p>
							</div>

							<div className="info_icons">
								<DiJavascript1 className="icon" />
								<p className="p">Javascript</p>
							</div>

							<div className="info_icons">
								<FaVuejs className="icon" />
								<p className="p">Vue.js</p>
							</div>
							
							<div className="info_icons">
								<DiReact className="icon" />
								<p className="p">React.js</p>
							</div>

							
						</div>
						
					</div>
					
					<div className="informations">

						<h2 className="title_info">back end</h2>

						<div className="list">

							<div className="info_icons">
								<DiNodejsSmall className="icon" />
								<p className="p">Node.js</p>
							</div>

							<div className="info_icons">
								<DiMongodb className="icon" />
								<p className="p">MongoDB</p>
							</div>

							<div className="info_icons">
								<DiMysql className="icon" />
								<p className="p">MySQL</p>
							</div>
						</div>
						
					</div>
					<div className="informations">
						<h2 className="title_info">Autres outils</h2>
						<div className="list">

							<div className="info_icons">
								<FaApple className="icon" />
								<p className="p">Apple</p>
							</div>

							<div className="info_icons">
								<DiWindows className="icon" />
								<p className="p">Windows</p>
							</div>

							<div className="info_icons">
								<DiGit className="icon" />
								<p className="p">Git</p>
							</div>

							<div className="info_icons">
								<DiGithubBadge className="icon" />
								<p className="p">Github</p>
							</div>

							<div className="info_icons">
								<SiLighthouse className="icon" />
								<p className="p">Lighthouse</p>
							</div>

							<div className="info_icons">
								<SiPostman className="icon" />
								<p className="p">Postman</p>
							</div>
						</div>
						
					</div>
				</div>
				
			</div>
			
			<Copyright />
		</div>
	);
};

export default Knowledges;