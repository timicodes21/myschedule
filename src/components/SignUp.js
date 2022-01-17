import React, {useState} from 'react'
import { Row, Form,  Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import usePasswordShow from './usePasswordShow';
import { useNavigate } from 'react-router';

const SignUp = () => {
    const { passwordShow, showPassword } = usePasswordShow();
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [match, setMatch] = useState(null)
    const [text, setText] = useState('')


    const handleMatch = () => {
        if(password === confirmPassword){
            setMatch(true)
        } else {
            setMatch(false)
            setText('password does not match')
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/')
        alert('account created')
        localStorage.setItem('email', email);
        localStorage.setItem('password', password)
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
                                        <Form.Control type="text" placeholder="firstname" value={firstname} onChange={e => setFirstname(e.target.value)} required/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="lastname" value={lastname} onChange={e => setLastname(e.target.value)} required/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type={passwordShow ? "text" : "password"} className="border-bottom" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} required/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type={passwordShow ? "text" : "password"} className="border-bottom" placeholder=" Confirm password" value={confirmPassword} onKeyUp={handleMatch} onChange={e => setConfirmPassword(e.target.value)} required/>
                                    </Form.Group>
                                    {match? (<p className="font-14 text-success">correct password</p>) : <p className="font-14 text-danger">{text}</p>}
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" className="font-15" onClick={showPassword} label="show password" />
                                    </Form.Group>
                                    <Button variant="success" type="submit" className="text-center w-100">
                                        Sign Up
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
