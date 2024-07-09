import { Navbar } from "../../constants/SidebarData";
import { Link, useLocation } from "react-router-dom";
import LogoExtension from "../../assets/images/Logo Extended.png";

const DashboardSideBar = () => {
  const location = useLocation();
  return (
    <>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen  transition-transform -translate-x-full border-r sm:translate-x-0 bg-white"
        aria-label="Sidebar"
      >
        <div className="flex items-center mt-4 w-full">
          <div className="flex ml-16 md:me-24">
            <img
              src={LogoExtension}
              width={118.31}
              height={36.92}
              className="w-[118.31px] h-[36.92px]  me-3"
              alt="tuition Logo"
            />
          </div>
        </div>

        <nav className="pt-[3rem]  ">
          {Navbar.map((nav, index) => (
            <Link
              key={index}
              to={`/dashboard/${nav.to}`}
              className={`flex gap-[1rem] mb-[1rem]  h-[48px] py-[12px] px-[24px]  text-[#606569] font-Modarat ${
                location.pathname.endsWith(`/dashboard/${nav.to}`)
                  ? "border-l-[6px] border-[#252E6A] bg-[#EEEEEE]"
                  : ""
              }`}
            >
              <img
                src={
                  location.pathname.endsWith(`/dashboard/${nav.to}`)
                    ? nav.InActiveIcon
                    : nav.ActiveIcon
                }
                alt="nav-icons"
              />
              <span className="">{nav.name}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default DashboardSideBar;
