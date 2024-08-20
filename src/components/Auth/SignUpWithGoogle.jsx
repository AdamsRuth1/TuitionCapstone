import React from 'react';
// const backendResponse = await fetch('https://alt-wave-b-project-backend.onrender.com/api/flutter_app/auth/google', {

import { useGoogleLogin } from '@react-oauth/google';
import Google from '../../assets/Icons/Google-icon.svg';
import Apple from '../../assets/Icons/Apple-Icon.svg';
import { useNavigate } from 'react-router-dom';

const SignUpWithGoogle = () => {
  const navigate = useNavigate();

  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      // Send the authorization code to the backend server
      fetch('https://alt-wave-b-project-backend.onrender.com/api/flutter_app/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_token: codeResponse?.id_token}),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Backend response:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    },
    onError: () => {
      // Handle login errors here
      console.error('Google login failed');
    },
    flow: 'auth-code',
  });


  return (
    <div className="pt-[4rem]">
      <div className="pb-[1.5rem] max-sm:pr-[1rem] max-sm:pl-[1rem]">
        <button
          onClick={() => googleLogin()}
          className="Google-border flex bg-white justify-center rounded-[4px] max-sm:m-auto max-sm:w-full w-[81%] h-[48px] gap-[0.62rem]"
        >
          <img src={Google} alt="Google icon" className="-mt-[0.3rem]" />
          Sign in with Google
        </button>
      </div>
      <div className="max-sm:pr-[1rem] max-sm:pl-[1rem]">
        <button
          // onClick={HandleAppleSignIn}
          className="Google-border flex bg-white justify-center rounded-[4px] max-sm:m-auto max-sm:w-full w-[81%] h-[48px] gap-[0.62rem]"
        >
          <img src={Apple} alt="Apple icon" className="-mt-[0.3rem]" />
          Continue with Apple
        </button>
      </div>
      <div className="flex pt-[2rem] text-center pb-3 lg:w-[480px] max-sm:w-[350px]">
        <div className="line ml-4 w-[200px] h-0"></div>
        <span className="text-center">Or</span>
        <div className="line w-[215px] h-0"></div>
      </div>
    </div>
  );
};

export default SignUpWithGoogle;
