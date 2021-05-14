import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { create, edit, remove, toggleComplete } from './TodoSlice'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Row } from 'react-bootstrap';

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
        <Container fluid>
            <Row className="justify-content-center">
                <Col className="mt-5" sm={3}>
            <form className="input-group" onSubmit={handleSubmit}>
                <input className="form-control" onChange={e => setInputText(e.target.value)} value={inputText} placeholder="Grab food for dog..."/> 
                <button className="btn btn-success" type="submit">Create Todo</button>
            </form>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col sm={3}>
            {todos.map(todo =>(
                <Card className={todo.isComplete ? "bg-success text-light mt-2" : "bg-dark text-light mt-2"} key={todo.id}>
                    {isEditingTodo === todo.id ? ( <form onSubmit={handleUpdate}>
                        <input onChange={e => setEditText(e.target.value)} value={editText}/>
                        <button type="submit">Edit</button>
                         </form>) : <div>
                    {todo.description} {todo.isComplete ? "DONE" : ""}
                    <i className="fa fa-trash text-danger m-2" onClick={handleRemove(todo.id)} aria-hidden="true"></i>
                    <i className="fa fa-pencil m-2" onClick={handleEdit(todo.id)} aria-hidden="true"></i>
                    <i className="fa fa-toggle-on m-2" onClick={handleToggle(todo.id)} aria-hidden="true"></i>
                    </div>}
                </Card>
            ))}
                </Col>
            </Row>
        </Container>
    )
}

export default Todo