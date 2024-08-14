import SignupForm from "../Auth/SignupForm";
import Formside from "../Auth/Formside";
import SignInHeader from "../Auth/SignInHeader";
import SignInFooter from "../Auth/SignInFooter";

const SignUp = () => {
  return (
    <section className="relative max-sm:bg-AuthBackground sm:bg-AuthBackground lg:bg-none bg-cover bg-center bg-no-repeat min-h-screen">
      <div className="absolute inset-0 max-sm:bg-black opacity-20"></div> {/* Optional overlay */}
      <div className="relative z-10 grid lg:grid-cols-2 max-sm:grid-cols-1 max-sm:px-4 sm:px-6 py-8">
        <div className="lg:pl-24 flex flex-col justify-center">
          <SignInHeader
            header="Get Started"
            Paragraph="Over 1,000 users are already using Tuition to pay their fees abroad - join the easy way to pay!"
            MobileParagraph="Join the easy way to pay with Over 1,000 users!"
          />
          <SignupForm />
          <SignInFooter
            text="Already have an account? "
            navigate="Sign in"
            to="/signin"
            footerText="Sign up"
          />
        </div>
        <div className="hidden lg:block">
          <Formside />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
