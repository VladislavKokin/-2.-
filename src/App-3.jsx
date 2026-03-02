import { useState } from 'react';
import styles from './calculator.module.css';

import './index.css'

export const App = () => {
	const NUMS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
	const SIGN = ['+', '-', '*', '/'];

	const [operand1, setOperand1] = useState('');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');

	const clickNumbers = (digit) => {
		if (!operator) {
			setOperand1((prev) => prev + digit);
		} else {
			setOperand2((prev) => prev + digit);
		}
	};
		

	const calculate = () => {
		const firstDigit = Number(operand1);
		const secondDigit = Number(operand2);

		let result = null;
		switch (operator) {
			case '+':
				result = firstDigit + secondDigit;
				break;
			case '-':
				result = firstDigit - secondDigit;
				break;
			case '*':
				result = firstDigit * secondDigit;
				break;
			case '/':
      			result = secondDigit !== 0 ? firstDigit / secondDigit : 'Ошибка';
      			break;
    		default:
      			return;
		}
		setOperand1(String(result));
		setOperator('');
		setOperand2('');
	};

    const reset = () => {
        setOperand1('');
		setOperator('');
		setOperand2('');
    }

	return (
		<div className={`${styles.container} ${styles.wrapper}`}>
			<div className={styles.spot_1}></div>
			<div className={styles.resultContainer}>
				<h1 className={styles.activeComputing}>{calculate}</h1>
				<p className={styles.activeComputing}>
					{operand1}
					{operator}
					{operand2}
				</p>
			</div>
			<div className={styles.buttonsContainer}>
				<button onClick={() => reset()} className={`${styles.buttons} ${styles.reset}`}>C</button>
				{NUMS.map((item) => (
					<button onClick={() => clickNumbers(item)} className={`${styles.buttons} ${styles.buttonsNumb}`}>{item}</button>
				))}
				{SIGN.map((item) => (
					<button onClick={() => setOperator(item)} className={`${styles.buttons} ${styles.buttonsSign}`}>{item}</button>
				))}
				<button onClick={calculate} className={styles.buttons}>=</button>
			</div>
		</div>
	);
}

export default App