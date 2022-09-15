import React from 'react';

//components
import Header from './Header';
import Footer from './Footer';
import Button from '../UI/Button';

const Main = ({ children }) => {
	return (
		<>
			<Header />
			<div className='bg-primary'>
				<p className='text-default'>BELOOP MAIN</p>
				<Button
					title='Realizar análisis'
					mode='primary'
					type='button'
				/>
				<Button
					title='Consultora Beloop'
					mode='secondary'
					type='button'
				/>
				<Button
					title='Ley REP'
					mode='primary'
					type='button'
				/>
				{children}
			</div>
			<Footer />
		</>
	);
};

export default Main;
