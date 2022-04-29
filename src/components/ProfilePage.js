import React from 'react'
import { Row, Col, Button, Image } from 'react-bootstrap'

const ProfilePage = ({ profileTodo, todolists, handleTodolist, delete1, handleDelete, notes, handleNotebook, handleDeletee, reminders, handleCalender, handleDeleteee }) => {
  return (
    <div>
        {
            profileTodo && <div className="profile">
                <div>
                    <p className="font-500 font-18 text-secondary my-2 d-none d-md-block"></p>
                    <p className="font-500 font-14 text-secondary my-2 d-md-none"></p>
                </div>
                <div className="p-2">
                    <div>
                        <p className="font-500 font-18 text-secondary my-2 d-none d-md-block">Todolist</p>
                        <p className="font-500 font-14 text-secondary my-2 d-md-none">Todolist</p>
                        {todolists.length === 0 ? <div>
                            <p className="font-500 font-18 text-danger my-2 d-none d-md-block">You have nothing on your todolist</p>
                            <p className="font-500 font-14 text-danger my-2 d-md-none">You have nothing on your todolist</p>
                            <Button variant="success" className="text-center" onClick={handleTodolist}>
                                Create todolist
                            </Button>
                        </div> : todolists.map(todo =>(
                            <Row className="my-2" key={todo.id}>
                                <Col className="font-300 font-14 pointer text-secondary">{todo.day}</Col>
                                <Col className="font-300 font-14 pointer text-secondary">{todo.note}</Col>
                                <Col ><Image src= {delete1} className="font-300 font-14 delete" id={todo.id} onClick={handleDelete} fluid/></Col>
                            </Row>
                        ))}
                        </div>
                    <div>
                        <p className="font-500 font-18 text-secondary my-2 d-none d-md-block">My notes</p>
                        <p className="font-500 font-14 text-secondary my-2 d-md-none">My notes</p>
                        {
                        notes.length === 0 ? <div>
                            <p className="font-500 font-18 text-danger my-2 d-none d-md-block">You have no notes</p>
                            <p className="font-500 font-14 text-danger my-2 d-md-none">You have no notes</p>
                            <Button variant="success" className="text-center" onClick={handleNotebook}>
                                Write a note
                            </Button>
                        </div> :
                        notes.map(note => (
                            <Row className="my-2" key={note.id}>
                                <Col className="font-500 font-18 d-none d-md-block text-secondary">{note.note}</Col>
                                <Col className="font-300 font-14 d-md-none text-secondary">{note.note}</Col>
                                <Col><Image src= {delete1} id={note.id} className="delete" onClick={handleDeletee} fluid/></Col>
                            </Row>
                        ))
                        }
                    </div>
                    <div className="mb-10">
                        <p className="font-500 font-18 text-secondary my-2 d-none d-md-block">Reminders</p>
                        <p className="font-500 font-14 text-secondary my-2 d-md-none">Reminders</p>
                        {reminders.length === 0 ? <div>
                                <p className="font-500 font-18 text-danger my-2 d-none d-md-block">You have nothing on reminders</p>
                                <p className="font-500 font-14 text-danger my-2 d-md-none">You have nothing on reminders</p>
                                <Button variant="success" className="text-center" onClick={handleCalender}>
                                    Set Reminder
                                </Button>
                            </div> :
                            reminders.map(reminder =>(
                                <Row className="my-2 d-flex justify-content-between" key={reminder.id}>
                                    <Col className="font-500 font-18 d-none d-md-block text-secondary">{reminder.date}</Col>
                                    <Col className="font-300 font-14 d-md-none text-secondary">{reminder.date}</Col>
                                    <Col className="font-500 font-18 d-none d-md-block text-secondary">{reminder.remind}</Col>
                                    <Col className="font-300 font-14 d-md-none text-secondary">{reminder.remind}</Col>
                                    <Col><Image src= {delete1} id={reminder.id} className="delete" onClick={handleDeleteee} fluid/></Col>
                                </Row>
                            ))
                        }
                    </div>
                </div>
            </div>
        }
    </div>
  )
}

export default ProfilePage