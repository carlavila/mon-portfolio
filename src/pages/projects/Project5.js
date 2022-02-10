import React from 'react';
import './projects.css'

const Project5 = () => {
	return (
			<div className = "item">
				<a href="https://github.com/carlavila/p6-so-peckocko">
					<figure> 
	    					<img class="img" src="../media/sopeckocko.png" alt="So peckocko"/>
	    					<figcaption>
							<div className="title">
	    							<h2>So peckocko</h2>
							</div>
							<p className="icons">
								<img className="logo" src="./media/nodejs.png" alt="NodeJs"/>
								<img className="logo" src="./media/express.png" alt="Express"/>
								<img className="logo" src="./media/mongodb.png" alt="Mongodb"/>
								<img className="logo" src="./media/git.png" alt="Git"/>
							</p>
							<p className="description">Développement back end d'une application d'avis gastronomique</p>
	    					</figcaption>
				
					</figure>
				</a>
			
			</div>
	);
};

export default Project5;