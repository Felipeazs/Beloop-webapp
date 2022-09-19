import { useState } from 'react';

import MiniCard from '../UI/MiniCard';
import Input from '../UI/Input';

const Question = ({ element, submitHandler, changeHandler }) => {
	return (
		<MiniCard>
			<ul>
				<p className='text-18 text-justify'>
					{element.id}.- {element.question}
				</p>

				<form
					onSubmit={submitHandler}
					className='flex flex-col'
				>
					<li
						key={element.id}
						className='flex flex-row justify-around py-8'
					>
						{element.scores ? (
							element.scores.map((ele, i) => (
								<label
									key={i}
									htmlFor={ele.id}
									className='flex flex-col items-center cursor-pointer'
								>
									{ele.name}
									<input
										type='radio'
										name={element.id}
										id={ele.id}
										value={ele.score}
										onChange={changeHandler}
										className='w-5 h-5 cursor-pointer'
									/>
								</label>
							))
						) : (
							<Input
								type='text'
								placeholder='Escribe tu respuesta'
								name={element.id}
								onChange={changeHandler}
							/>
						)}
					</li>
				</form>
			</ul>
		</MiniCard>
	);
};

export default Question;
