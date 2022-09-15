import React, { useContext, useEffect } from 'react';

//components
import { HelmetContext } from '../context/helmet-context';

const Analisis = () => {
	const { setPageTitle } = useContext(HelmetContext);

	useEffect(() => {
		setPageTitle('Análisis');
	}, [setPageTitle]);

	return <div>Analisis</div>;
};

export default Analisis;
