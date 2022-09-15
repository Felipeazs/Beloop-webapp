import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../UI/Button';

const Hero = ({ image, paragraphs }) => {
	const navigate = useNavigate();

	const clickHandler = () => {
		navigate('/analisis');
	};

	return (
		<>
			<div className='flex flex-row justify-center items-center bg-hero-image-1 h-hero'>
				<div className='text-paragraph-1 w-1/2 pl-32'>
					<p className='text-secondary font-black text-paragraph-1 leading-paragraph-1'>
						{paragraphs[0]}
					</p>
					<p className='text-secondary font-black text-paragraph-1 leading-paragraph-1'>
						{paragraphs[1]}
						<span className='text-secondary font-normal text-paragraph-1 leading-paragraph-1'>
							{paragraphs[2]}
						</span>
					</p>
					<p className='text-secondary text-paragraph-2 leading-paragraph-2'>
						{paragraphs[3]}
					</p>
					<Button
						mode='primary'
						type='button'
						title='Realizar análisis'
						onClick={clickHandler}
					/>
				</div>
				<div className='flex flex-col justify-center bg-hero-vector-1 h-full'>
					<img
						src={image}
						alt='resource1'
						className='w-hero-resource'
					/>
				</div>
			</div>
		</>
	);
};

export default Hero;
