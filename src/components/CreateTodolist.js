import React from 'react'
import { Row, Col, Form, FloatingLabel, Button} from 'react-bootstrap'

const CreateTodolist = ({ addtodo, handleSubmit, note, day, setNote, setDay }) => {
  return (
    <Row>
        {
            addtodo ? 
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
            </Col> : ""
        }
    </Row>
  )
}

export default CreateTodolist