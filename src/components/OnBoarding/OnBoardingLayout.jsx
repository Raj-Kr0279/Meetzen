import React, { Suspense } from "react";
import LeftColumn from "./LeftColumn";
import { Outlet, useOutletContext } from "react-router-dom";
import FooterText from "../FooterText/FooterText";

const OnBoardingLayout = () => {


  return (
    <>
      <div className="h-screen flex justify-center items-center bg-background">
        <div className="md:max-w-7xl w-full lg:w-3/4">
          <div className="flex-col flex md:flex-row p-4 gap-12  md:gap-8">
            <LeftColumn />
            <div className="flex-1">
              <Suspense fallback={()=><p>loading....</p>}>
              <Outlet />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
      <FooterText />
    </>
  );
};

export default OnBoardingLayout;

