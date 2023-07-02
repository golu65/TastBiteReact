import React from "react";

import { useNavigate } from "react-router-dom";

import { Img } from "components";

const SearchPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue_gray-100 flex h-[2924px] justify-end mx-auto relative w-full">
        <div className="bg-yellow-100 flex flex-col h-full items-center justify-start mt-auto mx-auto py-[110px] w-full">
          <Img
            className="h-[691px] sm:h-auto object-cover w-full"
            src="images/img_searchexpanded.png"
            alt="searchexpanded"
          />
          <div className="flex flex-col md:gap-10 gap-20 items-center justify-start max-w-[1110px] mt-[38px] mx-auto md:px-5 w-full">
            <Img
              className="h-[894px] md:h-auto object-cover w-full"
              src="images/img_group151.png"
              alt="group151"
            />
            <Img
              className="h-[285px] md:h-auto object-cover w-full"
              src="images/img_categories5.png"
              alt="categoriesFive"
            />
          </div>
          <Img
            className="h-[631px] md:h-auto max-w-[1604px] mb-[2985px] mt-20 mx-auto object-cover w-full"
            src="images/img_newsletter1.png"
            alt="newsletterOne"
          />
        </div>
        <Img
          className="common-pointer absolute h-[110px] inset-x-[0] mx-auto object-cover top-[0] w-full"
          src="images/img_searchcollapsed.png"
          alt="searchcollapsed"
          onClick={() => navigate("/searchresult")}
        />
      </div>
    </>
  );
};

export default SearchPage;
