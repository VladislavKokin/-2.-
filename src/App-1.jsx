import { useState } from 'react'
import './App.css'

// Задание #1
function App() {
	const [value, setValue] = useState('')
	const [list, setList] = useState([])
	const [error, setError] = useState('')

	const isValueValid = value.length >= 3;

	const onInputButtonClick = () => {
		const promptValue = String(prompt('Введите значения')).trim().toLocaleLowerCase()
		// console.log(promptValue)
		if (promptValue.length < 3) {
			setError()
		} else {
			setValue(promptValue)
			setError("")
		}
	 }

	const onAddButtonClick = () => {
		const updatedList = [...list, {id: Date.now().toString(), value: value, createdTime: new Date()}]

		if(!isValueValid) {
			return
		}
		setList(updatedList)
		setError('')
		// console.log(updatedList)
	}

  return (
		<>
			<div className="app">
				<h1 className="page-heading">Ввод значения</h1>
				<p className="no-margin-text">
					Текущее значение <code>value</code>: "<output className="current-value">{value}</output>"
				</p>
				{error !== "" && <div className="error">
					Введенное значение должно содержать минимум 3 символа
				</div>}
				<div className="buttons-container">
					<button onClick={()=>onInputButtonClick()} className="button">Ввести новое</button>
					<button onClick={()=>onAddButtonClick()} className="button" disabled={!isValueValid}>
						Добавить в список
					</button>
				</div>
				<div className="list-container">
					<h2 className="list-heading">Список:</h2>
					{list.length === 0 && <p className="no-margin-text">Нет добавленных элементов</p>}
					<ul className="list">
						{list.map((item) => (
							<li key={item.id} className="list-item">{item.value}{', '}{item.createdTime.toLocaleString()}</li>
						))}
					</ul>
				</div>
			</div>
		</>
  );
}

export default App