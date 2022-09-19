import { useState } from 'react';

import MiniCard from '../UI/MiniCard';
import Input from '../UI/Input';

const Question = ({ element, submitHandler, changeHandler }) => {
	return (
		<MiniCard>
			<ul>
				<p>
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
									className='flex flex-col'
								>
									{ele.name}
									<input
										type='radio'
										name={element.id}
										id={ele.id}
										value={ele.score}
										onChange={changeHandler}
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
