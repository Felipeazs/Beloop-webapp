import { createContext, useState } from 'react';

export const HelmetContext = createContext({
	headerTitle: '',
	setPageTitle: (title) => {},
});

const HelmetProvider = ({ children }) => {
	const [title, setTitle] = useState('');

	const pageTitle = (t) => {
		setTitle(t);
	};

	return (
		<HelmetContext.Provider value={{ setPageTitle: pageTitle, headerTitle: title }}>
			{children}
		</HelmetContext.Provider>
	);
};

export default HelmetProvider;
