import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import Google from "../../assets/Icons/Google-icon.svg";
import Apple from "../../assets/Icons/Apple-Icon.svg";

const SignUpWithGoogle = ({ HandleAppleSignIn }) => {
  const handleGoogleSignIn = (response) => {
    // Send tokenId to your backend API
    fetch("https://alt-wave-b-project-backend.onrender.com/api/flutter_app/auth/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id_Token: response.credential }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // Redirect to login or any other page after successful sign-in
          window.location.href = "/dashboard"; // Change this URL to your desired location
        } else {
          // Handle errors or unsuccessful sign-in
          alert("Sign-In Error: " + data.message);
        }
      })
      .catch((error) => {
        alert("Backend Error: " + error.message);
      });
  };

  return (
    <div className="pt-[4rem]">
      <div className="pb-[1.5rem] max-sm:pr-[1rem] max-sm:pl-[1rem]">
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
          <GoogleLogin
            onSuccess={handleGoogleSignIn}
            onFailure={(error) => {
              alert("Google Sign-In Error: " + error.message);
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
