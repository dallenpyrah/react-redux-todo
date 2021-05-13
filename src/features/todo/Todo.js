import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { create, edit, remove, toggleComplete } from './TodoSlice'

const Todo = () => {
    const [inputText, setInputText] = useState('')
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)

    const handleSubmit = e => {
        e.preventDefault()
        // TODO: Finish this todo submit 
        dispatch(create(inputText))
        setInputText('')
    }
    
    const handleRemove = (id) => (e) => {
        e.preventDefault()
        dispatch(remove(id))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={e => setInputText(e.target.value)} value={inputText}/> 
                <button type="submit">Create Todo</button>
            </form>
            {todos.map(todo =>(
                <div key={todo.id}>
                    {todo.description} {todo.isComplete ? "DONE" : ""}
                    <button onClick={handleRemove(todo.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default Todo