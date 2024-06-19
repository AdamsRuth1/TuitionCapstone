import SignInHeader from "../Auth/SignInHeader";
import SignUpWithGoogle from "../Auth/SignUpWithGoogle";
import SiginInput from "../Auth/SiginInput";
import SignInFooter from "../Auth/SignInFooter";
import Formside from "../Auth/Formside";
import axios from "axios";
const SignIn = () => {
  const HandleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      const GoogleSignIn = await axios.post(
        "https://mole-relevant-salmon.ngrok-free.app/api/auth/signin/google"
      );
      if (!GoogleSignIn.ok) {
        alert("error message");
      } else {
        const Response = await GoogleSignIn;
        console.log(Response);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <main className="grid grid-cols-2  bg-white">
      <div className="pl-[7.5rem]">
        <div className="">
          <SignInHeader
            header="Welcome Back"
            Paragraph="Sign in to Tuition to continue"
          />
          <SignUpWithGoogle HandleGoogleSignIn={HandleGoogleSignIn} />

          <SiginInput />

          <SignInFooter
            text="Don’t have an account? "
            navigate="Sign Up"
            to="/signup"
            footerText="Sign in"
          />
        </div>
      </div>
      <div className="sm:hidden max-sm:hidden lg:block ">
        <Formside />
      </div>
    </main>
  );
};

export default SignIn;
