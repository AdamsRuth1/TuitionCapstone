import SignInHeader from "../views/SignInHeader";
import SignUpWithGoogle from "../views/SignUpWithGoogle";
import SiginInput from "../views/SiginInput";
import Button from "../views/Button";
import SignInFooter from "../views/SignInFooter";
import Formside from "../views/Formside";
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
