import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='bg-primary text-white font-metropolis font-bold'>
			<Link to='/'>Inicio</Link>
			<Link to='/ley-rep'>Ley Rep</Link>
			<Link to='/analisis'>Análisis</Link>
			<Link to='/radar'>Radar</Link>
		</div>
	);
};

export default Header;
