import React from 'react';
import './projects.css'

const Project3 = () => {
	return (
			<div className = "item">
				<a href="https://github.com/carlavila/p4_vila_carla">
					<figure> 
	    					<img class="img" src="../media/lachouetteagence.png" alt="La chouette agence"/>
	    					<figcaption>
							<div className="title">
	    							<h2>La chouette agence</h2>
							</div>
							<p className="icons">
								<img className="logo" src="./media/google-lighthouse.png" alt="Lighthouse"/>
								<img className="logo" src="./media/html5.png" alt="Html5"/>
								<img className="logo" src="./media/css3.png" alt="Css3"/>
								<img className="logo" src="./media/git.png" alt="Git"/>
							
							</p>
							<p className="description">Optimisation du référencement SEO</p>
						</figcaption>
				
					</figure>
				</a>
			
			</div>
	);
};

export default Project3;