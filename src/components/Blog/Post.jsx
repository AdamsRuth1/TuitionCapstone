// import React, { useState } from "react";
import LazyImage from "../dashboard/PayTuition/LazyImamge";
const Post = ({ Blogs }) => {
  return (
    <main className="lg:pt-[4.5rem] ">
      <div className="lg:grid lg:grid-cols-3 max-sm:grid-cols-1 sm:grid-cols-3">
        {Blogs.map((posts, index) => (
          <div key={index} className="sm:px-0 max-sm:px-5 max-sm:w-full lg:mx-2">
            <div className=" ">
              <LazyImage src={posts.imgUrl} alt={posts.choice1} />
            </div>
            <div className="pt-[1rem] ">
              <h2 className="font-Moadarat font-bold lg:text-[20px] max-sm:text-[14px] max-sm:pb-3 lg:leading-[32px] text-[#0A0E27] sm:pr-10 sm:m-auto ">
                {posts.heading}
              </h2>
              <div className="flex gap-[1.6rem] lg:pb-[5rem]  pb-8 lg:pt-[1.6rem] font-Modarat font-normal lg:text-[14px] leading-[16px] text-[#4B56A0]">
                <p>{posts.choice1}</p>
                <p>{posts.choice2}</p>
                <p>{posts.choice3}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Post;
