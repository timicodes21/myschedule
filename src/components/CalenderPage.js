import React from 'react'
import moment from 'moment'
import Calendar from 'react-calendar'
import { Form, FloatingLabel, Row, Col, Button, Image } from 'react-bootstrap'

const CalenderPage = ({ calenderTodo, dateState, changeDate, handleSubmittt, reminder, setReminder, reminderRef, reminders, handleRef1, delete1, handleDeleteee  }) => {
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
    </div>
  )
}

export default CalenderPage