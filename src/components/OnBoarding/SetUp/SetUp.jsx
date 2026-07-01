import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import divider from "../../../assets/divider.png";
import dividerComplete from "../../../assets/dividerComplete.png";
import TimeZone from "./TimeZone";
import ReviewProfile from "./ReviewProfile";
import SelectLanguage from "./SelectLanguage";
import { Link, useNavigate } from "react-router-dom";
import FooterText from "../../FooterText/FooterText";
import Button from "../../ui/Button";

const stepperStyles = `
  .step-item {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .step-item:not(:first-child)::before {
    content: "";
    position: absolute;
    width: 21em;
    transform: translateX(0) translateY(-100%);
    height: 0.5rem;
    right: 50%;
    top: 36.33%;
    background: url(${divider}) no-repeat center center / cover;
  }

  .step {
    width: 4rem;
    height: 4rem;
    border-width: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    position: relative;
    background-color: #fff;
    border-radius: 9999px;
    font-weight: 600;
  }

  .complete:not(:first-child)::before,
  .active:not(:first-child)::before {
    content: "";
    position: absolute;
    background-position: center;
    background-repeat: no-repeat;
    width: 21em;
    transform: translateX(0) translateY(-100%);
    height: 0.5rem;
    right: 50%;
    top: 36.33%;
    background-image: url(${dividerComplete});
    background-size: cover;
  }
`;

const SetUp = () => {
  const navigate = useNavigate();
  const steps = ["Customer Info", "Language", "Timezone"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const nextButtonClick = () => {
    if (currentStep === steps.length) {
      setComplete(true);
      navigate("/home");
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };
  return (
    <>
      <style>{stepperStyles}</style>
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
      <div className="flex flex-col h-[calc(90vh)]">
      <div className="flex justify-between w-[47.5rem] mx-auto my-6">
        {steps?.map((step, i) => {
          const isActive = currentStep === i + 1;
          const isComplete = i + 1 < currentStep || complete;

          return (
            <div
              key={i}
              className={`step-item ${isActive ? "active" : ""} ${
                isComplete ? "complete" : ""
              }`}
            >
              <div
                className={`step ${isActive ? "bg-meetzen-border border-2" : ""} ${
                  isComplete
                    ? "bg-meetzen-primary text-white border-transparent"
                    : ""
                }`}
              >
                {isComplete ? (
                  <FaCheck className="text-heading font-semibold" />
                ) : (
                  i + 1
                )}
              </div>
              <p
                className={`text-dark font-medium text-mediumSubheading ${
                  isComplete ? "text-white" : ""
                }`}
              >
                {step}
              </p>
            </div>
          );
        })}
      </div>

      {/* <button
        className="bg-meetzen-primary absolute tab:bottom-12"
        onClick={}
      >
        {currentStep === steps.length ? "Finish" : "Next"}
      </button> */}
      <div className="flex flex-col justify-center items-center">
        {currentStep === 1 ? (
          <ReviewProfile />
        ) : currentStep === 2 ? (
          <SelectLanguage />
        ) : (
          <TimeZone />
        )}
        <Button
          variant="primary"
          classNames="w-[40vw] tracking-widest font-semibold px-6 rounded-lg text-white py-4"
          label={currentStep === steps.length ? "Finish" : "Next"}
          onClick={nextButtonClick}
        />
      </div>
      </div>
      <div className="absolute w-full text-smallSubheading text-light bottom-4 text-center">
        <FooterText />
      </div>
    </>
  );
};

export default SetUp;
