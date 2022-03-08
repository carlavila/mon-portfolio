import React from 'react';
import Project1 from './projects/Project1';
import Project2 from './projects/Project2';
import Project3 from './projects/Project3';
import Project4 from './projects/Project4';
import Project5 from './projects/Project5';
import Project6 from './projects/Project6';
import computer from '../media/computer.jpeg'
import "./project.css";
import './projects/projects.css';
import Navigation from '../components/Navigation';
import Copyright from '../components/Copyright';



const Projects = () => {
	return (
		<div>
			<Navigation />
			<div className="projects-container">

				<div className="img__projects">
					<img src={computer} alt="computer" className="img__computer" />
					<h1 className="title__projects">Mes Projets</h1>
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