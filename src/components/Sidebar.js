import React, { useEffect, useState, useRef } from 'react'
import { Container, Image, Row, Col, Form, Button, FloatingLabel } from 'react-bootstrap'
import profile1 from '../images/profile.png'
import calender1 from '../images/calender.png'
import notebook1 from '../images/notebook.png'
import todolist1 from '../images/todolist.png'
import delete1 from '../images/delete1.png'
import profilegreen from '../images/profilegreen.png'
import calendergreen from '../images/calendergreen.png'
import notebookgreen from '../images/notebookgreen.png'
import todolistgreen from '../images/todolistgreen.png'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import useLocalStorage from './useLocalStorage'


const Sidebar = () => {
    useEffect(() => {
        handleProfile();
    }, []) 

    const reminderRef = useRef(null);
    const notebookRef = useRef(null);
    const [profileImg, setProfileImg] = useState(profilegreen);
    const [calenderImg, setCalenderImg] = useState(calender1);
    const [notebookImg, setNotebookImg] = useState(notebook1);
    const [todolistImg, setTodolistImg] = useState(todolist1);
    const [profile, setProfile] = useState(true);
    const [calender, setCalender] = useState(false);
    const [notebook, setNotebook] = useState(false);
    const [todolist, setTodolist] = useState(false);
    const [addtodo, setAddtodo] = useState(false);
    const [calenderTodo, setCalenderTodo] = useState(false)
    const [notebookTodo, setNotebookTodo] = useState(false);
    const [listtodo, setListtodo] = useState(false);
    const [profileTodo, setProfileTodo] = useState(false);
    const [note, setNote] = useState('');
    const [display, setDisplay] = useState(true);
    const [reminder, setReminder] = useState('')
    const [day, setDay] = useState('Sunday')
    const [notebookk, setNotebookk] = useState('')
    const [dateState, setDateState] = useState(new Date())
    const [todolists, setTodolists] = useLocalStorage("todos", [
        
    ]);
    const [notes, setNotes] = useLocalStorage("notes", [
        
    ])
    const [reminders, setReminders] = useLocalStorage("reminders", [

    ]);


    const handleRef1 = () => {
        reminderRef.current.focus();
    }
    const handleRef2 = () => {
        notebookRef.current.focus();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const nextId = todolists.length > 0 ? Math.max(...todolists.map(t => t.id)) + 1 : 0 
        const newTodo = {id: nextId, note, day}
        setTodolists([...todolists, newTodo])
        handleListtodo();
        setNote('')
        setDay('')
    }

    const handleSubmitt = (e) => {
        e.preventDefault();
        const nextId = notes.length > 0 ? Math.max(...notes.map(t => t.id)) + 1 : 0 
        const newNote = {id: nextId, note: notebookk}
        setNotes([...notes, newNote])
        setNotebookk('')
    } 

    const handleSubmittt = (e) => {
        e.preventDefault();
        const nextId = reminders.length > 0 ? Math.max(...reminders.map(t => t.id)) + 1 : 0 
        const newReminder = {id: nextId, date: moment(dateState).format('Do MMMM YYYY'), remind: reminder}
        setReminders([...reminders, newReminder]);
        setReminder('')
    }
    
    const refreshPage = () => {
        window.location.reload();
    }


    const handleDelete =  (e) => {
        const newTodos = todolists.filter((todo) => todo.id != e.target.id)
        setTodolists(newTodos)
    }

    const handleDeletee =  (e) => {
        const newNotes = notes.filter((note) => note.id != e.target.id)
        setNotes(newNotes)
    }

    const handleDeleteee = (e) => {
        console.log(e.target.id)
        const newReminder = reminders.filter((reminder) => reminder.id != e.target.id)
        setReminders(newReminder)
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
        handleProfileTodo();
        setProfileImg(profilegreen);
        setCalenderImg(calender1)
        setNotebookImg(notebook1);
        setTodolistImg(todolist1);
    }

    const handleCalender = () => {
        setProfile(false);
        setCalender(true);
        setNotebook(false);
        setTodolist(false);
        handleCalenderTodo();
        setProfileImg(profile1);
        setCalenderImg(calendergreen)
        setNotebookImg(notebook1);
        setTodolistImg(todolist1);
    }

    const handleNotebook = () => {
        setProfile(false);
        setCalender(false);
        setNotebook(true);
        setTodolist(false);
        handleNotebookTodo();
        setProfileImg(profile1);
        setCalenderImg(calender1)
        setNotebookImg(notebookgreen);
        setTodolistImg(todolist1);
    }

    const handleTodolist = () => {
        setProfile(false);
        setCalender(false);
        setNotebook(false);
        setTodolist(true);
        handleListtodo();
        setProfileImg(profile1);
        setCalenderImg(calender1)
        setNotebookImg(notebook1);
        setTodolistImg(todolistgreen);
    }

    const changeDate = (e) => {
        setDateState(e)
        const now = new Date();
        console.log(now.getTime(), dateState.getTime());
        if (dateState.getTime() === now.getTime()){
            console.log('hello there')
        }
    }

    const handleDisplay = (e) => {
        console.log(window.scrollY)
        if(window.scrollY < 100){
            setDisplay(true);
        } else{
            setDisplay(false)
        }
    }

    window.addEventListener('scroll', handleDisplay)

    return (
        <div onScroll={handleDisplay}>
            <Container fluid classname="bg-light">
                {display ? 
                <Row className="bg-white">
                    <div className="d-flex justify-content-between shadow-sm poss d-md-none bg-white">
                        <Image src={profileImg} onClick={handleProfile} className="iconsm my-3" fluid/>
                        <Image src={calenderImg} onClick={handleCalender} className="iconsm my-3" fluid/>
                        <Image src={notebookImg} onClick={handleNotebook} className="iconsm my-3" fluid/>
                        <Image src={todolistImg} onClick={handleTodolist} className="iconsm my-3" fluid/>
                    </div>
                </Row> : <div></div>
                }
                <Row className="bg-white">
                    <Col xs={12} md={2} lg={2}>
                        <div className="d-none d-md-flex justify-content-between flex-md-column align-items-center shadow-sm p-4">
                            <Image src={profileImg} onClick={handleProfile} className="icon my-3" fluid/>
                            <Image src={calenderImg} onClick={handleCalender} className="icon my-3" fluid/>
                            <Image src={notebookImg} onClick={handleNotebook} className="icon my-3" fluid/>
                            <Image src={todolistImg} onClick={handleTodolist} className="icon my-3" fluid/>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={2} lg={2} className="shadow-sm bg-white">
                        {profile && <div>
                            <p className="font-500 font-20 pointer d-none d-md-block text-secondary" onClick={handleProfileTodo}>Profile</p>
                            <p className="font-500 font-16 pointer d-md-none text-secondary" onClick={handleProfileTodo}>Profile</p>
                        </div>}
                        {calender && <div>
                            <p className="font-500 font-20 pointer text-secondary d-none d-md-block" onClick={handleCalenderTodo}>Set Reminder</p>
                            <p className="font-500 font-16 pointer text-secondary d-md-none" onClick={handleCalenderTodo}>Set Reminder</p>

                        </div>}
                        {notebook && <div>
                            <p className="font-500 font-20 pointer text-secondary d-none d-md-block" onClick={handleNotebookTodo}>Notebook</p>
                            <p className="font-500 font-16 pointer text-secondary d-md-none" onClick={handleNotebookTodo}>Notebook</p>
                        </div>}
                        {todolist && <div>
                            <p className="font-500 font-20 pointer text-secondary d-none d-md-block" onClick={handleListtodo}>Todolist</p>
                            <p className="font-500 font-20 pointer text-black d-none d-md-block" onClick={handleAddtodo}>Create</p>
                            <p className="font-500 font-16 pointer text-secondary d-md-none" onClick={handleListtodo}>Todolist</p>
                            <p className="font-500 font-16 pointer text-black d-md-none" onClick={handleAddtodo}>Create</p>
                        </div>}
                    </Col>
                    <Col xs={12} sm={6} md={8} lg={8} className="py-md-1 ps-md-2 py-3 shadow-sm">
                        {addtodo && <Row>
                            <Col xs={12} sm={6} md={8} lg={6} className="d-md-flex justify-content-center">
                                <Form onSubmit={handleSubmit}>
                                    <FloatingLabel controlId="floatingTextarea2" label="Todo?">
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
                                        <Col ><Image src= {delete1} className="font-300 font-14 delete" id={todo.id} onClick={handleDelete} fluid/></Col>
                                    </Row>
                                ))}
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
                                <div className='m-2 m-md-5 mb-5 calender-form'>
                                    <Form onSubmit={handleSubmittt} className='calender-form'>
                                        <FloatingLabel controlId="floatingTextarea2" label="Reminder">
                                            <Form.Control as="textarea" className="calender-form" placeholder="Leave a comment here" value={reminder} required onChange={(e) => setReminder(e.target.value)} ref={reminderRef} style={{ height: '200px' }}/>
                                        </FloatingLabel>
                                        <Button variant="success" className="text-center w-100" type="submit">
                                            Save
                                        </Button>
                                    </Form>
                                </div>
                                <div className='m-2 m-md-5'>
                                    <p className="font-500 font-18 text-secondary my-2 d-none d-md-block">Reminders</p>
                                    <p className="font-500 font-14 text-secondary my-2 d-md-none">Reminders</p>
                                        {reminders.length === 0 ? <div className="mb-7">
                                            <p className="font-500 font-18 text-danger my-2 d-none d-md-block">You have nothing on reminders</p>
                                            <p className="font-500 font-14 text-danger my-2 d-md-none">You have nothing on reminders</p>
                                            <Button variant="success" className="text-center" onClick={handleRef1}>
                                                Set Reminder
                                            </Button>
                                        </div> :
                                        <div className='mb-10'>{
                                        reminders.map(reminder =>(
                                            <Row className="my-2 d-flex justify-content-between" key={reminder.id}>
                                                <Col className="font-500 font-18 d-none d-md-block text-secondary">{reminder.date}</Col>
                                                <Col className="font-300 font-14 d-md-none text-secondary">{reminder.date}</Col>
                                                <Col className="font-500 font-18 d-none d-md-block text-secondary">{reminder.remind}</Col>
                                                <Col className="font-300 font-14 d-md-none text-secondary">{reminder.remind}</Col>
                                                <Col><Image src= {delete1} id={reminder.id} className="delete" onClick={handleDeleteee} fluid/></Col>
                                            </Row>
                                        ))}
                                    </div>
                                    }
                                </div>
                            </div>
                        }
                        {
                            notebookTodo && <div className="notebook p-3">
                                <div className='my-4'>
                                    <Form onSubmit={handleSubmitt}>
                                        <FloatingLabel controlId="floatingTextarea2" label="Note">
                                            <Form.Control as="textarea" placeholder="Leave a comment here" value={notebookk} required onChange={(e) => setNotebookk(e.target.value)} ref={notebookRef} style={{ height: '200px' }}/>
                                        </FloatingLabel>
                                        <Button variant="success" className="text-center w-100" type="submit">
                                            Save
                                        </Button>
                                    </Form>
                                </div>
                                <p className="font-500 font-18 text-secondary my-2 d-none d-md-block">My Notes</p>
                                <p className="font-500 font-14 text-secondary my-2 d-md-none">My Notes</p>
                                {
                                    notes.length === 0 ? <div>
                                        <p className="font-500 font-18 text-danger my-2 d-none d-md-block">You have no notes</p>
                                        <p className="font-500 font-14 text-danger my-2 d-md-none">You have no notes</p>
                                        <Button variant="success" className="text-center" onClick={handleRef2}>
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
                        }
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
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Sidebar
