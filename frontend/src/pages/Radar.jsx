import React, { useEffect, useContext } from 'react';

import { HelmetContext } from '../context/helmet-context';

const Radar = () => {
	const { setPageTitle, data } = useContext(HelmetContext);

	useEffect(() => {
		setPageTitle('Radar');

		console.log(data);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [setPageTitle]);

	return <div>Radar</div>;
};

export default Radar;
