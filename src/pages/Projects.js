import React from 'react';
import Navigation from '../components/Navigation';
import Project1 from './projects/Project1';
import Project2 from './projects/Project2';
import Project3 from './projects/Project3';
import Project4 from './projects/Project4';
import Project5 from './projects/Project5';
import Project6 from './projects/Project6';
import "./project.css";
import './projects/projects.css';
import Copyright from '../components/Copyright';



const Projects = () => {
	return (
		<div>
			<Navigation />
			
			<h1 className="title">Projets - Réalisations</h1>
			
			<div className="projectsContent">
					<Project1 />
					<Project2 />
					<Project3 />
					<Project4 />
					<Project5 />
					<Project6 />
			</div>

		<Copyright />
			
		</div>
	);
};

export default Projects;