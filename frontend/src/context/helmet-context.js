import { createContext, useState } from 'react';

export const HelmetContext = createContext({
	headerTitle: '',
	data: [],
	setRespuestas: () => {},
	setPageTitle: (title) => {},
});

const HelmetProvider = ({ children }) => {
	const [title, setTitle] = useState('');
	const [data, setData] = useState([0, 0, 0, 0, 0, 0]);

	const pageTitle = (t) => {
		setTitle(t);
	};

	const respuestas = (resp) => {
		console.log(resp);
		const respuestas = [];
		let total = 0;
		for (let r in resp) {
			if (r === '1 ' || r === '2' || r === '3') {
				total += resp[r];
			}
		}

		if (total !== 0) {
			total = total / 3;
		}
		respuestas.push(total);

		total = 0;
		for (let r in resp) {
			if (r === '4' || r === '5' || r === '6') {
				total += resp[r];
			}
		}

		if (total !== 0) {
			total = total / 3;
		}
		respuestas.push(total);

		total = 0;
		for (let r in resp) {
			if (r === '7' || r === '8' || r === '9') {
				total += resp[r];
			}
		}
		if (total !== 0) {
			total = total / 3;
		}
		respuestas.push(total);

		total = 0;
		for (let r in resp) {
			if (r === '10' || r === '11' || r === '12') {
				total += resp[r];
			}
		}
		if (total !== 0) {
			total = total / 3;
		}
		respuestas.push(total);

		total = 0;
		for (let r in resp) {
			if (r === '13' || r === '14' || r === '15' || r === '16') {
				total += resp[r];
			}
		}
		if (total !== 0) {
			total = total / 4;
		}
		respuestas.push(total);

		total = 0;
		for (let r in resp) {
			if (r === '17' || r === '18' || r === '19') {
				total += resp[r];
			}
		}
		if (total !== 0) {
			total = total / 3;
		}
		respuestas.push(total);

		setData(respuestas);
	};

	return (
		<HelmetContext.Provider
			value={{
				setPageTitle: pageTitle,
				headerTitle: title,
				setRespuestas: respuestas,
				data,
			}}
		>
			{children}
		</HelmetContext.Provider>
	);
};

export default HelmetProvider;
