import React from 'react';

const Button = ({ title, type, mode, onClick, position }) => {
	const base =
		'text-25 text-secondary border-button border-solid border-button rounded-button p-button leading-25 font-black shadow-2xl mt-2';

	return (
		<div className={position}>
			<button
				className={`${base} ${
					mode === 'primary' ? 'bg-quaternary' : 'bg-secondary'
				} hover:bg-primary`}
				type={type}
				onClick={onClick}
			>
				{title}
			</button>
		</div>
	);
};

export default Button;
