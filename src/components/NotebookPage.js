import React, { useEffect, useState } from 'react'
import { Form, FloatingLabel, Button, Row, Col, Image } from 'react-bootstrap'
import axios from 'axios'

const NotebookPage = ({ notebookTodo, handleSubmitt, notebookk, setNotebookk, notebookRef, notes, handleRef2, delete1, handleDeletee, noteData, setNoteData }) => {

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
        const url = 'https://myschedule-api.herokuapp.com/api/v1/notes';

        axios.get(url, config)
            .then(res => {
                console.log(res)
                setNoteData(res.data.notes);
            })
    }, [setNoteData]) 

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
                    noteData ? 
                    noteData.length === 0 ? <div>
                        <p className="font-500 font-18 text-danger my-2 d-none d-md-block">You have no notes</p>
                        <p className="font-500 font-14 text-danger my-2 d-md-none">You have no notes</p>
                        <Button variant="success" className="text-center" onClick={handleRef2}>
                            Write a note
                        </Button>
                    </div> :
                    noteData.map(note => (
                        <Row className="my-2" key={note._id}>
                            <Col className="font-500 font-18 d-none d-md-block text-secondary">{note.note}</Col>
                            <Col className="font-300 font-14 d-md-none text-secondary">{note.note}</Col>
                            <Col><Image src= {delete1} id={note._id} className="delete" onClick={handleDeletee} fluid/></Col>
                        </Row>
                    )) : ""
                }
            </div>
        }
    </div>
  )
}

export default NotebookPage