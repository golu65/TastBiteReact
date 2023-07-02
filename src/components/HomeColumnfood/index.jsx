import React from "react";

import { Img, Text } from "components";

const HomeColumnfood = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[98px] items-center justify-start p-[23px] sm:px-5 w-[98px]"
          style={{ backgroundImage: "url('images/img_group5.svg')" }}
        >
          {!!props?.food ? (
            <Img
              className="h-[50px] md:h-auto object-cover w-[50px]"
              alt="food"
              src="props?.food"
            />
          ) : null}
        </div>
        <Text
          className="md:text-2xl sm:text-[22px] text-[26px] text-black-900 w-auto"
          size="txtMontserratBold26"
        >
          {props?.healthyfood}
        </Text>
        <Text
          className="max-w-[381px] md:max-w-full text-black-900 text-center text-lg"
          size="txtMontserratMedium18Black900"
        >
          {props?.description}
        </Text>
      </div>
    </>
  );
};

HomeColumnfood.defaultProps = {
  healthyfood: "Qualityfull Food",
  description: (
    <>
      But I must explain to you how all this
      <br />
      mistaken idea of denouncing pleasur and
      <br />
      prasising pain was bron.
    </>
  ),
};

export default HomeColumnfood;
