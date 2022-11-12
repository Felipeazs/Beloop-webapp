import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../context/user-context'

//components
import Hero from '../components/layout/Hero';
import MiddleA from '../components/layout/MiddleA';
import MiddleB from '../components/layout/MiddleB';
import MiddleC from '../components/layout/MiddleC';

const Inicio = () => {
    const { isLoggedIn, userId } = useContext(AuthContext)
    const navigate = useNavigate();

    const clickHandler = () => { 
        if(isLoggedIn){
            navigate(`/analisis/user/${userId}`)
        } else {
            navigate('/sesion')
        }
    }

    return (
        <>
            <Hero
                paragraphs={[
                    'SOMOS',
                    'LOOP',
                    'TEST',
                    'Plataforma digital que ayuda a la sistematización de métricas y estándares para la industria del packaging en términos de economía circular y legislación asociada.',
                ]}
                heroImage='bg-heroImage1'
                image='/images/recurso1.webp'
                mode='primary'
                onClick={clickHandler}
            />
            <div className='h_line'></div>
            <MiddleA
                title='LOOPSTEST UN PROYECTO DE BELOOP'
                images={[
                    { url: '/logos/logo-2-md.svg', size: '320' },
                    { url: '/logos/logo-3-md.svg', size: '260' },
                ]}
            />
            <div className='h_line'></div>
            <MiddleB
                color='bg-primary'
                text1='¿En Qué Consiste'
                text2='La Ley REP?'
                text4='La Ley N° 20.920, Ley Marco para la Gestión de Residuos, la Responsabilidad
				Extendida del Productor y Fomento al Reciclaje (“Ley REP”), fue publicada en el
				Diario Oficial el 1° de junio de 2016.'
                button='Ley REP'
                onClick={() => navigate('/ley-rep')}
            />
            <div className='h_line'></div>
            <MiddleC
                text1='¿Cómo Cumplir'
                text2='Con La Normativa'
                text3='De La Ley REP?'
                text4='A partir de un sistema de packaging actual, buscamos identificar 
				oportunidades de ecoinnovación para agregar valor a tu empresa, utilizando un procedimiento estudiado y desarrollado por Beloop.'
                text5='Disminución de peso  |  Reducción de costos  |  Cumplimiento de la legislación ambiental  |
				  Aumento de la calidad de productos
				   |  Mejoras en la imagen de marca.'
                title='Consultora Beloop'
                onClick={() => {
                    window.location.href = 'https://www.beloop.cl/';
                }}
            />
        </>
    );
};

export default Inicio;
