import React, { useState } from 'react'
import { Row, Form,  Button, Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Navbar from './Navbar';
import usePasswordShow from './usePasswordShow';
import { useNavigate } from 'react-router';
import Spinner1 from '../images/spinner1.gif'

const SignUp = () => {
    const { passwordShow, showPassword } = usePasswordShow();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [match, setMatch] = useState(null)
    const [text, setText] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleMatch = () => {
        if(password === confirmPassword){
            setMatch(true)
        } else {
            setMatch(false)
            setText('password does not match')
        }
    }
    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault();
        const config = {
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            }
        };
        const url = 'https://myschedule-api.herokuapp.com/api/v1/auth/register';
        const data = {
            name, email, password
        }
        axios.post(url, data, config)
            .then(res => {
                localStorage.setItem("token", res.data.token);
                setLoading(false)
                navigate('/')
            })
            .catch(err => {
                setLoading(false)
                if(err.response.data.msg === 'Duplicate valued entered for email field, please choose another value'){
                    setError('User already exists')
                }else{
                    setError(err.response.data.msg)
                }
            })
    }

    return (
        <div className="login bg-light">
            <Navbar />
            <Container>
                <Row className="mt-3">
                    <div className="col-12 col-md-3 col-lg-4">
                        
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="shadow px-3 py-3 rounded border-10 bg-white">
                            <h4 className="text-success logo text-center">My Schedule!</h4>
                            <h5 className="font-500 pb-2 text-center mt-5 font-">Sign Up for <span className="text-success logo">My Schedule!</span></h5>
                            <div>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="name" value={name} onChange={e => setName(e.target.value)} required/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type={passwordShow ? "text" : "password"} className="border-bottom" placeholder="password" value={password} onKeyUp={handleMatch} onChange={e => setPassword(e.target.value)} required/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type={passwordShow ? "text" : "password"} className="border-bottom" placeholder=" Confirm password" value={confirmPassword} onKeyUp={handleMatch} onChange={e => setConfirmPassword(e.target.value)} required/>
                                    </Form.Group>
                                    {match? (<p className="font-14 text-success">correct password</p>) : <p className="font-14 text-danger">{text}</p>}
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" className="font-15" onClick={showPassword} label="show password" />
                                    </Form.Group>
                                    <p className="font-14 text-danger">{error}</p>
                                    <Button disabled={match ? false : true} variant="success" type="submit" className="text-center w-100">
                                        {loading ? 'Creating account...' : 'Sign Up' }
                                    </Button>                                
                                    <Link to="/">
                                        <Button variant="" className="text-center w-100 text-success border-1 border-success border-rounded my-3 hover">
                                            Already have an account? Login
                                        </Button>
                                    </Link>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-lg-4">
                        
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default SignUp
