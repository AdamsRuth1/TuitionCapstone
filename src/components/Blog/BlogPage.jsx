import Header from "../views/header";
import Logo from "../../assets/images/SigninLogo copy.svg";
import Search from "./Search";
import { useState } from "react";
// import { act } from "react";

const BlogPage = () => {
  const [active, setActiveTab] = useState("All");
  const Tabs = [
    "All",
    "Study Abroad",
    "School",
    "Scholarships",
    "Travel",
    "Student Loans",
  ];
  const handleTabs = (tab) => {
    setActiveTab(tab);
  };

  const contentToRender = () => {
    switch (active) {
      case "All":
        return <h1>77777</h1>;
      case "Study Abroad":
        return <h1>66666</h1>;
      case "Scholarships":
        return <h1>555555</h1>;
      case "Travel":
        return <h1>444444</h1>;
      case "Student Loans":
        return <h1>e222222</h1>;
      case "School":
        return <h1>schoollll</h1>;
      default:
        return null;
    }
  };

  return (
    <section>
      <Header />
      <div className="">
        <div className="flex justify-center gap-[1.5rem] lg:pt-[5.75rem]">
          <img src={Logo} alt=" website logo" />
          <h1 className="font-millik font-normal text-[38px] leading-[48px] text-[#0A0E27]">
            All you need in one place
          </h1>
        </div>
        <div className="text-center m-auto w-[609px] lg:pt-[1rem]">
          <p className="font-Modarat font-normal text-[16px] leading-[24px] text-[#606569]">
            Find essential resources on everything you need to know, from
            program options and visa requirements to budgeting and cultural do's
            and don'ts
          </p>
        </div>
        <Search />
        <div className=" lg:mx-[6rem] pt-[5.125rem]">
          <div className="flex gap-[13.625rem]">
            <div className="flex gap-[1.5rem]">
              {Tabs.map((tab, index) => (
                <div key={index}>
                  <h4
                    className={`py-[12px] px-[24px] font-Modarat
                       font-normal text-[16px] leading-[16px] cursor-pointer
                       ${active === tab ? "text-[#0A0E27] border-b border-[#0A0E27]" : "text-[#51575D]"}
                       `}
                    onClick={() => handleTabs(tab)}
                  >
                    {tab}
                  </h4>
                </div>
              ))}
            </div>
            <div className="">
              <select className=" py-[12px] px-[24px] -mt-[1.6rem] outline-none border border-[#CCCCCC] rounded-[8px]">
                <option>see all</option>
                <option value="few"> few</option>
                <option value="few"> many</option>
              </select>
            </div>
          </div>
          {contentToRender()}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
