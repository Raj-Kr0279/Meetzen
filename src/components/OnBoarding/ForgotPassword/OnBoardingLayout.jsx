import React from "react";
import LeftColumn from "../LeftColumn";
import { Outlet } from "react-router-dom";
import FooterText from "../../FooterText/FooterText";

const OnBoardingLayout = () => {
  return (
    <>
      <div className="h-screen">
        <div className="flex justify-center max-w-7xl m-auto items-center">
          <LeftColumn />
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
      <FooterText />
    </>
  );
};

export default OnBoardingLayout;
