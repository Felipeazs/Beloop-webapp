import React from 'react';

import styles from './Stepper.module.css';

const Stepper = ({ items, count }) => {
	return (
		<ol className={styles['c-stepper']}>
			{/* {items.map((item) => (
				<li
					className={styles['c-stepper__item']}
					key={item.id}
				>
					<h3 className={styles['c-stepper__title']}>{item.nombre}</h3>
				</li>
			))} */}
		</ol>
	);
};

export default Stepper;
