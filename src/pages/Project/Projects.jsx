import React from 'react';
import Project1 from '../../components/ProjectsComponents/Project1';
import Project2 from '../../components/ProjectsComponents/Project2';
import Project3 from '../../components/ProjectsComponents/Project3';
import Project4 from '../../components/ProjectsComponents/Project4';
import Project5 from '../../components/ProjectsComponents/Project5';
import Project6 from '../../components/ProjectsComponents/Project6';
import "./project.css";
import '../../components/ProjectsComponents/projects.css';
import Navigation from '../../components/Navbar/Navigation';
import Copyright from '../../components/Copyright/Copyright';

 

const Projects = () => {
	return (
		<div>
			<Navigation />
			<div className="projects-container">

					<h1 className="title__projects">Mes Projets</h1>

					<div className="description-projects">
						<p className="text-projects">Pendant mes études, j'ai été amenée à réaliser différents projets au sein de ma formation. Ces projets avaient pour but de mettre en pratique nos connaissances tout-en les approfondissant.
Ils ont permis la manipulation de différents langages, d'appréhender le développement et de réaliser un projet aux normes.</p>
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