import React from 'react';

//components
import Header from './Header';
import Footer from './Footer';
import Button from '../UI/Button';

const Main = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Main;
