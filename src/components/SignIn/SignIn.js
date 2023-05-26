import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuth } from 'firebase/auth'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [eerror, setEerror] = useState('')
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const [
        signInWithEmailAndPassword,
        ,
        ,
        error,
    ] = useSignInWithEmailAndPassword(auth);

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


    useEffect(() => {
        if (user) {
            navigate('/home');
        }
    }, [user])

    const handleSignInFrom = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
        setEerror(error);

    }




    const [signInWithGoogle] = useSignInWithGoogle(auth)
    const [signInWithGithub] = useSignInWithGithub(auth);
    const [signInWithFacebook] = useSignInWithFacebook(auth);



    return (
        <div>
            <Form onSubmit={handleSignInFrom} className='w-50 mx-auto mt-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handlePassword} type="password" placeholder="Password" />
                </Form.Group>

                <p className='text-danger'><small>{eerror?.message}</small></p>

                <p><small>Dont have any account yet ?  Please  <Link to='/signup'>Sign Up</Link></small></p>

                <Button variant="primary" type="submit">
                    Sign In
                </Button>

                <p className='mt-5 sign-in-with fs-5 me-3'>Sign In with
                    <Link onClick={() => signInWithGoogle()} className='ms-3'><img src="http://pluspng.com/img-png/google-logo-png-open-2000.png" alt="" /></Link>
                    <Link onClick={() => signInWithFacebook()} className='ms-3'><img src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-1-2.png" alt="" /></Link>
                    <Link onClick={() => signInWithGithub()} className='ms-3'><img src="https://ctl.s6img.com/society6/img/y-xZ_syD7LhIJOGtpdTU08ra6Aw/w_700/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/8e29a2e79387449caa28090d71f489e3/~~/github-logo-prints.jpg?wait=0&attempt=0" alt="" /></Link>
                </p>
            </Form>
        </div>
    );
};

export default SignIn;