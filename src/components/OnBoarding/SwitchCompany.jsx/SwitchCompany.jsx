import React from "react";
import LeftColumn from "../LeftColumn";
import RightColumn from "../RightColumn";
import { AiOutlinePlus } from "react-icons/ai";
import { Navigate, useNavigate } from "react-router-dom";
import OnboardingHeader from "../OnboardingHeader";

const SwitchCompany = () => {
  const navigate = useNavigate();
  return (
    <>
      <OnboardingHeader
        heading="Switch Company"
        subHeading="Select a company"
      />

      <div className="border border-transparent mt-12 rounded-2xl overflow-hidden">
        <div className="flex border-b px-6 py-3 gap-4 items-center bg-hover-bg">
          <div className="bg-green-500 w-8 h-8 flex justify-center items-center rounded-full text-white">
            <span>P</span>
          </div>
          <div>
            <p className="text-foreground font-semibold leading-none text-base">
              proCS
            </p>
            <span className="text-light font-medium text-smallCaption">
              email@gmail.com
            </span>
          </div>
        </div>
        <div className="flex border-b px-6 py-3 gap-4 items-center ">
          <div className="bg-purple-500 w-8 h-8 flex justify-center items-center rounded-full text-white">
            <span>N</span>
          </div>
          <div>
            <p className="text-foreground font-semibold leading-none text-base">
              NIIT
            </p>
            <span className="text-light font-medium text-smallCaption">
              j******4
            </span>
          </div>
        </div>
        <div className="flex border-b px-6 py-3 gap-4 items-center ">
          <div className="bg-primary w-8 h-8 flex justify-center items-center rounded-full text-white">
            <span>M</span>
          </div>
          <div>
            <p className="text-foreground font-semibold leading-none text-base">
              MSTC
            </p>
            <span className="text-light font-medium text-smallCaption">
              email@gmail.com
            </span>
          </div>
        </div>
        <div className="flex border-b px-6 py-3 gap-4 items-center ">
          <div className="bg-red-500 w-8 h-8 flex justify-center items-center rounded-full text-white">
            <span>J</span>
          </div>
          <div>
            <p className="text-foreground font-semibold leading-none text-base">
              Jubiliant
            </p>
            <span className="text-light font-medium text-smallCaption">
              email@gmail.com
            </span>
          </div>
        </div>
        <button
          onClick={() => navigate("/")}
          className="bg-primary px-6 w-full text-white py-4 flex gap-4 items-center"
        >
          <AiOutlinePlus /> Add other company
        </button>
      </div>
    </>
  );
};

export default SwitchCompany;
