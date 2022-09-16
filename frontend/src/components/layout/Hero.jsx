import React, { useState, useEffect } from 'react';

import Button from '../UI/Button';

const Hero = ({ heroImage, image, paragraphs, mode, onClick }) => {
	const [inProp, setInProp] = useState(false);
	console.log(heroImage);

	useEffect(() => {
		const timer = setTimeout(() => setInProp(true), 500);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<>
			<div className={`flex flex-row justify-center items-center ${heroImage} h-hero`}>
				<div className='text-paragraph-1 w-1/2 pl-32'>
					<p className='text-secondary font-black text-70 leading-70'>{paragraphs[0]}</p>
					<p className='text-secondary font-black text-70 leading-70'>
						{paragraphs[1]}
						<span className='text-secondary font-normal text-70 leading-70'>
							{paragraphs[2]}
						</span>
					</p>
					<p className='text-secondary text-18 leading-18'>{paragraphs[3]}</p>
					<Button
						mode={mode}
						type='button'
						title='Realizar análisis'
						onClick={onClick}
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
