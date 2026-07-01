import React, { useState } from "react";
import LeftColumn from "../LeftColumn";
import RightColumn from "../RightColumn";
import {
  AiFillWarning,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";
import { Tooltip } from "react-tooltip";
import { CiWarning } from "react-icons/ci";
import swap from "../../../Assets/swapIcon.svg";
import { useNavigate } from "react-router-dom";
import InputField from "../../ui/InputField";
import OnboardingHeader from "../OnboardingHeader";
const CompanyRegistration = () => {
  const [inputError, setInputError] = useState(true);
  const [companyCode, setCompanyCode] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(companyCode, "coddddd");
  };
  const handleChange = (e) => {
    const value = e.target.value
    setCompanyCode(value);
    if (!value) {
      setInputError("Enter company code");
    } else if (value.length < 3) {
      setInputError("Company code too short");
    } else setInputError("");
  };
  return (
    <>
    <OnboardingHeader heading="Company Code" subHeading="Enter your company code received on your e-mail"/>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col gap-2 pb-8">
          {/* <label
            htmlFor="company_code"
            className="font-semibold flex items-center text-dark text-normal"
          >
            Enter Company Registration Code{" "}
            <span className="text-error pl-1">*</span>
            <a className="my-anchor-element inline-block ml-2 cursor-pointer">
              {" "}
              <AiOutlineInfoCircle />
            </a>
          </label>
          <input
            type="text"
            name="company_code"
            id="company_code"
            className={`${
              !inputError ? "border-error" : "border"
            } border-1 text-base  focus-within:border-dark focus-within:outline-none py-3 px-4 rounded-md`}
            placeholder="Email code"
          />
          {inputError && (
            <div className="flex gap-2 items-center text-smallCaption text-error">
              <AiOutlineWarning className="text-smallCaption" />
              <span className="">Please enter a valid code</span>
            </div>
          )} */}

          <InputField
            label="Enter Company Registration Code"
            type="text"
            error={inputError}
            className=""
            name="company_code"
            onChange={handleChange}
            placeholder="your company code"
          />
        </div>
        <button
          onClick={() => navigate("/login")}
          disabled={false}
          className="bg-meetzen-primary py-3 w-full text-white rounded-md"
        >
          Continue
        </button>

        <div className="flex justify-center border-b border-theme-color w-max mx-auto pt-6 items-center">
          <img src={swap} alt="" />
          <span
            className="inline-block font-medium text-center leading-tight text-theme-color text-smallSubheading cursor-pointer"
            onClick={() => navigate("/switch-company")}
          >
            Switch Company
          </span>
        </div>
      </form>

      <Tooltip
        style={{
          backgroundColor: "white",
          color: "#919BA7",
          width: "250px",
          boxShadow: "0px 6px 7px 0px #e5e5e5",
        }}
        anchorSelect=".my-anchor-element"
        className="tooltip bg-white text-black text-smallCaption"
        place="bottom-start"
      >
        To add a new company please enter the 8 digit company registration code
        shared by your company secretary and click on go
      </Tooltip>
    </>
  );
};

export default CompanyRegistration;
