import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import Google from '../../assets/Icons/Google-icon.svg';
import Apple from '../../assets/Icons/Apple-Icon.svg';
import { useNavigate } from 'react-router-dom';

const SignUpWithGoogle = ({ HandleAppleSignIn }) => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async (response) => {
    try {
      if (response.credential) {
        const res = await fetch('https://alt-wave-b-project-backend.onrender.com/api/flutter_app/auth/google', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id_token: response.credential }), // Sending id_token as required by the backend
        });

        const data = await res.json();

        if (data.success) {
          navigate('/dashboard');
        } else {
          alert('Sign-In Error: ' + data.message);
        }
      } else {
        alert('Failed to retrieve Google ID token.');
      }
    } catch (error) {
      alert('Backend Error: ' + error.message);
    }
  };

  return (
    <div className="pt-[4rem]">
      <div className="pb-[1.5rem] max-sm:pr-[1rem] max-sm:pl-[1rem]">
        <GoogleOAuthProvider clientId="1073252734008-7hcm78qd5c72lsfagh081qspat4k1ach.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={handleGoogleSignIn}
            onFailure={(error) => {
              alert('Google Sign-In Error: ' + error.message);
            }}
            render={({ onClick }) => (
              <button
                onClick={onClick}
                className="Google-border flex bg-white justify-center rounded-[4px] max-sm:m-auto max-sm:w-full w-[81%] h-[48px] gap-[0.62rem]"
              >
                <img src={Google} alt="Google icon" className="-mt-[0.3rem]" />
                Continue with Google
              </button>
            )}
          />
        </GoogleOAuthProvider>
      </div>
      <div className="max-sm:pr-[1rem] max-sm:pl-[1rem]">
        <button
          onClick={HandleAppleSignIn}
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
