import React, {useState} from 'react'
import "./navigation.css"
import {FiMenu, FiX} from 'react-icons/fi';


const Navigation = ({navbarLinks}) => {

	const [menuClicked, setMenuClicked] = useState(false);

	const toggleMenuClicked = () => {
		setMenuClicked(!menuClicked);
	};

	return (
		<nav className="navbar">

			{menuClicked ? (
				<FiMenu size={25} className="navbar__menu" onClick={toggleMenuClicked}/> 
				
			) : ( 
				<FiX size={25} className="navbar__menu" onClick={toggleMenuClicked}/> 
			
			)}

			<ul className={menuClicked ? "navbar__list" : "navbar__list navbar__list--active"}>
				{navbarLinks.map((item) => {
					return (
						<li className="navbar__item" key ={item.title}>
							<a className="navbar__link" href={item.url}>
								{item.title}
							</a>
						</li>
					);
				})}
			</ul>
			
		</nav>
			
		
	);
};

export default Navigation;