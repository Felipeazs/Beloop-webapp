import React from 'react';

const Button = ({ title, type, mode }) => {
	const base =
		'text-button text-secondary border-button border-solid border-button rounded-button p-button leading-button font-black';

	return (
		<button
			className={`${base} ${mode === 'primary' ? 'bg-quaternary' : 'bg-secondary'}`}
			type={type}
		>
			{title}
		</button>
	);
};

export default Button;
