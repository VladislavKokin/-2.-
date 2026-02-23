import data from './data.json';
import styles from './app.module.css';;
import './index.css'
import { useState } from 'react';

// Задание #2

export const App = () => {
	// Можно задать 2 состояния — steps и activeIndex

    const [steps] = useState(data)
    const [activeIndex, setActiveIndex] = useState(0)

    const activeStep = steps[activeIndex]

	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала

	const handleBack = () => {
		if(!isFirstStep) {
			setActiveIndex(prev => prev - 1)
		}
	}

	const handleNext = () => {
		if (isLastStep) {
			setActiveIndex(0)
		} else {
			setActiveIndex(prev => prev + 1)
		}
	}

	const isFirstStep = activeIndex === 0;
	const isLastStep = activeIndex === steps.length - 1;

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
                        {activeStep.content}
					</div>
					<ul className={styles['steps-list']}>
                        {steps.map((step, index) => {
							const active = index === activeIndex;
  							const done = index <= activeIndex;
							return (
							<li key={step.id} className={styles['steps-item'] + ' ' + (done ? styles.done : '') + ' ' + (active ? styles.active : '')}>
								<button className={styles['steps-item-button']}>{index + 1}</button>
								{step.title}
							</li>
						)})}
					</ul>
					<div className={styles['buttons-container']}>
						<button onClick={handleBack} className={styles.button} disabled={isFirstStep}>Назад</button>
						<button onClick={handleNext} className={styles.button}>{isLastStep ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App