import React from 'react';

import Button from '../UI/Button';

const MiddleB = ({ color, text1, text2, text4, text5, text6, button }) => {
	const clickHandler = () => {
		console.log('click');
	};

	return (
		<section className={`flex flex-row justify-around items-center ${color} h-middle-a`}>
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
						onClick={clickHandler}
					/>
				)}
			</div>
		</section>
	);
};

export default MiddleB;
