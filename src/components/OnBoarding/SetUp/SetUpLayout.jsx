import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import divider from "../../../Assets/divider.png";
import dividerComplete from "../../../Assets/dividerComplete.png";
import Button from "../../ui/Button";
import FooterText from "../../FooterText/FooterText";

const stepperStyles = `
  .stepper {
    position: relative;
    display: flex;
    justify-content: space-between;
  }

  .step-item {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 8rem;
  }

  /* divider between steps */
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

const steps = [
  { path: "review-profile", label: "Review Profile" },
  { path: "language", label: "Language" },
  { path: "timezone", label: "Time Zone" },
];

const SetUpLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [complete, setComplete] = useState(false);

  const currentIndex = Math.max(
    0,
    steps.findIndex((s) => location.pathname.endsWith(`/set-up/${s.path}`))
  );
  const currentStep = currentIndex + 1;

  const nextButtonClick = () => {
    if (currentIndex === steps.length - 1) {
      setComplete(true);
      navigate("/home");
      return;
    }
    navigate(`/set-up/${steps[currentIndex + 1].path}`);
  };

  const goBack = () => {
    if (currentIndex > 0) {
      navigate(`/set-up/${steps[currentIndex - 1].path}`);
      return;
    }
    navigate("/login");
  };

  return (
    <>
      <style>{stepperStyles}</style>

      <div className="topbar px-6 py-1.5 flex w-full place-items-center">
        <p
          onClick={goBack}
          className="text-primary cursor-pointer justify-self-start inline-block font-semibold text-md"
        >
          Back
        </p>
        <p className="text-center text-foreground w-full font-medium text-foreground text-[clamp(1rem,_3vw,_1.25rem)] justify-self-start">
          {steps[currentIndex]?.label}
        </p>
      </div>

      <div className="flex flex-col h-[calc(90vh)]">
        <div className="flex justify-between w-full lg:w-[47.5rem] mx-auto my-6 stepper">
          {steps.map((step, i) => {
            const isActive = currentIndex === i;
            const isComplete = i < currentIndex || complete;

            return (
              <div key={step.path} className={`step-item ${isActive ? "active" : ""} ${isComplete ? "complete" : ""}`}>
                <div
                  className={`
                    step
                    border
                    flex items-center justify-center
                    w-16 h-16
                    rounded-full
                    font-semibold
                    z-10
                    ${isActive ? "bg-primary border-2 border-primary text-inverse" : "bg-white"}
                    ${isComplete ? "bg-primary text-foreground border-border" : ""}
                  `}
                >
                  {isComplete ? (
                    <FaCheck className="text-xl font-medium" />
                  ) : (
                    i + 1
                  )}
                </div>

                <p
                  className={`mt-2 font-medium text-lg ${
                    isComplete ? "text-white" : "text-foreground"
                  }`}
                >
                  {step.label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col md:mx-0 mx-4 h-full justify-between items-center">
          <Outlet />

          <Button
            variant="primary"
            classNames="md:w-[40vw] mx-4 w-full tracking-widest font-normal px-6 rounded-lg py-4"
            label={currentIndex === steps.length - 1 ? "Finish" : "Next"}
            onClick={nextButtonClick}
          />
        </div>
      </div>

      <div className="absolute w-full text-xs text-placeholder bottom-2 md:bottom-4 text-center">
        <FooterText />
      </div>
    </>
  );
};

export default SetUpLayout;
