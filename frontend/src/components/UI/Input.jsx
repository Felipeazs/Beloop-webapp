import React from 'react';

const Input = (type, element, changeHandler) => {
	return (
		<input
			type={type}
			placeholder='Escribe tu respuesta'
			value={element.score}
			onChange={changeHandler}
			className='border-2 border-gray-300 p-2 rounded-md w-full'
		/>
	);
};

export default Input;
