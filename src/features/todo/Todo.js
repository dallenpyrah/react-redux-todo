import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { create, edit, remove, toggleComplete } from './TodoSlice'

const Todo = () => {
    const [inputText, setInputText] = useState('')
    const [editText, setEditText] = useState('')
    const [isEditingTodo, setIsEditingTodo] = useState(-1)
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)

    const handleSubmit = e => {
        e.preventDefault()
        // TODO: Finish this todo submit 
        dispatch(create(inputText))
        setInputText('')
    }

    // Had to put in an (e) event and then a prevent default because when I created a todo it would also delete it automatically 
    
    const handleRemove = (id) => (e) => {
        e.preventDefault()
        dispatch(remove(id))
    }

    const handleToggle = (id) => (e) => {
        e.preventDefault()
        dispatch(toggleComplete(id))
    }

    const handleEdit = (id) => (e) => {
        e.preventDefault()
        setIsEditingTodo(id)
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(edit({ id: isEditingTodo, description: editText }))

        setIsEditingTodo(-1)
        setEditText('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={e => setInputText(e.target.value)} value={inputText}/> 
                <button type="submit">Create Todo</button>
            </form>
            {todos.map(todo =>(
                <div key={todo.id}>
                    {isEditingTodo === todo.id ? ( <form onSubmit={handleUpdate}>
                        <input onChange={e => setEditText(e.target.value)} value={editText}/>
                        <button type="submit">Edit</button>
                         </form>) : <div>
                    {todo.description} {todo.isComplete ? "DONE" : ""}
                    <button onClick={handleRemove(todo.id)}>Delete</button>
                    <button onClick={handleToggle(todo.id)}>Toggle</button>
                    <button onClick={handleEdit(todo.id)}>Edit</button>
                    </div>}
                </div>
            ))}
        </div>
    )
}

export default Todo