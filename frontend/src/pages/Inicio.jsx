import React, { useContext, useEffect } from 'react';

//context
import { HelmetContext } from '../context/helmet-context';

//components
import Hero from '../components/layout/Hero';

const Inicio = () => {
	const { setPageTitle } = useContext(HelmetContext);

	useEffect(() => {
		setPageTitle('Inicio');
	}, [setPageTitle]);

	return (
		<>
			<Hero
				paragraphs={[
					'SOMOS',
					'LOOP',
					'TEST',
					'Plataforma digital que ayuda a la sistematización de métricas y estándares para la industria del packaging en términos de economía circular y legislación asociada.',
				]}
				image='/images/recurso1.png'
			/>
		</>
	);
};

export default Inicio;
