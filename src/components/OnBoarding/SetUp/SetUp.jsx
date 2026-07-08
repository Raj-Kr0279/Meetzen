import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import divider from "../../../Assets/divider.png";
import dividerComplete from "../../../Assets/dividerComplete.png";
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



const SetUp = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const steps = ["review-profile", "language", "timezone"];

  return (
    <>
      <style>{stepperStyles}</style>
      {/* This component is no longer used by app routing; nested routes are handled by SetUpLayout */}
      <div className="hidden" />
      <div className="hidden" />
    </>
  );
};

export default SetUp;
