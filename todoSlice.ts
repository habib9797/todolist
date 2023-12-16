import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ToDo {
	text: string
	id: number
	status: 'done' | 'at-work' | 'waiting'
}

export interface ToDoState {
	list: ToDo[]
}

const initialState: ToDoState = {
	list: [],
}

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<ToDo>) => {
			state.list.push(action.payload)
		},
		deleteTodo: (state, action: PayloadAction<number>) => {
			state.list.splice(
				state.list.findIndex(arrow => arrow.id === action.payload),
				1
			)
		},
		changeStatus: (
			state,
			action: PayloadAction<{ id: number; status: ToDo['status'] }>
		) => {
			state.list = state.list.map(item => {
				if (item.id == action.payload.id) {
					return {
						...item,
						status: action.payload.status,
					}
				} else {
					return item
				}
			})
		},
	},
})

export const { addTodo, deleteTodo, changeStatus } = todoSlice.actions

export default todoSlice.reducer
