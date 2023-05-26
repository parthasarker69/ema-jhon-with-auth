import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [eerror, setEerror] = useState('')
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const handleEmail = (event) => {
        const userEmail = event.target.value;
        setEmail(userEmail);
        console.log(password);
    }

    const handlePassword = (event) => {
        const usePassword = event.target.value;
        setPassword(usePassword)
        console.log(email);
    }

    const [createUserWithEmailAndPassword, ,
        loading,
        error,] = useCreateUserWithEmailAndPassword(auth);

    useEffect(() => {
        if (user) {
            navigate('/home');
        }
    }, [user])

    const createUserWithEmail = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password);
        setEerror(error);
        console.log(eerror);

    }


    return (

        <div>
            <Form onSubmit={createUserWithEmail} className='w-50 mx-auto mt-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleEmail} name="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handlePassword} name='password' type="password" placeholder="Password" />
                </Form.Group>
                <p className='text-danger'><small>{eerror?.message}</small></p>

                <p><small>Already have an account ? <Link to='/signin'>Sign In</Link></small></p>

                <Button variant="primary" type="submit">
                    Sign Up
                </Button>

                <p className='mt-5 sign-in-with fs-5 me-3'>Sign In with
                    <Link className='ms-3'><img src="http://pluspng.com/img-png/google-logo-png-open-2000.png" alt="" /></Link>
                    <Link className='ms-3'><img src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-1-2.png" alt="" /></Link>
                    <Link className='ms-3'><img src="https://ctl.s6img.com/society6/img/y-xZ_syD7LhIJOGtpdTU08ra6Aw/w_700/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/8e29a2e79387449caa28090d71f489e3/~~/github-logo-prints.jpg?wait=0&attempt=0" alt="" /></Link>
                </p>
            </Form>
        </div>
    );
};

export default Signup;