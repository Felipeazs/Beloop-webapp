import Question from './Question';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Stepper from '../UI/Stepper';

const Questions = ({ pilar, count, nextHandler, backHandler, submitHandler, changeHandler }) => {
	return (
		<Card>
			<Stepper count={count} />
			<div className='flex flex-row justify-around items-center'>
				<p className='text-2xl font-black py-4'>{pilar.nombre}</p>
				<p className='text-25'>{`${count + 1}/6`}</p>
			</div>
			{pilar.questions.map((question) => (
				<Question
					key={question.id}
					element={question}
					changeHandler={changeHandler}
				/>
			))}
			<div className='flex flex-row-reverse justify-between'>
				{count === 5 ? (
					<Button
						type='submit'
						title='Ver Resultados'
						position='text-end'
						mode='primary'
						onClick={submitHandler}
					/>
				) : (
					<Button
						type='button'
						title='Siguiente'
						position='text-end'
						mode='primary'
						onClick={nextHandler}
					/>
				)}
				{count > 0 && (
					<Button
						type='button'
						title='Atrás'
						position='text-start'
						mode='secondary'
						onClick={backHandler}
					/>
				)}
			</div>
		</Card>
	);
};

export default Questions;
