import React from 'react';
import {DiHtml5, DiCss3, DiSass, DiBootstrap, DiJavascript1, DiReact, DiNodejsSmall, DiWindows, DiGit, DiGithubBadge, DiMongodb, DiMysql } from 'react-icons/di';
import { FaVuejs, FaApple } from "react-icons/fa";
import { SiLighthouse, SiPostman} from "react-icons/si";
import Copyright from '../components/Copyright';
import Navigation from '../components/Navigation';
import './knowledges.css'

const Knowledges = () => {
	return (
		<div>
			<Navigation />

			<div className="knowledges">
				<h1 className="title__knowledges">Mes Compétences</h1>

				<div className="description-knowledges">
                                        <p className="text-knowledges">Les divers projets menés durant mes études m'ont permis d'acquérir des compétences en développement informatique. Ces compétences sont en constante évolution.</p>
                                </div>
				<div className="items">
					<div className="informations">

						<h2 className="title_info">front end</h2>

						
						<div className="list">
							<div className="info_icons">
								<DiHtml5 className="icon" color="#E44E32"/>
								<p className="p">HTML</p>
							</div>
							     
							<div className="info_icons">
								<DiCss3 className="icon" color="#274DE4"/>
								<p className="p">CSS</p>
							</div>

							<div className="info_icons">
								<DiSass className="icon" color="#CE679A"/>
								<p className="p">Sass</p>
							</div>

							<div className="info_icons">
								<DiBootstrap className="icon" color="#563E7B"/>
								<p className="p">Bootstrap</p>
							</div>

							<div className="info_icons">
								<DiJavascript1 className="icon" color="#F7E04B"/>
								<p className="p">Javascript</p>
							</div>

							<div className="info_icons">
								<FaVuejs className="icon" color="#53B985"/>
								<p className="p">Vue.js</p>
							</div>
							
							<div className="info_icons">
								<DiReact className="icon" color="#61DAF9" />
								<p className="p">React.js</p>
							</div>

							
						</div>
						
					</div>
					
					<div className="informations">

						<h2 className="title_info">back end</h2>

						<div className="list">

							<div className="info_icons">
								<DiNodejsSmall className="icon" color="#539E43"/>
								<p className="p">Node.js</p>
							</div>

							<div className="info_icons">
								<DiMongodb className="icon" color="#499F39"/>
								<p className="p">MongoDB</p>
							</div>

							<div className="info_icons">
								<DiMysql className="icon" color="#21628B"/>
								<p className="p">MySQL</p>
							</div>
							<div className="info_icons">
								<SiPostman className="icon" color="#EF6A37"/>
								<p className="p">Postman</p>
							</div>
						</div>
						
					</div>
					<div className="informations">
						<h2 className="title_info">Autres outils</h2>
						<div className="list">

							<div className="info_icons">
								<FaApple className="icon" color="white"/>
								<p className="p">Apple</p>
							</div>

							<div className="info_icons">
								<DiWindows className="icon" color="#42AFF0"/>
								<p className="p">Windows</p>
							</div>

							<div className="info_icons">
								<DiGit className="icon" color="#EE5135"/>
								<p className="p">Git</p>
							</div>

							<div className="info_icons">
								<DiGithubBadge className="icon" />
								<p className="p">Github</p>
							</div>

							<div className="info_icons">
								<SiLighthouse className="icon" color="#EE5B36"/>
								<p className="p">Lighthouse</p>
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