import React from 'react';
import './projects.css'

const Project6 = () => {
	return (
			<div className = "item">

					<div className="image-infos"> 

	    					<img className="img" src="../media/groupomania.png" alt="Groupomania"/>

	    					<div className="infos">
							<div className="text">
								<h2>Groupomania</h2>
								<p className="icons">
									<img className="logo" src="./media/vuejs.png" alt="VueJs"/>
									<img className="logo" src="./media/mysql.png" alt="MysQl"/>
									<img className="logo" src="./media/mongodb.png" alt="Mongodb"/>
									<img className="logo" src="./media/git.png" alt="Git"/>
								</p>
								<p className="description">Développement <strong>fullstack</strong> d'un <strong>réseau social d'entreprise</strong></p>
								<button className="custom-btn btn"><a href="https://github.com/carlavila/p7_vila_groupomania">Voir le projet</a></button>
							</div>
	    					</div>
				
					</div>
			</div>
	);
};

export default Project6;