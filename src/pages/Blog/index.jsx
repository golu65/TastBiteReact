import React from "react";

import { Img } from "components";

const BlogPage = () => {
  return (
    <>
      <div className="bg-blue_gray-100 flex flex-col items-center justify-start mx-auto w-full">
        <Img
          className="h-[119px] md:h-auto object-cover w-full"
          src="images/img_navbar1_119x1745.png"
          alt="navbarOne"
        />
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="bg-yellow-100 flex flex-col items-center justify-start m-auto p-[98px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mt-[136px] w-[99%] md:w-full">
              <Img
                className="h-[418px] md:h-auto object-cover w-full"
                src="images/img_header2.png"
                alt="headerTwo"
              />
              <Img
                className="h-[724px] md:h-auto mt-[46px] object-cover w-full"
                src="images/img_video1.png"
                alt="videoOne"
              />
              <Img
                className="h-[261px] md:h-auto mt-[76px] object-cover w-full"
                src="images/img_section011.png"
                alt="section011"
              />
            </div>
            <div className="h-[1110px] md:h-[788px] mt-5 relative w-full">
              <Img
                className="absolute h-[768px] inset-x-[0] mx-auto object-cover top-[0] w-[99%]"
                src="images/img_section021.png"
                alt="section021"
              />
              <Img
                className="absolute bottom-[0] h-[358px] inset-x-[0] mx-auto object-cover w-full"
                src="images/img_quote1.png"
                alt="quoteOne"
              />
            </div>
            <div className="flex flex-col items-center justify-start mb-[237px] mt-[73px] w-[99%] md:w-full">
              <Img
                className="h-[2420px] md:h-auto object-cover w-full"
                src="images/img_section031.png"
                alt="section031"
              />
              <Img
                className="h-[486px] md:h-auto mt-[132px] object-cover w-full"
                src="images/img_authordesktop1.png"
                alt="authordesktopOne"
              />
              <Img
                className="h-[2771px] md:h-auto mt-[45px] object-cover w-full"
                src="images/img_comments1.png"
                alt="commentsOne"
              />
              <Img
                className="h-[812px] md:h-auto mt-[50px] object-cover w-full"
                src="images/img_group231.png"
                alt="group231"
              />
            </div>
          </div>
          <Img
            className="h-[446px] mt-[-202px] mx-auto object-cover w-full z-[1]"
            src="images/img_desktop1.png"
            alt="desktopOne"
          />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
