

import Header from "../views/header";
import Logo from "../../assets/images/SigninLogo copy.svg";
import Input from "../Blog/Input";
import { useState } from "react";
import { motion } from "framer-motion";
import Post from "../Blog/Post";
import Blog1 from "../../assets/images/Blogimage1.png";
import Blog2 from "../../assets/images/Blogimage2.png";
import Blog3 from "../../assets/images/Blogimage3.png";
import Blog4 from "../../assets/images/Blogimage4.png";
import Blog5 from "../../assets/images/Blogimage5.png";
import Blog6 from "../../assets/images/Blogimage6.png";
import Pagination from "../Blog/Pagination";
import Newsletter from "../Blog/Newletter";
import searchIcon from "../../assets/Icons/search-icon.png";
import Footer from "../views/footer";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const Blogs = [
    { imgUrl: Blog1, heading: "So You Want To Study Abroad? Top 10 Schools To Choose", choice1: "Study abroad", choice2: "School", choice3: "Finance" },
    { imgUrl: Blog2, heading: "How To Properly Write A Proposal Letter To Your University Of Choice", choice1: "Travel", choice2: "School", choice3: "Visa" },
    { imgUrl: Blog3, heading: "Visa Voyage: Demystifying the Application Process", choice1: "Travel", choice2: "Study abroad Visa", choice3: "Visa" },
    { imgUrl: Blog4, heading: "Easy Steps To Pay For Your Next Coursera Certificate", choice1: "Payment", choice2: "E-learning", choice3: "Finance" },
    { imgUrl: Blog5, heading: "Easy Steps To Pay For Your Next Coursera Certificate", choice1: "Scholarships", choice2: "E-learning", choice3: "Visa" },
    { imgUrl: Blog6, heading: "So You Want To Study Abroad? Top 10 Schools To Choose", choice1: "Study abroad", choice2: "School" },
    { imgUrl: Blog4, heading: "Easy Steps To Pay For Your Next Coursera Certificate", choice1: "Payment", choice2: "E-learning", choice3: "Finance" },
    { imgUrl: Blog1, heading: "So You Want To Study Abroad? Top 10 Schools To Choose", choice1: "Study abroad", choice2: "School", choice3: "Finance" },
    { imgUrl: Blog3, heading: "Visa Voyage: Demystifying the Application Process", choice1: "Travel", choice2: "Study abroad Visa", choice3: "Visa" }
  ];

  const [active, setActiveTab] = useState("All");
  
  const Tabs = [
    "All",
    "Study Abroad",
    "School",
    "Scholarships",
    "Travel",
    "Student Loans"
  ];

  const handleTabs = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1); 
  };

  const filteredBlogs = Blogs.filter(blog => blog.heading.toLowerCase().includes(searchTerm.toLowerCase()));

  const getPaginatedBlogs = () => {
    let filtered = filteredBlogs;
    
    switch (active) {
      case "All":
        filtered = filteredBlogs;
        break;
      case "Study Abroad":
        filtered = filteredBlogs.filter(blog => blog.choice1 === "Study abroad");
        break;
      case "Scholarships":
        filtered = filteredBlogs.filter(blog => blog.choice1 === "Scholarships");
        break;
      case "Travel":
        filtered = filteredBlogs.filter(blog => blog.choice1 === "Travel");
        break;
      case "Student Loans":
        filtered = filteredBlogs.filter(blog => blog.choice3 === "Finance");
        break;
      case "School":
        filtered = filteredBlogs.filter(blog => blog.choice2 === "School");
        break;
      default:
        filtered = [];
        break;
    }

    const startIndex = (currentPage - 1) * postsPerPage;
    return filtered.slice(startIndex, startIndex + postsPerPage);
  };

  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);

  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <div className="">
          <div className="flex justify-center gap-[1.5rem] lg:pt-[5.75rem] max-sm:pt-12 sm:pt-[5rem]">
            <img
              src={Logo}
              alt="website logo"
              className="max-sm:hidden sm:hidden"
            />
            <h1 className="font-millik font-normal lg:text-[38px] sm:text-[1.5rem] max-sm:text-[25px] leading-[48px] text-[#0A0E27]">
              All you need in one place
            </h1>
          </div>
          <div className="text-center m-auto lg:w-[609px] max-sm:w-[300px] sm:w-[500px] max-sm:pt-2 lg:pt-[1rem]">
            <p className="font-Modarat font-normal text-[16px] max-sm:leading-[1.2rem] lg:leading-[24px] text-[#606569]">
              Find essential resources on everything you need to know, from
              program options and visa requirements to budgeting and cultural
              do's and don'ts
            </p>
          </div>
          <Input
            text="Go"
            placeholder="Search topics, information"
            icon={searchIcon}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="lg:mx-[6rem] pt-[5.125rem] sm:mx-0">
            <div className="flex justify-between lg:pr-[3rem]">
              <div className="flex lg:gap-[1.5rem] max-sm:hidden sm:hidden lg:flex">
                {Tabs.map((tab, index) => (
                  <div key={index}>
                    <h4
                      className={`lg:py-[12px] max-sm:lg:px-[24px] max-sm:pl-2 font-Modarat font-normal lg:text-[16px] max-sm:text-[0.7rem] lg:leading-[16px] cursor-pointer
                       ${active === tab ? "text-[#0A0E27] border-b border-[#0A0E27]" : "text-[#51575D]"}
                       `}
                      onClick={() => handleTabs(tab)}
                    >
                      {tab}
                    </h4>
                  </div>
                ))}
              </div>
              <div className="max-sm:hidden sm:hidden lg:flex">
                <select
                  className="lg:px-2 -mt-[1.6rem] text-[#51575D] font-normal text-[16px] leading-[16px] cursor-pointer outline-none border border-[#CCCCCC] rounded-[8px]"
                  onChange={(e) => handleTabs(e.target.value)}
                >
                  <option value="All">See all</option>
                  <option value="All">All</option>
                  <option value="Study Abroad">Study Abroad</option>
                  <option value="School">School</option>
                  <option value="Scholarships">Scholarships</option>
                  <option value="Travel">Travel</option>
                  <option value="Student Loans">Student Loans</option>
                </select>
              </div>
            </div>
            <Post Blogs={getPaginatedBlogs()} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
            <Newsletter />
          </div>
        </div>
      </motion.div>
      <Footer />
    </section>
  );
};

export default BlogPage;

