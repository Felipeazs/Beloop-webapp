import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query'

import AuthContext from '../context/user-context'

import useHttpClient from '../hooks/http-hook'
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
    const { token } = useContext(AuthContext)
    const { resultId } = useParams()
    const { getUserAnalisis } = useHttpClient()
    const { data } = useQuery(['results'], () => getUserAnalisis(resultId, token))
    const [percentage, setPercentage] = useState(0);
    const [dataPoints, setDataPoints] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        setDataPoints([])

        if (data) {
            let total = 0;
            const results = data.results
            for (const key in results) {
                total += +results[key];

                setDataPoints(prevState =>
                    [...prevState, +results[key]])
            }
            if (total !== 0) {
                let rounded = Math.round((total * 100) / 24);
                setPercentage(rounded);
            }
        }
    }, [data])

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
                data: dataPoints.map(data => data),
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
