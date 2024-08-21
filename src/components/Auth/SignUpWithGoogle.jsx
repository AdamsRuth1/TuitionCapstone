import React, { useEffect } from 'react';
import Google from '../../assets/Icons/Google-icon.svg';
import { useNavigate } from 'react-router-dom';

const SignUpWithGoogle = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Load Google's OAuth client with your client ID
    window.gapi.load('auth2', async () => {
      await window.gapi.auth2.init({
        client_id: '1073252734008-7hcm78qd5c72lsfagh081qspat4k1ach.apps.googleusercontent.com ', // Replace with your OAuth client ID
      });
    });
  }, []);

  const handleSignIn = async () => {
    try {
      const googleAuth = window.gapi.auth2.getAuthInstance();
      const googleUser = await googleAuth.signIn();
      const idToken = googleUser.getAuthResponse().id_token;

      // Send the ID token to your backend for verification
      await fetch('https://alt-wave-b-project-backend.onrender.com/api/flutter_app/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_token: idToken }),
      });

      console.log('ID token sent to backend successfully!');

      // Example: Redirect to another page after successful sign-in
      navigate('/dashboard'); // Replace '/dashboard' with your actual route
    } catch (error) {
      console.error('Error signing in with Google:', error);
      // Handle error appropriately, e.g., show an error message to the user
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