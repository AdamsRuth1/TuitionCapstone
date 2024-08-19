import { useNavigate } from "react-router-dom";
import Profile from "../../assets/Icons/Profile-icon.svg";
import Setting from "../../assets/Icons/Settings-icon.svg";
import LogOut from "../../assets/Icons/LogOut-icon.svg";
import SignInLogo from "../../assets/images/home.png";
import { NavLink, Link } from "react-router-dom";


const ProfilePopup = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    // localStorage.removeItem("token");
    // localStorage.removeItem("email");
    // localStorage.removeItem("first_name");
    // localStorage.removeItem("last_name");
    // localStorage.removeItem("u-id");
    navigate("/signin");
  };

  return (
    <div className="">
      <div className="absolute bg-white w-[248px] h-[230px] top-14 -right-20 p-[1.5rem] rounded-[8px]">
        <Link to="/dashboard/profile" className="flex gap-[0.8rem] py-3 w-[224px] h-[48px] rounded-[8px]  padding-[12px]  font-Modarat font-bold text-[#0A0E27] leading-[16px] text-[14px] cursor-pointer">
          <div>
            <img src={Profile} alt="profile icon" />
          </div>

          <h4 className="pt-1" >Profile</h4>
        </Link>
        <div className="flex gap-[0.8rem]  py-5 w-[224px] h-[48px] rounded-[8px] padding-[12px] font-Modarat font-bold text-[#0A0E27] leading-[16px] text-[14px] cursor-pointer">
          <div>
            <img src={Setting} alt="setting icon" />
          </div>

          <h4 className="pt-1">Settings</h4>
        </div>
        <div
          onClick={handleLogOut}
          className="flex gap-[0.8rem] py-5 w-[224px] h-[48px] font-Modarat font-bold text-[#0A0E27] leading-[16px] text-[14px] rounded-[8px] padding-[12px] cursor-pointer"
        >
          <div>
            <img src={LogOut} alt="log out icon" />
          </div>

          <h4 className="pt-1">Log Out</h4>
        </div>
        <Link to="/" className="flex gap-[0.8rem] py-3 w-[224px] h-[48px] rounded-[8px]  padding-[12px]  font-Modarat font-bold text-[#0A0E27] leading-[16px] text-[14px] cursor-pointer">
          <div>
            <img src={SignInLogo} alt="profile icon" style={{width:"20px", height:"20px"}} />
          </div>

          <h4 className="pt-1">Home Page</h4>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePopup;
