import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, List } from "components";

const CategoriesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue_gray-100 flex flex-col items-center justify-end mx-auto w-full">
        <div className="bg-yellow-100 flex flex-col items-center justify-start pb-0.5 pl-0.5 w-full">
          <div className="flex flex-col justify-start mb-[3244px] w-full">
            <Img
              className="common-pointer h-[119px] md:h-auto object-cover w-full"
              src="images/img_navbar1_119x1744.png"
              alt="navbarOne"
              onClick={() => navigate("/blog")}
            />
            <Img
              className="h-[72px] md:h-auto md:ml-[0] ml-[316px] mt-[76px] object-cover w-[18%]"
              src="images/img_header1.png"
              alt="headerOne"
            />
            <Img
              className="h-px max-w-[1110px] mt-[29px] mx-auto w-full"
              src="images/img_separatorhorizontal.svg"
              alt="separatorhorizo"
            />
            <Img
              className="h-[295px] md:h-auto max-w-[1110px] mt-16 mx-auto object-cover w-full"
              src="images/img_group91.png"
              alt="groupNinetyOne"
            />
            <Img
              className="h-[295px] md:h-auto max-w-[1110px] mt-16 mx-auto object-cover w-full"
              src="images/img_group101.png"
              alt="group101"
            />
            <List
              className="flex flex-col gap-16 items-center max-w-[1110px] mt-[50px] mx-auto md:px-5 w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                <Img
                  className="sm:flex-1 h-[295px] md:h-auto mb-3.5 object-cover w-[23%] sm:w-full"
                  src="images/img_r311.png"
                  alt="r311"
                />
                <Img
                  className="sm:flex-1 h-[295px] md:h-auto sm:ml-[0] ml-[42px] sm:mt-0 mt-3.5 object-cover w-[23%] sm:w-full"
                  src="images/img_r321.png"
                  alt="r321"
                />
                <Img
                  className="sm:flex-1 h-[295px] md:h-auto sm:ml-[0] ml-[18px] sm:mt-0 mt-3.5 object-cover w-[23%] sm:w-full"
                  src="images/img_r331.png"
                  alt="r331"
                />
                <Img
                  className="sm:flex-1 h-[295px] md:h-auto mb-3.5 sm:ml-[0] ml-[30px] object-cover w-[23%] sm:w-full"
                  src="images/img_r341.png"
                  alt="r341"
                />
              </div>
              <div className="flex-1 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-full">
                <Img
                  className="flex-1 h-[295px] md:h-auto object-cover w-full"
                  src="images/img_r411.png"
                  alt="r411"
                />
                <Img
                  className="flex-1 h-[295px] md:h-auto object-cover w-full"
                  src="images/img_r421.png"
                  alt="r421"
                />
                <Img
                  className="flex-1 h-[295px] md:h-auto object-cover w-full"
                  src="images/img_r431.png"
                  alt="r431"
                />
                <Img
                  className="flex-1 h-[295px] md:h-auto object-cover w-full"
                  src="images/img_r441.png"
                  alt="r441"
                />
              </div>
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                <Img
                  className="sm:flex-1 h-[295px] md:h-auto object-cover w-[23%] sm:w-full"
                  src="images/img_desktop31.png"
                  alt="desktopThirtyOne"
                />
                <Img
                  className="sm:flex-1 h-[295px] md:h-auto sm:ml-[0] ml-[42px] object-cover w-[23%] sm:w-full"
                  src="images/img_desktop21.png"
                  alt="desktopTwentyOne"
                />
                <Img
                  className="sm:flex-1 h-[295px] md:h-auto sm:ml-[0] ml-[18px] object-cover w-[23%] sm:w-full"
                  src="images/img_desktop11.png"
                  alt="desktopEleven"
                />
                <Img
                  className="sm:flex-1 h-[295px] md:h-auto sm:ml-[0] ml-[30px] object-cover w-[23%] sm:w-full"
                  src="images/img_desktop4.png"
                  alt="desktopFour"
                />
              </div>
            </List>
            <Img
              className="h-[446px] md:h-auto mt-[92px] object-cover w-full"
              src="images/img_desktop1.png"
              alt="desktopOne"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;
