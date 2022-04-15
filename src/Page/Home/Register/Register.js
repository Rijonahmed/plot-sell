import React from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Sosial from '../../Login/SosialLogIn/Sosial';

const Register = () => {
  const navigate = useNavigate();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth)

  const handleRegister = event => {
    event.preventDefault();
    const email = (event.target.email.value)
    const password = (event.target.password.value)
    createUserWithEmailAndPassword(email, password)

  }
  if (user) {
    navigate('/home')

  }

  const navigateHandleLogin = event => {
    navigate('/login');


  }
  return (
    <div className='w-50 mx-auto register-container'>
      <h2 className='text-primary text-center'>Please Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" placeholder='Enter your Name' id="" />
        <input type="email" name="email" placeholder='Enter Email' id="" />
        <input type="password" name="password" placeholder='Enter Password' id="" />
        <input type="submit" value="Register" />
      </form>
      <p>Already creat account purbachal club <span className='text-success ' onClick={navigateHandleLogin}> Log In</span></p>
      <Sosial></Sosial>
    </div>
  );
};

export default Register;