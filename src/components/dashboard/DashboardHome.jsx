import Profile from "../../assets/images/Profile empty.png";
import logo from "../../assets/images/Vector (4).png";
import Dashboard from "../views/dashboard";

const DashboardHome = () => {
  const firstname = JSON.parse(localStorage.getItem("first_name"));
  return (
    <Dashboard>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-4">
          <img src={Profile} alt="Profile" />
        </div>
        <div>
          <h1 className="font-millik text-3xl mb-2 leading-10">
            Hello {firstname}
          </h1>
          <p className="text-center font-Modarat text-customGray text-lg">
            Welcome to Tuition
          </p>
        </div>
      </div>
      <div className="bg-customLightBlueGray mt-16 rounded-lg border-b shadow-sm w-2/4 flex flex-col  text-center">
        <div className="my-20">
          <div className="mb-10 flex justify-center">
            <img src={logo} alt="Logo" />
          </div>
          <div>
            <h1 className="font-Modarat font-bold text-2xl text-customBlack mb-4">
              No transaction
            </h1>
            <p className="font-Modarat text-customGray text-base">
              You are yet to make any payment here. Click “Make payment” to get
              started
            </p>
          </div>
          <button className="bg-customButton mt-10 text-white font-Modarat text-lg py-3 px-6 rounded-lg mb-10">
            Make Payment
          </button>
        </div>
      </div>
      <div className="mt-10  flex  mb-72">
        <button className="rounded-lg text-base bg-white  text-customEnroll font-Modarat mr-4 px-6 py-3 border-customEnroll border-2">
          Previous
        </button>
        <button className="rounded-lg text-customEnroll text-base bg-white font-Modarat px-6 py-3 border-customEnroll border-2">
          Next
        </button>
      </div>
    </Dashboard>
  );
};

export default DashboardHome;
