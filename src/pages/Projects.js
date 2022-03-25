import React from 'react';
import Project1 from './projects/Project1';
import Project2 from './projects/Project2';
import Project3 from './projects/Project3';
import Project4 from './projects/Project4';
import Project5 from './projects/Project5';
import Project6 from './projects/Project6';
import "./project.css";
import './projects/projects.css';
import Navigation from '../components/Navigation';
import Copyright from '../components/Copyright';



const Projects = () => {
	return (
		<div>
			<Navigation />
			<div className="projects-container">

					<h1 className="title__projects">Mes Projets</h1>

					<div className="description-projects">
						<p className="text-projects">Pendant mes études, j'ai été amenée à réaliser différents projets au sein de ma formation. Ces projets avaient pour but de mettre en pratique nos connaissances tout-en les approfondissant.
Ils ont permis la manipulation de différents langages, d'appréhender la développement et de réaliser un projet aux normes.</p>
					</div>
				
				<div className="projectsContent">
						<Project1 />
						<Project2 />
						<Project3 />
						<Project4 />
						<Project5 />
						<Project6 />
				</div>
			</div>
			<Copyright />
			
		</div>
	);
};

export default Projects;