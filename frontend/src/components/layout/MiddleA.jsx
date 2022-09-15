import React from 'react';

const MiddleA = ({ title, images }) => {
	return (
		<section className='flex flex-col justify-center items-center gap-20 h-middle-a'>
			<p className='font-black text-paragraph-3'>{title}</p>
			<div className='flex flex-row gap-96'>
				{images &&
					images.map((image, i) => {
						return (
							<img
								key={i}
								src={image.url}
								alt='resource'
								width={image.size}
							/>
						);
					})}
			</div>
		</section>
	);
};

export default MiddleA;
