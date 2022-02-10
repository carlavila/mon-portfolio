import React from 'react';
import './projects.css'

const Project6 = () => {
	return (
			<div className = "item">
				<a href="https://github.com/carlavila/p7_vila_groupomania">
					<figure> 
	    					<img class="img" src="../media/groupomania.png" alt="Groupomania"/>
	    					<figcaption>
							<div className="title">
	    							<h2>Groupomania</h2>
							</div>
							<p className="icons">
								<img className="logo" src="./media/vuejs.png" alt="VueJs"/>
								<img className="logo" src="./media/mysql.png" alt="MysQl"/>
								<img className="logo" src="./media/mongodb.png" alt="Mongodb"/>
								<img className="logo" src="./media/git.png" alt="Git"/>
							</p>
							<p className="description">Développement fullstack d'un réseau social d'entreprise</p>
	    					</figcaption>
				
					</figure>
				</a>
			
			</div>
	);
};

export default Project6;