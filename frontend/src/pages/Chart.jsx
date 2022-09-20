import React, { useEffect, useContext, useState } from 'react';
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
	const [percentage, setPercentage] = useState(0);
	const navigate = useNavigate();

	useEffect(() => {
		setPageTitle('Chart');

		console.log(data);

		let total = 0;
		for (const key in data) {
			total += data[key];
		}
		if (total !== 0) {
			let rounded = Math.round((total * 100) / 24);
			setPercentage(rounded);
		}

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
				data: data,
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
				ticks: {
					stepSize: 0.5,
				},
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
					{percentage === 0 ? (
						<p className='font-black text-70 text-primary leading-70'>SIN DATOS</p>
					) : (
						<p className='font-black text-70 text-primary leading-70'>{percentage} %</p>
					)}
					<Button
						title={percentage === 0 ? 'Realizar análisis' : 'Repetir análisis'}
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
