import React from 'react';
import Copyright from '../components/Copyright';

const Contact = () => {
	return (
		<div>
			<div className="socialNetwork">
				<ul>
					<li>
						<a href="www.linkedin.com/in/vilacarla" target="_bank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
					</li>
					<li>
						<a href="https://github.com/carlavila" target="_bank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
					</li>
					<li>
						<a href="https://www.artstation.com/carlitovila" target="_bank" rel="noopener noreferrer"><i className="fab fa-artstation"></i></a>
					</li>
				</ul>
			</div>
			<Copyright />
		</div>
	);
};

export default Contact;