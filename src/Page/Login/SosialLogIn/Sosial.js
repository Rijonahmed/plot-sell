import React from 'react';
import google from '../../../../src/images/social/google.png'
import facebook from '../../../../src/images/social/Facebook.png'
import Github from '../../../../src/images/social/github2.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import { useNavigate } from 'react-router-dom';

const Sosial = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate()

  let errorElement;

  if (error || error1) {
    errorElement = (
      <div>
        <p className='text-danger'>Error: {error?.message}{error?.message}</p>
      </div>
    );
  }
  if (user || user1) {
    navigate('/services')

  }
  return (
    <div>
      <div className='d-flex align-items-center'>
        <div style={{ height: '1px' }} className='bg-primary w-50'></div>
        <p className='mt-2 px-2'>Or</p>
        <div style={{ height: '1px' }} className='bg-primary w-50'></div>
      </div>
      {errorElement}
      <button
        onClick={() => signInWithGoogle()}
        className='btn btn-secondary d-block mx-auto w-50 my-2'>
        <img className='mx-2' style={{ width: '30px' }} src={google} alt="" />
        Google Sign In</button>

      <button className='btn btn-secondary d-block mx-auto w-50 my-2'>
        <img className='mx-2' style={{ width: '30px' }} src={facebook} alt="" />
        Facebook Sig In</button>
      <button onClick={() => signInWithGithub()} className='btn btn-secondary d-block mx-auto w-50 my-2'>
        <img className='mx-2' style={{ width: '30px' }} src={Github} alt="" />
        Github Sign In</button>

    </div>
  );
};

export default Sosial;