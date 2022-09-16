import React from 'react';

import Button from '../UI/Button';

const MiddleC = ({ text1, text2, text3, text4, text5 }) => {
	const clickHandler = () => {
		console.log('click');
	};
	return (
		<section className='flex flex-row justify-around items-center h-middle-b bg-res-1'>
			<div className='w-1/2 p-20'>
				<p className='text-70 font-black text-secondary leading-70'>{text1}</p>
				<p className='text-70 font-black text-secondary leading-70'>{text2}</p>
				<p className='text-70 font-black text-secondary leading-70'>{text3}</p>
			</div>
			<div className='flex flex-col justify-center w-1/2 p-20'>
				<p className='text-secondary text-18 leading-18'>{text4}</p>
				<p className='text-secondary text-18 leading-18 mt-4'>{text5}</p>
				<Button
					title='Consultora Beloop'
					type='button'
					mode='secondary'
					onClick={clickHandler}
				/>
			</div>
		</section>
	);
};

export default MiddleC;
