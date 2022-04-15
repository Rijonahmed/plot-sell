import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import Sosial from './SosialLogIn/Sosial';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation()


  let from = location.state?.from?.pathname || "/";

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(
    auth
  );



  const handleSubmit = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password)

  }
  if (user) {
    navigate(from, { replace: true });
  }
  const navigateHandle = event => {
    navigate('/register');
  }
  let errorElement;

  if (error || error) {
    errorElement = (
      <div>
        <p className='text-danger'>Error: {error.message}</p>
      </div>
    );
  }

  const resetPassword = async () => {
    const email = emailRef.current.value;

    await sendPasswordResetEmail(email);
    alert('Sent email');

  }

  return (
    <div className='w-50 mx-auto'>
      <h1 className='text-primary text-center'>Log in Please </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">

          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">

          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {errorElement}
      <p>new to purbachal club <span className='text-danger' onClick={navigateHandle}> new creat account</span></p>

      <p>Forget Password<span className='text-danger' onClick={resetPassword}> Reset Password</span></p>

      <Sosial></Sosial>



    </div>
  );
};

export default Login;