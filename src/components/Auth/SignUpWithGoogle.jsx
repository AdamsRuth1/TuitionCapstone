import React, { useEffect } from 'react';
import Google from '../../assets/Icons/Google-icon.svg';
import { useNavigate } from 'react-router-dom';

const SignUpWithGoogle = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Ensure gapi is available before loading
    if (window.gapi) {
      window.gapi.load('auth2', async () => {
        try {
          await window.gapi.auth2.init({
            client_id: '1073252734008-7hcm78qd5c72lsfagh081qspat4k1ach.apps.googleusercontent.com',
          });
        } catch (error) {
          console.error('Error initializing Google API:', error);
        }
      });
    } else {
      console.error('Google API is not loaded.');
    }
  }, []);

  const handleSignIn = async () => {
    try {
      const googleAuth = window.gapi.auth2.getAuthInstance();
      if (!googleAuth) {
        console.error('Google Auth instance is not available.');
        return;
      }

      const googleUser = await googleAuth.signIn();
      const idToken = googleUser.getAuthResponse().id_token;
console.log("id genereate", {idToken})
      const response = await fetch('https://alt-wave-b-project-backend.onrender.com/api/flutter_app/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_token: idToken }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log('ID token sent to backend successfully!');
      navigate('/dashboard');
    } catch (error) {
      if (error.error === 'popup_closed_by_user') {
        // User closed the popup, handle it gracefully
        console.warn('Sign-in popup was closed by the user.');
        alert('The sign-in popup was closed. Please try again.');
      } else {
        // Other errors
        console.error('Error signing in with Google:', error);
        alert('An error occurred during sign-in. Please try again.');
      }
    }
  };

  return (
    <div className="pt-[4rem]">
      <div className="pb-[1.5rem] max-sm:pr-[1rem] max-sm:pl-[1rem]">
        <button
          onClick={handleSignIn}
          className="Google-border flex bg-white justify-center rounded-[4px] max-sm:m-auto max-sm:w-full w-[81%] h-[48px] gap-[0.62rem]"
        >
          <img src={Google} alt="Google icon" className="-mt-[0.3rem]" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignUpWithGoogle;
