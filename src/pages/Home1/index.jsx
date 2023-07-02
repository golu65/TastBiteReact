import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, List, Text } from "components";
import HomeColumnfood from "components/HomeColumnfood";

const Home1Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue_gray-100 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <Img
          className="common-pointer h-[119px] sm:h-auto object-cover w-full"
          src="images/img_navbar1.png"
          alt="navbarOne"
          onClick={() => navigate("/search")}
          
        />
        <div className="bg-yellow-100 flex flex-col items-center justify-end pl-1.5 pt-1.5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1740px] mt-[34px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start w-[63%] md:w-full">
              <Img
                className="h-[499px] md:h-auto object-cover w-full"
                src="images/img_style011.png"
                alt="style011"
              />
              <Img
                className="h-[405px] md:h-auto mt-20 object-cover w-full"
                src="images/img_recipeblock011.png"
                alt="recipeblock011"
              />
              <Img
                className="h-[405px] md:h-auto mt-16 object-cover w-full"
                src="images/img_recipeblock01.png"
                alt="recipeblockOne"
              />
              <Img
                className="common-pointer h-[278px] md:h-auto mt-20 object-cover w-full"
                src="images/img_categories1.png"
                alt="categoriesOne"
                onClick={() => navigate("/categories")}
              />
            </div>
            <div className="flex flex-col items-center justify-start mt-[69px] w-[93%] md:w-full">
              <Img
                className="h-[631px] sm:h-auto object-cover w-full"
                src="images/img_newsletter1.png"
                alt="newsletterOne"
              />
              <Img
                className="h-[1548px] sm:h-auto mt-[69px] object-cover w-[68%] md:w-full"
                src="images/img_collections1.png"
                alt="collectionsOne"
              />
              <Text
                className="mt-[79px] text-lg text-yellow-900"
                size="txtMontserratMedium18"
              >
                Services
              </Text>
              <Text
                className="mt-1.5 text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                size="txtMontserratBold36"
              >
                Why Choose Our Favorite Food
              </Text>
              <List
                className="sm:flex-col flex-row gap-[53px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[54px] w-[98%]"
                orientation="horizontal"
              >
                <div className="flex flex-col items-center justify-start w-full">
                  <HomeColumnfood className="bg-white-A700 border border-gray-400 border-solid flex flex-col gap-[42px] items-center justify-start md:px-10 sm:px-5 px-[52px] py-[103px] rounded-[35px] w-[485px] sm:w-full" />
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <HomeColumnfood
                    className="bg-white-A700 flex flex-col gap-[42px] items-center justify-start md:px-10 sm:px-5 px-[52px] py-[103px] rounded-[35px] shadow-bs w-[485px] sm:w-full"
                    healthyfood="Healthy Food"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <HomeColumnfood
                    className="bg-white-A700 border border-gray-400 border-solid flex flex-col gap-[42px] items-center justify-start md:px-10 sm:px-5 px-[52px] py-[103px] rounded-[35px] w-[485px] sm:w-full"
                    healthyfood="Fast Delivery"
                  />
                </div>
              </List>
              <div className="flex flex-col items-center justify-start mt-[134px] w-full">
                <Text
                  className="text-lg text-yellow-900"
                  size="txtMontserratMedium18"
                >
                  How to work
                </Text>
                <Text
                  className="mt-[5px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                  size="txtMontserratBold36"
                >
                  Food Us An Important Part Of A Balanced Diet
                </Text>
                <div className="md:h-[1349px] h-[454px] relative w-full">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                      <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-12 w-[24%] md:w-full">
                        <Img
                          className="h-[216px] sm:h-auto object-cover w-full"
                          src="images/img_913741.png"
                          alt="913741"
                        />
                        <Text
                          className="ml-0.5 md:ml-[0] mt-11 md:text-2xl sm:text-[22px] text-[26px] text-black-900"
                          size="txtMontserratBold26"
                        >
                          CHOOSE
                        </Text>
                        <Text
                          className="ml-0.5 md:ml-[0] mt-[25px] text-black-900 text-lg"
                          size="txtMontserratMedium18Black900"
                        >
                          <>
                            Do you want to lose weight, exercise,
                            <br />
                            adhere to a therapeutic diet? Our
                            <br />
                            dietitian will help you with choosing the
                            <br />
                            right program!
                          </>
                        </Text>
                      </div>
                      <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[47px] w-[23%] md:w-full">
                        <Text
                          className="md:text-2xl sm:text-[22px] text-[26px] text-black-900"
                          size="txtMontserratBold26"
                        >
                          PREPARE FOOD
                        </Text>
                        <Text
                          className="mt-[25px] text-black-900 text-lg"
                          size="txtMontserratMedium18Black900"
                        >
                          <>
                            Do you want to lose weight, exercise,
                            <br />
                            adhere to a therapeutic diet? Our
                            <br />
                            dietitian will help you with choosing the
                            <br />
                            right program!
                          </>
                        </Text>
                        <Img
                          className="h-[216px] sm:h-auto mt-[45px] object-cover w-[88%] md:w-full"
                          src="images/img_friedchickenpngimage.png"
                          alt="friedchickenpng"
                        />
                      </div>
                      <div className="flex md:flex-1 flex-col justify-start w-[27%] md:w-full">
                        <Img
                          className="h-[313px] sm:h-auto object-cover w-full"
                          src="images/img_blankpackagetransparentpng.png"
                          alt="blankpackagetra"
                        />
                        <Text
                          className="md:ml-[0] ml-[257px] md:text-2xl sm:text-[22px] text-[26px] text-black-900"
                          size="txtMontserratBold26"
                        >
                          DELIVER
                        </Text>
                        <Text
                          className="ml-2 md:ml-[0] mt-[25px] text-black-900 text-lg text-right"
                          size="txtMontserratMedium18Black900"
                        >
                          <>
                            Do you want to lose weight, exercise,
                            <br />
                            adhere to a therapeutic diet? Our
                            <br />
                            dietitian will help you with choosing the
                            <br />
                            right program!
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[287px] inset-x-[0] mx-auto top-[12%]"
                    src="images/img_group28.svg"
                    alt="groupTwentyEight"
                  />
                </div>
              </div>
              <Img
                className="h-[2062px] sm:h-auto mt-[135px] object-cover w-[70%] md:w-full"
                src="images/img_latestrecipes1.png"
                alt="latestrecipesOne"
              />
            </div>
            <Img
              className="h-[446px] md:h-auto mt-[133px] object-cover w-full"
              src="images/img_desktop1.png"
              alt="desktopOne"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Page;
