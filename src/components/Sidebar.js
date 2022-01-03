import React, { useEffect, useState } from 'react'
import { Container, Image, Row, Col, Form, Button, FloatingLabel } from 'react-bootstrap'
import profile1 from '../images/profile.png'
import calender1 from '../images/calender.png'
import notebook1 from '../images/notebook.png'
import todolist1 from '../images/todolist.png'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../index'
import { getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'


const Sidebar = () => {

    initializeApp(firebaseConfig);
    const db = getFirestore();
    const colRef = collection(db, 'todolist')
    const noteRef = collection(db, 'notebooks')

    useEffect(() => {
        onSnapshot(colRef, (snapshot) => {
            snapshot.docs.forEach(doc => {
                ontodo.push({ ...doc.data(), id: doc.id})
            })
            setWait(true);
            console.log(ontodo);
        })
        onSnapshot(noteRef, (snapshot) => {
            snapshot.docs.forEach(doc => {
                notes.push({ ...doc.data(), id: doc.id})
            })
            setWaitt(true);
            console.log(notes);
        })
    }, []) 
    
    const [waitt, setWaitt] = useState(false)
    const [wait, setWait] = useState(false);
    const [profile, setProfile] = useState(true);
    const [calender, setCalender] = useState(false);
    const [notebook, setNotebook] = useState(false);
    const [todolist, setTodolist] = useState(false);
    const [addtodo, setAddtodo] = useState(false);
    const [calenderTodo, setCalenderTodo] = useState(false)
    const [notebookTodo, setNotebookTodo] = useState(false);
    const [listtodo, setListtodo] = useState(false);
    const [profileTodo, setProfileTodo] = useState(false)
    const [ontodo, setOntodo] = useState([]);
    const [notes, setNotes] = useState([]);
    const [task, setTask] = useState('');
    const [note, setNote] = useState('');
    const [day, setDay] = useState('sunday')
    const [notebookk, setNotebookk] = useState('')
    const [dateState, setDateState] = useState(new Date())

    const handleSubmit = (e) => {
        e.preventDefault();
        addDoc(colRef, {task, note, day})
            .then(() => {
                setTask('');
                setNote('');
                setDay('');
            })
            handleListtodo();
    }

    const handleSubmitt = (e) => {
        e.preventDefault();
        addDoc(noteRef, {note: notebookk})
            .then(() => {
                setNotebookk('')
            })
            handleNotebookTodo();
    }

    const refreshPage = () => {
        window.location.reload();
    }

    const handleDelete =  (e) => {
        const docRef = doc(db, 'todolist', e.target.id)
        
        deleteDoc(docRef)
            .then(() => {
                console.log('deleted')
                refreshPage();
            })  
        
    }

    const handleDeletee =  (e) => {
        const docuRef = doc(db, 'notebooks', e.target.id)
        
        deleteDoc(docuRef)
            .then(() => {
                console.log('deleted')
                refreshPage();
            })  
    }

    const handleAddtodo = () => {
        setProfileTodo(false)
        setAddtodo(true);
        setListtodo(false);
        setCalenderTodo(false)
        setNotebookTodo(false)
    }

    const handleListtodo = () => {
        setProfileTodo(false)
        setAddtodo(false);
        setListtodo(true);
        setCalenderTodo(false)
        setNotebookTodo(false)
    }

    const handleProfileTodo = () => {
        setProfileTodo(true)
        setAddtodo(false)
        setListtodo(false)
        setCalenderTodo(false)
        setNotebookTodo(false)
    }

    const handleCalenderTodo = () => {
        setProfileTodo(false)
        setAddtodo(false)
        setListtodo(false)
        setCalenderTodo(true)
        setNotebookTodo(false)
    }

    const handleNotebookTodo =() => {
        setProfileTodo(false)
        setAddtodo(false)
        setListtodo(false)
        setCalenderTodo(false)
        setNotebookTodo(true)
    }
 
    const handleProfile = () => {
        setProfile(true);
        setCalender(false);
        setNotebook(false);
        setTodolist(false);
    }

    const handleCalender = () => {
        setProfile(false);
        setCalender(true);
        setNotebook(false);
        setTodolist(false);
    }

    const handleNotebook = () => {
        setProfile(false);
        setCalender(false);
        setNotebook(true);
        setTodolist(false);
    }

    const handleTodolist = () => {
        setProfile(false);
        setCalender(false);
        setNotebook(false);
        setTodolist(true);
    }

    const changeDate = (e) => {
        setDateState(e)
        const now = new Date();
        console.log(now.getTime(), dateState.getTime());
        if (dateState.getTime() === now.getTime()){
            console.log('hello there')
        }
    }

    return (
        <div>
            <Container fluid classname="bg-white">
                <Row>
                    <div className="d-flex justify-content-between shadow-sm poss d-md-none bg-light">
                        <Image src={profile1} onClick={handleProfile} className="iconsm my-3" fluid/>
                        <Image src={calender1} onClick={handleCalender} className="iconsm my-3" fluid/>
                        <Image src={notebook1} onClick={handleNotebook} className="iconsm my-3" fluid/>
                        <Image src={todolist1} onClick={handleTodolist} className="iconsm my-3" fluid/>
                    </div>
                </Row>
                <Row>
                    <Col xs={12} md={2} lg={2}>
                        <div className="d-none d-md-flex justify-content-between flex-md-column align-items-center shadow-sm p-4">
                            <Image src={profile1} onClick={handleProfile} className="icon my-3" fluid/>
                            <Image src={calender1} onClick={handleCalender} className="icon my-3" fluid/>
                            <Image src={notebook1} onClick={handleNotebook} className="icon my-3" fluid/>
                            <Image src={todolist1} onClick={handleTodolist} className="icon my-3" fluid/>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={2} lg={2} className="shadow-sm">
                        {profile && <div>
                            <p className="font-500 font-20 pointer d-none d-md-block text-secondary" onClick={handleProfileTodo}>Profile</p>
                            <p className="font-500 font-16 pointer d-md-none text-secondary" onClick={handleProfileTodo}>Profile</p>
                        </div>}
                        {calender && <div>
                            <p className="font-500 font-20 pointer text-secondary d-none d-md-block" onClick={handleCalenderTodo}>Set Reminder</p>
                            <p className="font-500 font-20 pointer text-secondary d-none d-md-block" onClick={handleCalenderTodo}>Events</p>
                            <p className="font-500 font-16 pointer text-secondary d-md-none" onClick={handleCalenderTodo}>Set Reminder</p>
                            <p className="font-500 font-16 pointer text-secondary d-md-none" onClick={handleCalenderTodo}>Events</p>
                        </div>}
                        {notebook && <div>
                            <p className="font-500 font-20 pointer text-secondary d-none d-md-block" onClick={handleNotebookTodo}>Notebook</p>
                            <p className="font-500 font-16 pointer text-secondary d-md-none" onClick={handleNotebookTodo}>Notebook</p>
                        </div>}
                        {todolist && <div>
                            <p className="font-500 font-20 pointer text-secondary d-none d-md-block" onClick={handleListtodo}>Todo list</p>
                            <p className="font-500 font-20 pointer text-secondary d-none d-md-block" onClick={handleAddtodo}>Add Todo</p>
                            <p className="font-500 font-16 pointer text-secondary d-md-none" onClick={handleListtodo}>Todo list</p>
                            <p className="font-500 font-16 pointer text-secondary d-md-none" onClick={handleAddtodo}>Add Todo</p>
                        </div>}
                    </Col>
                    <Col xs={12} sm={6} md={8} lg={8} className="py-md-1 ps-md-2 py-3 shadow-sm">
                        
                            {addtodo && <Row>
                                <Col xs={12} sm={6} md={8} lg={6} className="d-md-flex justify-content-center">
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="text" placeholder="Task?" value={task} onChange={e => setTask(e.target.value)} required />
                                        </Form.Group>
                                        <FloatingLabel controlId="floatingTextarea2" label="Notes">
                                            <Form.Control
                                            as="textarea"
                                            required
                                            placeholder="Leave a comment here"
                                            className="mb-3" value={note} onChange={e => setNote(e.target.value)}
                                            style={{ height: '100px' }}
                                            />
                                        </FloatingLabel>
                                        <Form.Select className="mb-3" value={day} onChange={e => setDay(e.target.value)} required>
                                            <option value="Sunday" className="text-secondary">Sunday</option>
                                            <option value="Monday" className="text-secondary">Monday</option>
                                            <option value="Tuesday" className="text-secondary">Tuesday</option>
                                            <option value="Wednesday" className="text-secondary">Wednesday</option>
                                            <option value="Thursday" className="text-secondary">Thursday</option>
                                            <option value="Friday" className="text-secondary">Friday</option>
                                            <option value="Saturday" className="text-secondary">Saturday</option>
                                        </Form.Select>
                                        <Button variant="success" className="text-center w-100" type="submit">
                                            Update list
                                        </Button>
                                    </Form>
                                </Col>
                            </Row>}
                            {listtodo && <div className="p-2">
                                <Row className="d-flex justify-content-between d-none d-md-block text-secondary">
                                    <Col className="font-500 font-18 pointer text-secondary">Day</Col>
                                    <Col className="font-500 font-18 pointer text-secondary">Note</Col>
                                    <Col className="font-500 font-18 pointer text-secondary">Task</Col>
                                    <Col></Col>
                                </Row>
                                <Row className="d-flex justify-content-between d-md-none">
                                    <Col className="font-500 font-16 pointer text-secondary">Day</Col>
                                    <Col className="font-500 font-16 pointer text-secondary">Note</Col>
                                    <Col className="font-500 font-16 pointer text-secondary">Task</Col>
                                    <Col></Col>
                                </Row>
                                {
                                    wait && ontodo.map(todo =>(
                                        <Row className="my-2" key={todo.id}>
                                            <Col className="font-300 font-14 pointer text-secondary">{todo.day}</Col>
                                            <Col className="font-300 font-14 pointer text-secondary">{todo.note}</Col>
                                            <Col className="font-300 font-14 pointer text-secondary">{todo.task}</Col>
                                            <Col ><Button id={todo.id} className="font-300 font-14" onClick={handleDelete} variant="danger">Delete</Button></Col>
                                        </Row>
                                    ))
                                }
                            </div>}
                            {
                                calenderTodo && <div className="calender">
                                    <p className="d-md-none d-flex justify-content-center font-300 font-14">Set a reminder for&nbsp;<span className='fw-bold text-success'>{moment(dateState).format('Do MMMM YYYY')}</span></p>
                                    <div className="d-none d-md-flex justify-content-center">
                                        <Calendar value={dateState} onChange={changeDate} className="text-success m-5 border rounded" />
                                    </div>
                                    <div className="d-md-none d-flex justify-content-center">
                                        <Calendar value={dateState} onChange={changeDate} className="text-success m-5 border rounded" />
                                    </div>
                                    <p className="d-none d-md-flex justify-content-center">Set a reminder for&nbsp;<span className='fw-bold text-success'>{moment(dateState).format('Do MMMM YYYY')}</span></p>
                                    
                                </div>
                            }
                            {
                                notebookTodo && <div className="notebook p-3">
                                    <div className='my-4'>
                                        <Form onSubmit={handleSubmitt}>
                                            <FloatingLabel controlId="floatingTextarea2" label="Note">
                                                <Form.Control as="textarea" placeholder="Leave a comment here" value={notebookk} onChange={(e) => setNotebookk(e.target.value)} style={{ height: '200px' }}/>
                                            </FloatingLabel>
                                            <Button variant="success" className="text-center w-100" type="submit">
                                                Save
                                            </Button>
                                        </Form>
                                    </div>
                                    <p className="font-500 font-18 text-secondary my-2 d-none d-md-block">My Notes</p>
                                    <p className="font-500 font-14 text-secondary my-2 d-md-none">My Notes</p>
                                    {
                                        waitt && notes.map(note => (
                                            <div className="my-2 d-flex justify-content-between" key={note.id}>
                                                <p className="font-500 font-18 d-none d-md-block text-secondary">{note.note}</p>
                                                <p className="font-300 font-14 d-md-none text-secondary">{note.note}</p>
                                                <Button id={note.id} onClick={handleDeletee} variant="danger">Delete</Button>
                                            </div>
                                        ))
                                    }
                                </div>
                            }
                            {
                                profileTodo && <div className="profile">
                                    <div>
                                        <p className="font-500 font-18 text-secondary my-2 d-none d-md-block">Hey there</p>
                                        <p className="font-500 font-14 text-secondary my-2 d-md-none">Hey there</p>
                                    </div>
                                </div>
                            }
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Sidebar
