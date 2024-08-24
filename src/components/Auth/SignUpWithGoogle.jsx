import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Google from '../../assets/Icons/Google-icon.svg';
import { useNavigate } from 'react-router-dom';

function SignUpWithGoogle() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = useGoogleLogin({
        onSuccess: async (codeResponse) => {
            setUser(codeResponse);
        },
        onError: (error) => console.log('Login Failed:', error),
    });

    useEffect(() => {
        if (user && user.access_token) {
            // Send token to backend
            axios.post('https://alt-wave-b-project-backend.onrender.com/api/flutter_app/auth/google', {
                id_token: user.access_token
            })
            .then((response) => {
                if (response.status === 200) {
                    console.log('ID token sent to backend successfully!');
                    navigate('/dashboard'); // Redirect to dashboard
                } else {
                    console.error('Backend error:', response.statusText);
                    alert('An error occurred. Please try again.');
                }
            })
            .catch((err) => {
                if (err.response) {
                    // Server responded with a status other than 2xx
                    console.error('Error response:', err.response.data);
                    alert('Server error: ' + err.response.data.message);
                } else if (err.request) {
                    // Request was made but no response was received
                    console.error('Network error:', err.request);
                    alert('Network error: Please check your connection.');
                } else {
                    // Something else happened
                    console.error('Error:', err.message);
                    alert('An unexpected error occurred.');
                }
            });
        }
    }, [user, navigate]);

    const logOut = () => {
        googleLogout();
        setUser(null); // Clear user data on logout
    };

    return (
        <div className='mt-10 mb-10'>
            <button
                onClick={() => login()}
                className="Google-border flex bg-white justify-center rounded-[4px] max-sm:m-auto max-sm:w-full w-[81%] h-[48px] gap-[0.62rem]"
            >
                <img src={Google} alt="Google icon" className="-mt-[0.3rem]" />
                Sign in with Google
            </button>
        </div>
    );
}

export default SignUpWithGoogle;
