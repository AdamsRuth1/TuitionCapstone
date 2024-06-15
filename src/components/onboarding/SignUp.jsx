// import SignupForm from "../views/SignupForm";
import SignupForm from "../Auth/SignupForm";
import Formside from "../Auth/Formside";
import SignInHeader from "../Auth/SignInHeader";
import SignInFooter from "../Auth/SignInFooter";

const SignUp = () => {
  return (
    <section>
      <div className="grid grid-cols-2">
        <div className="pl-[7.5rem]">
          <SignInHeader
            header="Get Started"
            Paragraph="Over 1,000 users are already using Tuition to pay their fees abroad - join the easy way to pay!"
          />
          <SignupForm />
          <SignInFooter
            text="Already have an account? "
            navigate="Sign in"
            to="/signin"
            footerText="Sign up"
          />
        </div>
        <div>
          <Formside />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
