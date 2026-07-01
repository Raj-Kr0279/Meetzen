import React from "react";
import LeftColumn from "../LeftColumn";
import { Outlet, useOutletContext } from "react-router-dom";
import FooterText from "../../FooterText/FooterText";

const OnBoardingLayout = () => {


  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className=" max-w-7xl w-3/4">
          <div className="flex-col flex md:flex-row p-4  gap-8 md:gap-4">
            <LeftColumn />
            <div className="flex-1">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <FooterText />
    </>
  );
};

export default OnBoardingLayout;

