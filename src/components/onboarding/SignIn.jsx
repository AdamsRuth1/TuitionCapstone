import SignInHeader from "../Auth/SignInHeader";
import SignUpWithGoogle from "../Auth/SignUpWithGoogle";
import SiginInput from "../Auth/SiginInput";
import Button from "../Auth/Button";
import SignInFooter from "../Auth/SignInFooter";
import Formside from "../Auth/Formside";
const SignIn = () => {
  return (
    <main className="grid grid-cols-2  bg-white">
      <div className="px-[7.5rem]">
        <div className="">
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
