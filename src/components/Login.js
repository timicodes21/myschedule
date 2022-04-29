import React, { useState } from 'react'
import axios from 'axios'
import { Button, Container, Row, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import usePasswordShow from './usePasswordShow';
import { useNavigate } from 'react-router';

const Login = () => {
    const { passwordShow, showPassword } = usePasswordShow();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        const config = {
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            }
        };
        const url = 'https://myschedule-api.herokuapp.com/api/v1/auth/login';
        const data = {
            email, password
        }
        axios.post(url, data, config)
            .then(res => {
                setLoading(false)
                localStorage.setItem("token", res.data.token);
                console.log(res);
                navigate('/home')
            })
            .catch(err => {
                setLoading(false)
                setError(err.response.data.msg)
            })
        
    }

    return (
        <div className="login bg-light">
            <Navbar />
            <Container className="">
                <div className="p-md-2 py-lg-5 bg-light">
                    <Row>
                        <div className="col-12 col-md-6 col-lg-7 px-md-5 mt-5">
                            <h5 className="font-700 pb-2 d-none d-md-block">My Schedule makes life easier by helping you plan your task and schedule ahead of time and also a platform for time management tips.</h5>
                            <h5 className="font-500 font-14 pb-2 d-md-none">My Schedule makes life easierby helping you plan your task and schedule ahead of time and also a platform for time management tips.</h5>
                            <p className="d-none d-md-block">Notebook, calender, presentation Platform, Reminders, Appointments, Resolutions.</p>
                            <p className="d-md-none font-14 font-300">Notebook, calender, presentation Platform, Reminders, Appointments, Resolutions.</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-5">
                            <div className="shadow px-3 py-3 bg-white border-10">
                                <h4 className="text-success logo text-center">My Schedule!</h4>
                                <h5 className="font-500 pb-2 text-center mt-5">Sign in to your account</h5>
                                <div>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className="font-15">email</Form.Label>
                                            <Form.Control type="email" placeholder="email" required value={email} onChange={e => setEmail(e.target.value)} />
                                            <Form.Text className="text-muted">
                                            
                                            </Form.Text>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label className="font-15">Password</Form.Label>
                                            <Form.Control type={passwordShow ? "text" : "password"} className="border-bottom" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" className="font-15" onClick={showPassword} label="show password" />
                                        </Form.Group>
                                        <p className="font-14 text-danger">{error}</p>
                                        <Button variant="success" type="submit" className="text-center w-100">
                                            {loading ? 'Logging in...' : 'Login' }
                                        </Button>
                                        <Link to="/signup">
                                            <Button variant="" className="text-center w-100 text-success border-1 border-success border-rounded my-3 hover">
                                            Create an account
                                            </Button>
                                        </Link>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Login
