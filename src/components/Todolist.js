import React from 'react'
import { Col, Image, Button, Row } from 'react-bootstrap'

const Todolist = ({ listtodo, todolists, handleAddtodo, delete1, handleDelete }) => {
  return (
    <div>
        {listtodo && 
            <div className="p-2">
            {todolists.length === 0 ? <div>
                <p className="font-500 font-18 text-danger my-2 d-none d-md-block">You have nothing on your todolist</p>
                <p className="font-500 font-14 text-danger my-2 d-md-none">You have nothing on your todolist</p>
                <Button variant="success" className="text-center" onClick={handleAddtodo}>
                    Create todolist
                </Button>
            </div>: todolists.map(todo =>(
                    <Row className="my-2" key={todo.id}>
                        <Col className="font-300 font-14 pointer text-secondary">{todo.day}</Col>
                        <Col className="font-300 font-14 pointer text-secondary">{todo.note}</Col>
                        <Col ><Image src={delete1} className="font-300 font-14 delete" id={todo.id} onClick={handleDelete} fluid/></Col>
                    </Row>
                ))
            }
            </div>  
        }
    </div>
  )
}

export default Todolist