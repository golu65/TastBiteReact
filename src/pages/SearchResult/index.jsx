import React from "react";

import { Img } from "components";

const SearchResultPage = () => {
  return (
    <>
      <div className="bg-blue_gray-100 flex h-[3398px] justify-end mx-auto relative w-full">
        <div className="bg-yellow-100 flex flex-col md:gap-10 gap-[2833px] h-full items-center justify-start mt-auto mx-auto pb-0.5 pl-0.5 w-full">
          <Img
            className="h-[119px] md:h-auto object-cover w-full"
            src="images/img_navbar1_119x1744.png"
            alt="navbarOne"
          />
          <Img
            className="h-[446px] md:h-auto max-w-[1740px] mb-[2504px] mx-auto object-cover w-full"
            src="images/img_desktop1.png"
            alt="desktopOne"
          />
        </div>
        <Img
          className="absolute h-[2751px] inset-x-[0] mx-auto object-cover top-[5%] w-full"
          src="images/img_group201.png"
          alt="group201"
        />
      </div>
    </>
  );
};

export default SearchResultPage;
