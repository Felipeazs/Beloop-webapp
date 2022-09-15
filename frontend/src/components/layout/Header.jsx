import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<div className='h_line'></div>
			<nav className='flex flex-row justify-between items-center sm:p-header_sm md:p-header_md lg:p-header_lg bg-tertiary text-default font-metropolis font-black h-header'>
				<div className='sm:mx-auto md:mx-0'>
					<img
						src='/logos/logo-2-md.svg'
						alt='logo2smd'
						width='190'
					/>
				</div>
				<div className='flex flex-row sm:hidden md:flex md:gap-12 lg:gap-16 leading-header'>
					<NavLink to='/inicio'>INICIO</NavLink>
					<NavLink to='/ley-rep'>¿LEY REP?</NavLink>
					<NavLink to='/analisis'>ANÁLISIS</NavLink>
					<NavLink to='/radar'>RADAR</NavLink>
				</div>
				<div className='sm:hidden md:inline-block'>
					<img
						src='/logos/logo-1-sm.svg'
						alt='logo1sm'
						width='41'
					/>
				</div>
			</nav>
			<div className='h_line'></div>
		</>
	);
};

export default Header;
