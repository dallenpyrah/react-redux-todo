import { createSlice } from '@reduxjs/toolkit'
// We have to import the createSlice from the redux toolkit in order to use it
// THIS IS FOR THE SAKE OF NOT HAVING TO GENERATE AN ID WOULD NEVER DO THIS IN REAL LFIE
let todoId = 1
export const slice = createSlice({
    name: 'todos',
    initialState: [],
    // Here we can just say create instead of createTodo because the name will append onto the end of it like create/todos
    reducers: {
        create: (state, action) => {
            // We have to decustruct the todo here or payload. 
            const { payload } = action
            // If we were not using immer we would have to use return [...state, {}]
            state.push({
                id: todoId,
                description: payload,
                isComplete: false
            })
            todoId++
        },
        edit: (state, action) => {
            const { id, description } = action.payload

            const todoToEdit = state.find(todo => todo.id === id)
            // If we find the todo we want to edit then we will let the description we get back equal that
            if(todoToEdit){
                todoToEdit.description = description
            }
        },
        toggleComplete: (state, action) => {
            const { payload } = action
            const todoToToggle = state.find(todo => todo.id === payload)
            
            if(todoToToggle) {
                todoToToggle.isComplete = !todoToToggle.isComplete
            }
        },
        remove: (state, action) => {
            const { payload } = action
            const index = state.findIndex(todo => todo.id === payload)

            if(index !== -1){
                state.splice(index, 1)
            }
        }
    }
})

// This will deconstruct our actions so that we can have access to just their names. 

export const { create, edit, toggleComplete, remove } = slice.actions

export default slice.reducer