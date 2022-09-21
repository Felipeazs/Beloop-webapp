import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//components
import { HelmetContext } from '../context/helmet-context';
import Questions from '../components/questions/Questions';

//data
import qData from '../data/questions.json';

const Analisis = () => {
	const navigate = useNavigate();
	const { setPageTitle, setRespuestas } = useContext(HelmetContext);

	const [questions, setQuestions] = useState([]);
	const [count, setCount] = useState(0);

	const [valor, setValor] = useState({
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
		6: 0,
		7: 0,
		8: 0,
		9: 0,
		10: 0,
		11: 0,
		12: 0,
		13: 0,
		14: 0,
		15: 0,
		16: 0,
		17: 0,
		18: 0,
		19: 0,
	});

	useEffect(() => {
		setPageTitle('Análisis');

		setQuestions(qData.pilares);
	}, [setPageTitle]);

	const changeHandler = (event) => {
		setValor((prevState) => {
			return {
				...prevState,
				[event.target.name]: +event.target.value,
			};
		});
	};

	const nextHandler = () => {
		setCount(count + 1);
		window.scroll({ top: 400, left: 100, behavior: 'smooth' });
	};

	const submitHandler = (event) => {
		event.preventDefault();

		setRespuestas(valor);

		navigate('/radar');
	};

	const backHandler = () => {
		setCount(count - 1);
		window.scroll({ top: 100, left: 100, behavior: 'smooth' });
	};

	return (
		<>
			<div className='m-24'>
				<p className='font-black text-35'>ANÁLISIS CIRCULAR</p>
				<p className='text-25'>Cumplimiento Ley REP</p>
				<hr className='bg-quaternary h-3 my-10' />
			</div>
			{questions[count] && (
				<Questions
					key={questions[count].id}
					pilar={questions[count]}
					nextHandler={nextHandler}
					backHandler={backHandler}
					count={count}
					changeHandler={changeHandler}
					submitHandler={submitHandler}
				/>
			)}
		</>
	);
};

export default Analisis;
