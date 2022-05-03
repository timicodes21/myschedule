import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Calendar from 'react-calendar'
import { Form, FloatingLabel, Row, Col, Button, Image } from 'react-bootstrap'
import axios from 'axios'

const CalenderPage = ({ calenderTodo, dateState, changeDate, handleSubmittt, reminder, setReminder, reminderRef, reminders, handleRef1, delete1, handleDeleteee, calenderData, setCalenderData  }) => {

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
        const url = 'https://myschedule-api.herokuapp.com/api/v1/reminders';

        axios.get(url, config)
            .then(res => {
                console.log(res, 'hello there')
                setCalenderData(res.data.reminders);
            })
    }, [setCalenderData]) 

  return (
    <div>
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
                        {
                            calenderData ? 
                            calenderData.length === 0 ? <div className="mb-7">
                                <p className="font-500 font-18 text-danger my-2 d-none d-md-block">You have nothing on reminders</p>
                                <p className="font-500 font-14 text-danger my-2 d-md-none">You have nothing on reminders</p>
                                <Button variant="success" className="text-center" onClick={handleRef1}>
                                    Set Reminder
                                </Button>
                            </div> :
                        <div className='mb-10'>{
                            calenderData.map(reminder =>(
                            <Row className="my-2 d-flex justify-content-between" key={reminder._id}>
                                <Col className="font-500 font-18 d-none d-md-block text-secondary">{moment(reminder.date).format('Do MMMM YYYY')}</Col>
                                <Col className="font-300 font-14 d-md-none text-secondary">{moment(reminder.date).format('Do MMMM YYYY')}</Col>
                                <Col className="font-500 font-18 d-none d-md-block text-secondary">{reminder.name}</Col>
                                <Col className="font-300 font-14 d-md-none text-secondary">{reminder.name}</Col>
                                <Col><Image src= {delete1} id={reminder._id} className="delete" onClick={handleDeleteee} fluid/></Col>
                            </Row>
                        ))}
                    </div> : ""
                    }
                </div>
            </div>
        }
    </div>
  )
}

export default CalenderPage