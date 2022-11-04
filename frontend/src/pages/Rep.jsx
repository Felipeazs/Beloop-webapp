import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//components
import { HelmetContext } from '../context/helmet-context';
import Hero from '../components/layout/Hero';
import MiddleA from '../components/layout/MiddleA';
import MiddleB from '../components/layout/MiddleB';

const Rep = () => {
	const { setPageTitle } = useContext(HelmetContext);

	const navigate = useNavigate();

	useEffect(() => {
		window.scroll(0, 0);
	}, [setPageTitle]);

	return (
		<>
			<Hero
				paragraphs={[
					'¿QUÉ ES LA',
					'LEY REP?',
					'',
					'La Ley N° 20.920, Ley Marco para la Gestión de Residuos, la Responsabilidad Extendida del Productor y Fomento al Reciclaje (“Ley REP”), fue publicada en el Diario Oficial el 1° de junio de 2016.',
				]}
				heroImage='bg-heroImage2'
				image='/images/recurso3.png'
				mode='secondary'
				onClick={() => navigate('/analisis')}
			/>
			<div className='h_line'></div>
			<MiddleA
				title='OBJETIVOS'
				paragraph='La Ley busca disminuir la generación de residuos y fomentar su reutilización, reciclaje y otro tipo de valorización. Con este fin, instaura la Responsabilidad Extendida del Productor (“REP”), haciendo responsable al productor de los residuos que se generen a partir de sus productos, desde su generación hasta su valorización o eliminación.'
			/>
			<div className='h_line'></div>
			<MiddleB
				color='bg-secondary'
				text1='ÁMBITO DE'
				text2='APLICACIÓN'
				text4='La Ley establece diversos productos prioritarios, a los cuales se aplicará el régimen de la REP. Estos son: '
				text5='1.- Aceites lubricantes | 2.- Aparatos eléctricos y electrónicos | 3.- Baterías | 4.- Envases y embalajes
				| 5.- Neumáticos
				| 6.- Pilas.'
				text6='Para efectos de la Ley, se considera como productor a la persona que (i) enajena un producto prioritario por primera vez en el mercado nacional; (ii) enajena bajo marca propia un producto prioritario adquirido de un tercero que no es el primer distribuidor; o (iii) importa un producto prioritario para su uso profesional.'
			/>
		</>
	);
};

export default Rep;
