import React from 'react';

import { AnimationOnScroll } from 'react-animation-on-scroll';

import 'animate.css/animate.min.css';

import Button from '../UI/Button';

const MiddleB = ({ color, text1, text2, text4, text5, text6, button, onClick }) => {
	return (
		<section className={color}>
			<AnimationOnScroll
				animateIn='animate__fadeIn'
				duration='1.5'
			>
				<section className={`flex flex-row justify-around items-center h-middle-a`}>
					<div className='w-1/2 p-20'>
						<p className='text-70 font-black text-secondary leading-70'>{text1}</p>
						<p className='text-70 font-black text-secondary leading-70'>{text2}</p>
					</div>
					<div className='flex flex-col justify-center w-1/2 p-20 bg-vector-2 h-full'>
						<p className='text-secondary text-18 leading-18'>{text4}</p>
						<br />
						<p className='text-secondary text-18 leading-18'>{text5}</p>
						<br />
						<p className='text-secondary text-18 leading-18'>{text6}</p>
						{button && (
							<Button
								title={button}
								type='button'
								mode='primary'
								onClick={onClick}
							/>
						)}
					</div>
				</section>
			</AnimationOnScroll>
		</section>
	);
};

export default MiddleB;
