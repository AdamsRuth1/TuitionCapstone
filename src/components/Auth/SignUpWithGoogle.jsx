import Google from "../../assets/Icons/Google-icon.svg";
import Apple from "../../assets/Icons/Apple-Icon.svg";

const SignUpWithGoogle = ({ HandleAppleSignIn, HandleGoogleSignIn }) => {
  return (
    <>
      <div className=" pt-[4rem] ">
        <div className="pb-[1.5rem]  max-sm:pr-[1rem] max-sm:pl-[1rem]">
          <button
            onClick={HandleGoogleSignIn}
            className=" Google-border flex bg-white justify-center rounded-[4px]   max-sm:m-auto max-sm:w-full w-[81%] h-[48px] gap-[0.62rem]"
          >
            <img src={Google} alt="Google icon" className="-mt-[0.3rem]" />
            Continue with Google
          </button>
        </div>
        <div className="max-sm:pr-[1rem] max-sm:pl-[1rem]">
          <button
            onClick={HandleAppleSignIn}
            className=" Google-border flex bg-white justify-center rounded-[4px]   max-sm:m-auto max-sm:w-full w-[81%] h-[48px] gap-[0.62rem]"
          >
            <img
              src={Apple}
              alt="Google icon"
              className="-mt-[0.3rem] font-Modarat"
            />
            Continue with Apple
          </button>
        </div>
      </div>
      <div className="flex pt-[2rem]  text-center pb-3 lg:w-[480px] max-sm:w-[350px]">
        <div className="line  w-[215px] h-0"></div>

        <span className="text-center ">Or</span>
        <div className="line  w-[215px] h-0"></div>
      </div>
    </>
  );
};

export default SignUpWithGoogle;
