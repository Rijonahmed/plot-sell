import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Sosial from '../../Login/SosialLogIn/Sosial';
import { async } from '@firebase/util';

const Register = () => {
  const [agree, setAgree] = useState(false)
  const navigate = useNavigate();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = (event.target.name.value)
    const email = (event.target.email.value)
    const password = (event.target.password.value)

    // const agree = event.target.terms.checked;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log('Updated profile');
    navigate('/home')



  }
  if (user) {
    console.log('user', user)

  }

  const navigateHandleLogin = event => {
    navigate('/login');


  }
  return (
    <div className='w-50 mx-auto register-container'>
      <h2 className='text-primary text-center'>Please Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" placeholder='Enter your Name' id="" required />
        <input type="email" name="email" placeholder='Enter Email' id="" required />
        <input type="password" name="password" placeholder='Enter Password' id="" required />
        <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
        <label className={agree ? 'ps-2' : 'ps-2 text-danger'} htmlFor="terms"> Accept and condition</label>
        <input disabled={!agree} type="submit" value="Register" />
      </form>
      <p>Already creat account purbachal club <span className='text-success ' onClick={navigateHandleLogin}> Log In</span></p>
      <Sosial></Sosial>
    </div>
  );
};

export default Register;