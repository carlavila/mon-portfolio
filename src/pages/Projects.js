import React from 'react';
import Navigation from '../components/Navigation';
import Project1 from './projects/Project1';
import Project2 from './projects/Project2';
import Project3 from './projects/Project3';
import Project4 from './projects/Project4';
import Project5 from './projects/Project5';
import Project6 from './projects/Project6';
import './projects/projects.css';

const navbarLinks = [
	{url:"/", title: "Accueil"},
	{url:"/competences", title: "Compétences"},
	{url:"/projets", title: "Projets"},
	{url:"/contact", title: "Contact"}
]

const Projects = () => {
	return (
		<div>
			<Navigation navbarLinks={navbarLinks} />
			
			<div className="projectsContent">
				<Project1 />
				<Project2 />
				<Project3 />
				<Project4 />
				<Project5 />
				<Project6 />
			</div>

		
			
		</div>
	);
};

export default Projects;