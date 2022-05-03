import React, { useState, useRef, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import profile1 from '../images/profile.png'
import calender1 from '../images/calender.png'
import notebook1 from '../images/notebook.png'
import todolist1 from '../images/todolist.png'
import delete1 from '../images/delete1.png'
import profilegreen from '../images/profilegreen.png'
import calendergreen from '../images/calendergreen.png'
import notebookgreen from '../images/notebookgreen.png'
import todolistgreen from '../images/todolistgreen.png'
import MobilePanel from './MobilePanel'
import SidebarDesktop from './SidebarDesktop'
import MidPage from './MidPage'
import CreateTodolist from './CreateTodolist'
import Todolist from './Todolist'
import CalenderPage from './CalenderPage'
import NotebookPage from './NotebookPage'
import ProfilePage from './ProfilePage'
import axios from 'axios'

const MainPage = () => {

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
    const [noteData, setNoteData] = useState(null)
    const [calenderData, setCalenderData] = useState(null);
    const [todoData, setTodoData] = useState(null);

    useEffect(() => {
        handleProfile()
    }, [])

    const handleRef1 = () => {
        reminderRef.current.focus();
    }

    const handleRef2 = () => {
        notebookRef.current.focus();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const config = {
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': `Bearer ${token}`
            }
        };
        const url = 'https://myschedule-api.herokuapp.com/api/v1/tasks';
        const data = {
            task: note
        }
        axios.post(url, data, config)
            .then(res => {
                const newTask = res.data.task;
                setTodoData([...todoData, newTask])
                handleListtodo()
            })
        setNote('')
    }

    const handleSubmitt = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const config = {
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': `Bearer ${token}`
            }
        };
        const url = 'https://myschedule-api.herokuapp.com/api/v1/notes';
        const data = {
            note: notebookk
        }
        axios.post(url, data, config)
            .then(res => {
                const newNote = res.data.note;
                setNoteData([...noteData, newNote])
            })
        setNotebookk('')
    } 

    const handleSubmittt = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const config = {
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': `Bearer ${token}`
            }
        };
        const url = 'https://myschedule-api.herokuapp.com/api/v1/reminders';
        const data = {
            name: reminder,
            date: dateState
        }
        axios.post(url, data, config)
            .then(res => {
                const newReminder = res.data.reminder;
                setCalenderData([...calenderData, newReminder])
            })
        setReminder('')
    }

    const handleDelete =  (e) => {
        const token = localStorage.getItem('token');
        const config = {
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': `Bearer ${token}`
            }
        };
        const url = `https://myschedule-api.herokuapp.com/api/v1/tasks/${e.target.id}`;
        const newTasks = todoData.filter((task) => task._id != e.target.id)
        setTodoData(newTasks)
        axios.delete(url, config)
            .then(res => {
                
            })
    }

    const handleDeletee =  (e) => {
        const token = localStorage.getItem('token');
        const config = {
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': `Bearer ${token}`
            }
        };
        const url = `https://myschedule-api.herokuapp.com/api/v1/notes/${e.target.id}`;
        const newNotes = noteData.filter((note) => note._id != e.target.id)
        setNoteData(newNotes)
        axios.delete(url, config)
            .then(res => {
                
            })
    }

    const handleDeleteee = (e) => {
        const token = localStorage.getItem('token');
        const config = {
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': `Bearer ${token}`
            }
        };
        const url = `https://myschedule-api.herokuapp.com/api/v1/reminders/${e.target.id}`;
        const newReminders = calenderData.filter(reminder => reminder._id != e.target.id)
        setCalenderData(newReminders);
        axios.delete(url, config)
            .then(res => {
                
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
    }

    const handleDisplay = (e) => {
        if(window.scrollY < 100){
            setDisplay(true);
        } else{
            setDisplay(false)
        }
    }

    // handleProfile();
    window.addEventListener('scroll', handleDisplay)

    return (
        <div onScroll={handleDisplay}>
            <Container fluid classname="bg-light">
                <MobilePanel display={display} handleProfile={handleProfile} handleCalender={handleCalender} handleNotebook={handleNotebook} handleTodolist={handleTodolist} profileImg={profileImg} calenderImg={calenderImg} notebookImg={notebookImg} todolistImg={todolistImg} />

                <Row className="bg-white">
                    <SidebarDesktop profileImg={profileImg} calenderImg={calenderImg} notebookImg={notebookImg} todolistImg={todolistImg} handleProfile={handleProfile} handleCalender={handleCalender} handleNotebook={handleNotebook} handleTodolist={handleTodolist} />

                    <MidPage profile={profile} calender={calender} notebook={notebook} todolist={todolist} handleProfileTodo={handleProfileTodo} handleCalenderTodo={handleCalenderTodo} handleNotebookTodo={handleNotebookTodo} handleListtodo={handleListtodo} handleAddtodo={handleAddtodo} /> 

                    <Col xs={12} sm={6} md={8} lg={8} className="py-md-1 ps-md-2 py-3 shadow-sm">
                        <CreateTodolist addtodo={addtodo} handleSubmit={handleSubmit} note={note} day={day} setNote={setNote} setDay={setDay} />

                        <Todolist listtodo={listtodo} handleAddtodo={handleAddtodo} delete1={delete1} handleDelete={handleDelete} todoData={todoData} setTodoData={setTodoData} />

                        <CalenderPage calenderTodo={calenderTodo} dateState={dateState} changeDate={changeDate} handleSubmittt={handleSubmittt} reminder={reminder} setReminder={setReminder} reminderRef={reminderRef} handleRef1={handleRef1} delete1={delete1} handleDeleteee={handleDeleteee} calenderData={calenderData} setCalenderData={setCalenderData} />
                        
                        <NotebookPage notebookTodo={notebookTodo} handleSubmitt={handleSubmitt} notebookk={notebookk} setNotebookk={setNotebookk} notebookRef={notebookRef} handleRef2={handleRef2} delete1={delete1} handleDeletee={handleDeletee} noteData={noteData} setNoteData={setNoteData} />

                        <ProfilePage profileTodo={profileTodo} todoData={todoData} handleTodolist={handleTodolist} delete1={delete1} handleDelete={handleDelete} noteData={noteData} handleNotebook={handleNotebook} handleDeletee={handleDeletee} calenderData={calenderData} handleCalender={handleCalender} handleDeleteee={handleDeleteee} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MainPage
