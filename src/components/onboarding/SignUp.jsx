import SignInHeader from "../views/SignInHeader";
import SignUpWithGoogle from "../views/SignUpWithGoogle";
import SiginInput from "../views/SiginInput";
import Button from "../views/Button";
import SignInFooter from "../views/SignInFooter";
import Formside from "../views/Formside"
const SignUp = () => {
  return (
    <main className="grid grid-cols-2 bg-white">
      <div>
        <div className="px-[7.5rem]">
          <SignInHeader
            header="Welcome Back"
            Paragraph="Sign in to Tuition to continue"
          />
          <SignUpWithGoogle />

          <SiginInput />
          <p className="pt-[1rem] moderat-font text-[#606569] font-normal text-[1rem] leading-[1rem]">
            Forgot password?
          </p>
          <Button text="Sign Up" />
          <SignInFooter
            text="Don’t have an account? "
            navigate="Sign Up"
            to="/signin"
            footerText="Sign in"
          />
        </div>
      </div>
      <div className="flex justify-center ">
        <Formside />
      </div>
    </main>
  );
};

export default SignUp;
