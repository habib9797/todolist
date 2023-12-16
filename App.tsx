import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import ToDoList from './components/ToDoList'
import { useSelector } from 'react-redux'
import { RootState } from './store'
import './components/CostItem.css'

function App() {
	const [count, setCount] = useState(0)
	const list = useSelector((state: RootState) =>
		state.todo.list.filter(item => item.status == 'done')
	)

	return (
		<div className='cost-item'>
			<h2>Выполненные задачи : {list.length}</h2>
			<Form />
			<ToDoList />
		</div>
	)
}

export default App
