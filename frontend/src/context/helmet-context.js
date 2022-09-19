import { createContext, useState } from 'react';

export const HelmetContext = createContext({
	headerTitle: '',
	data: {},
	setRespuestas: () => {},
	setPageTitle: (title) => {},
});

const HelmetProvider = ({ children }) => {
	const [title, setTitle] = useState('');
	const [data, setData] = useState();

	const pageTitle = (t) => {
		setTitle(t);
	};

	const respuestas = (resp) => {
		setData(resp);
	};

	return (
		<HelmetContext.Provider
			value={{
				setPageTitle: pageTitle,
				headerTitle: title,
				setRespuestas: respuestas,
				data,
			}}
		>
			{children}
		</HelmetContext.Provider>
	);
};

export default HelmetProvider;
