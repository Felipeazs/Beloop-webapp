import React, { useEffect, useContext } from 'react';

import { HelmetContext } from '../context/helmet-context';

const Radar = () => {
	const { setPageTitle } = useContext(HelmetContext);

	useEffect(() => {
		setPageTitle('Radar');
	}, [setPageTitle]);

	return <div>Radar</div>;
};

export default Radar;
