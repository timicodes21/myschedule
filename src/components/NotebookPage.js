import React from 'react'
import { Form, FloatingLabel, Button, Row, Col, Image } from 'react-bootstrap'

const NotebookPage = ({ notebookTodo, handleSubmitt, notebookk, setNotebookk, notebookRef, notes, handleRef2, delete1, handleDeletee }) => {
  return (
    <div>
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
    </div>
  )
}

export default NotebookPage