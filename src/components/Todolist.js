import React, { useState, useEffect } from 'react'
import { Col, Image, Button, Row } from 'react-bootstrap'
import axios from 'axios';

const Todolist = ({ listtodo, todolists, handleAddtodo, delete1, handleDelete, todoData, setTodoData }) => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token');
        const config = {
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': `Bearer ${token}`
            }
        };
        const url = 'https://myschedule-api.herokuapp.com/api/v1/tasks';

        axios.get(url, config)
            .then(res => {
                console.log(res)
                setTodoData(res.data.tasks);
            })
    }, [setTodoData]) 

  return (
    <div>
        {listtodo && 
            todoData ?
            <div className="p-2">
            {todoData.length === 0 ? <div>
                <p className="font-500 font-18 text-danger my-2 d-none d-md-block">You have nothing on your todolist</p>
                <p className="font-500 font-14 text-danger my-2 d-md-none">You have nothing on your todolist</p>
                <Button variant="success" className="text-center" onClick={handleAddtodo}>
                    Create todolist
                </Button>
            </div>: todoData.map(todo =>(
                    <Row className="my-2" key={todo._id}>
                        <Col className="font-300 font-14 pointer text-secondary">{todo.task}</Col>
                        <Col className="font-300 font-14 pointer text-secondary">{todo.note}</Col>
                        <Col ><Image src={delete1} className="font-300 font-14 delete" id={todo._id} onClick={handleDelete} fluid/></Col>
                    </Row>
                ))
            }
            </div> : ""
        }
    </div>
  )
}

export default Todolist