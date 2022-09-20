import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { HelmetContext } from '../context/helmet-context';
import Button from '../components/UI/Button';

//ChartJS
import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const Chart = () => {
	const { setPageTitle, data } = useContext(HelmetContext);
	const navigate = useNavigate();

	useEffect(() => {
		setPageTitle('Chart');

		console.log(data);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [setPageTitle]);

	const dataChart = {
		labels: [
			'MATERIALIDAD',
			'RECICLABILIDAD',
			'SEPARABILIDAD',
			'LOGÍSTICA',
			['PLAN DE GESTIÓN', 'DE RESIDUOS'],
			'VALORIZACIÓN',
		],
		datasets: [
			{
				label: 'RADAR DE CIRCULARIDAD',
				data: [9, 4, 6, 8, 3, 4],
				fill: true,
				backgroundColor: 'rgb(11, 224, 72, 0.4)',
				borderColor: '#18D17D',
				borderWidth: 2,
			},
		],
	};
	const options = {
		responsive: true,
		aspectRatio: 2,
		scales: {
			r: {
				beginAtZero: true,
				pointLabels: {
					color: '#BDBDBD',
					font: {
						weight: 'bold',
						size: 12,
					},
				},
			},
		},
		plugins: {
			legend: {
				display: true,
				position: 'right',
				align: 'start',
				labels: {
					usePointStyle: true,
					pointStyle: 'rectRounded',
					boxWidth: 100,
					font: {
						weight: 'bold',
					},
				},
			},
		},
	};

	const clickHandler = () => {
		navigate('/analisis');
	};

	return (
		<>
			<div className='m-24'>
				<p className='font-black text-35'>ANÁLISIS CIRCULAR</p>

				<div className='flex flex-row items-center justify-between'>
					{!data ? (
						<p className='font-black text-70 text-primary leading-70'>SIN DATOS</p>
					) : (
						<p>Super datos %</p>
					)}
					<Button
						title='Realizar análisis'
						mode='primary'
						type='button'
						position='text-end'
						onClick={clickHandler}
					/>
				</div>
				<p className='text-25'>Cumplimiento Ley REP</p>
				<hr className='bg-quaternary h-3 my-1' />
			</div>

			<div className='w-1050 mx-auto mb-10'>
				<Radar
					data={dataChart}
					options={options}
				/>
			</div>
		</>
	);
};

export default Chart;
