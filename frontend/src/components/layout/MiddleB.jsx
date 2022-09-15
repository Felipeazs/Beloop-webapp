import React from 'react';

import Button from '../UI/Button';

const MiddleB = ({ color, text1, text2, text4 }) => {
	const clickHandler = () => {
		console.log('click');
	};

	return (
		<section className={`flex flex-row justify-around items-center ${color} h-middle-a`}>
			<div className='w-1/2 p-20'>
				<p className='text-paragraph-1 font-black text-secondary leading-paragraph-1'>
					{text1}
				</p>
				<p className='text-paragraph-1 font-black text-secondary leading-paragraph-1'>
					{text2}
				</p>
			</div>
			<div className='flex flex-col justify-center w-1/2 p-20 bg-vector-2 h-full'>
				<p className='text-secondary text-paragraph-2'>{text4}</p>
				<Button
					title='Ley REP'
					type='button'
					mode='primary'
					onClick={clickHandler}
				/>
			</div>
		</section>
	);
};

export default MiddleB;
