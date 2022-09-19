import React from 'react';

import { AnimationOnScroll } from 'react-animation-on-scroll';

import 'animate.css/animate.min.css';

import Button from '../UI/Button';

const MiddleB = ({ color, text1, text2, text4, text5, text6, button, onClick }) => {
	const tBase = 'text-70 font-black text-secondary leading-70';
	const pBase = 'text-secondary text-18 leading-18 text-justify';
	return (
		<section className={color}>
			<AnimationOnScroll animateIn='animate__fadeIn'>
				<section className={`flex flex-row justify-around items-center h-middle-a`}>
					<div className='w-1/2 p-20'>
						<p className={tBase}>{text1}</p>
						<p className={tBase}>{text2}</p>
					</div>
					<div className='flex flex-col justify-center w-1/2 p-20 bg-vector-2 h-full'>
						{text4 && (
							<>
								<p className={pBase}>{text4}</p>
								<br />
								<p className={pBase}>{text5}</p>
								<br />
								<p className={pBase}>{text6}</p>
							</>
						)}
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
