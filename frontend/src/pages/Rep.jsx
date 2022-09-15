import React, { useContext, useEffect } from 'react';

//components
import { HelmetContext } from '../context/helmet-context';

const Rep = () => {
	const { setPageTitle } = useContext(HelmetContext);

	useEffect(() => {
		setPageTitle('Ley Rep');
	}, [setPageTitle]);

	return <div>Rep</div>;
};

export default Rep;
