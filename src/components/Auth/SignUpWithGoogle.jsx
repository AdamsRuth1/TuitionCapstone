import React from 'react';
// const backendResponse = await fetch('https://alt-wave-b-project-backend.onrender.com/api/flutter_app/auth/google', {

import { useGoogleLogin } from '@react-oauth/google';
import Google from '../../assets/Icons/Google-icon.svg';
import Apple from '../../assets/Icons/Apple-Icon.svg';
import { useNavigate } from 'react-router-dom';

const SignUpWithGoogle = () => {
  const navigate = useNavigate();

  const handleSignIn = async () => {
    // Initialize Google's OAuth client with your client ID
    const googleAuth = window.gapi.auth2.getAuthInstance();
    
    try {
      // Sign in the user with Google
      const googleUser = await googleAuth.signIn();
      
      // Retrieve the ID token from the signed-in user
      const idToken = googleUser.getAuthResponse().id_token;
      
      // Send the ID token to your backend
      await fetch('https://alt-wave-b-project-backend.onrender.com/api/flutter_app/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_token: idToken }),
      });

      // Optionally, handle success or redirect to another page
      console.log('ID token sent to backend successfully!');
    } catch (error) {
      console.error('Error signing in with Google:', error);
      // Handle error appropriately, e.g., show an error message to the user
    }
  };


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
