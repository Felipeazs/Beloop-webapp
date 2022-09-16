import React from 'react';

const Button = ({ title, type, mode, onClick }) => {
	const base =
		'text-25 text-secondary border-button border-solid border-button rounded-button p-button leading-25 font-black shadow-lg mt-2';

	return (
		<div>
			<button
				className={`${base} ${mode === 'primary' ? 'bg-quaternary' : 'bg-secondary'}`}
				type={type}
				onClick={onClick}
			>
				{title}
			</button>
		</div>
	);
};

export default Button;
