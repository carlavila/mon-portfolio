import React from 'react';
import "./img1home.css";

const Img1Home = ({imageSrc}) => {
	return (
		<div className="img1">
			<img src={imageSrc} alt="Computer" className="img1__image" />
			<div className="img1_title">
				<h1 className="img1__h1">CARLA VILA</h1>
				<h2 className="img1_h2">DÉVELOPPEUSE FRONT END</h2>	
			</div>
		</div>
	);
};

export default Img1Home;