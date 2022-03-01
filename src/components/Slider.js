import React from 'react';
import { useInView } from 'react-intersection-observer';
import "./slider.css";

const Slider = ({imageSrc, title, subtitle, subtitle1, subtitle2, subtitle3, subtitle4, flipped}) => {

	const {ref, inView} = useInView({
		threshold: 0.4,
	});


	const renderContent = () => {
		if(!flipped) {
			return ( 
				<>
					<img src={imageSrc} alt="presentation" className="slider__image"/>
					<div className="slider__content">
						<h3 className="slider__title">{title}</h3>
						<div className="paragraphs">
							<p className="slider__paragraphe">{subtitle}</p>
						</div>
					</div>
				</>
			);
		} else {
			return ( 
				<>
					<div className="slider__content">
							<h3 className="slider__title">{title}</h3>
							<div className="paragraphs">
								<p className="slider__paragraphe1">{subtitle1}</p>
								<p className="slider__paragraphe2">{subtitle2}</p>
								<p className="slider__paragraphe3">{subtitle3}</p>
								<p className="slider__paragraphe4">{subtitle4}</p>
							</div>
					</div>
					<img src={imageSrc} alt="presentation" className="slider__image"/>
					
				</>
			);
		}
	};
	
	return (
		<div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>
			{renderContent()}
		</div>
			
		
	);
};

export default Slider;