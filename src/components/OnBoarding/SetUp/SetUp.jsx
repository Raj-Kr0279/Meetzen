import React, { useState } from "react";
import "./stepper.css";
import { FaCheck } from "react-icons/fa";
import TimeZone from "./TimeZone";
import ReviewProfile from "./ReviewProfile";
import SelectLanguage from "./SelectLanguage";
import { Link, useNavigate } from "react-router-dom";
import FooterText from "../../FooterText/FooterText";
const SetUp = () => {
  const navigate = useNavigate();
  const steps = ["Customer Info", "Language", "Timezone"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  return (
    <>
      <div className="topbar px-6 py-1.5 flex w-full place-items-center">
        <p
          onClick={() => {
            if (currentStep > 1) {
              setCurrentStep((prev) => prev - 1);
            } else if (currentStep === 1) {
              navigate("/");
            }
          }}
          className="text-theme-color cursor-pointer justify-self-start inline-block font-bold text-mediumSubheading"
        >
          Back
        </p>
        <p className="text-center w-full font-semibold text-dark text-[clamp(1rem,_3vw,_1.25rem)] justify-self-start">
          {" "}
          {currentStep === 1
            ? "Review Profile"
            : currentStep === 2
              ? "Language"
              : "Time Zone"}
        </p>
      </div>
      <div className="flex justify-between w-[47.5rem] mx-auto my-6">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? (
                <FaCheck className="text-heading font-semibold" />
              ) : (
                i + 1
              )}
            </div>
            <p className="text-dark font-medium text-mediumSubheading">
              {step}
            </p>
          </div>
        ))}
      </div>

      <button
        className="bg-theme-color absolute tab:bottom-12 w-[40vw] tracking-widest font-semibold px-6 left-1/2 -translate-x-1/2 rounded-lg text-white py-4"
        onClick={() => {
          if (currentStep === steps.length) {
            setComplete(true);
            navigate("/home"); // You should have access to navigate from React Router here.
          } else {
            setCurrentStep((prev) => prev + 1);
          }
        }}
      >
        {currentStep === steps.length ? "Finish" : "Next"}
      </button>

      {currentStep === 1 ? (
        <ReviewProfile />
      ) : currentStep === 2 ? (
        <SelectLanguage />
      ) : (
        <TimeZone />
      )}

      <div className="absolute w-full text-smallSubheading text-light bottom-4 text-center">
       <FooterText/>
      </div>
    </>
  );
};

export default SetUp;
