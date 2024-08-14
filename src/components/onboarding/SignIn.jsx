import SignInHeader from "../Auth/SignInHeader";
import SignUpWithGoogle from "../Auth/SignUpWithGoogle";
import SiginInput from "../Auth/SiginInput";
import SignInFooter from "../Auth/SignInFooter";
import Formside from "../Auth/Formside";
// import { GoogleLogin } from 'react-google-login';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const naviage = useNavigate()
  const handleSuccess = async (response) => {
    const { tokenId } = response;
    
    try {
      
      const res = await axios.post('https://alt-wave-b-project-backend.onrender.com/api/flutter_app/auth/google', { idToken: tokenId });
      
      // Handle successful response from your backend
      console.log('Backend Response:', res.data);
      navigate("/dashboard/");
      
      // You can store user data or token received from the backend here
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  }; 

  return (
    <main className="grid lg:grid-cols-2 md:grid-cols-1 bg-white">
      <div className="lg:pl-[7.5rem]">
        {/* <div className="w-full"> */}
          <SignInHeader
            header="Welcome Back"
            Paragraph="Sign in to Tuition to continue"
            MobileParagraph="Sign in to Tuition to continue"
          />
          <SignUpWithGoogle HandleGoogleSignIn={handleSuccess} />

          <SiginInput />

          <SignInFooter
            text="Don’t have an account? "
            navigate="Sign Up"
            to="/signup"
            footerText="Sign in"
          />
        {/* </div> */}
      </div>
      <div className="sm:hidden max-sm:hidden lg:block ">
        <Formside />
      </div>
    </main>
  );
};

export default SignIn;
