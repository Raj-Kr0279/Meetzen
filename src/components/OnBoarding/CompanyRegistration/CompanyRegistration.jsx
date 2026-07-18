import React, { useEffect, useState } from "react";
import LeftColumn from "../LeftColumn";
import RightColumn from "../RightColumn";
import {
  AiFillWarning,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";
import { Tooltip } from "react-tooltip";
import { CiWarning } from "react-icons/ci";
import swap from "../../../assets/swapIcon.svg";
import { useNavigate } from "react-router-dom";
import InputField from "../../ui/InputField";
import OnboardingHeader from "../OnboardingHeader";
import Button from "../../ui/Button";
import { useGetCompanyByIdMutation } from "../../../features/company/companyApi";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCompany } from "../../../features/company/companySlice";
const CompanyRegistration = () => {
  const [inputError, setInputError] = useState("");
  const [companyCode, setCompanyCode] = useState("");
  const [getCompanyById, { data: company, error, isLoading, isSuccess }] =
    useGetCompanyByIdMutation();
  const { selectedCompany } = useSelector((state) => state.company);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit =  (e) => {
    e.preventDefault()
    getCompanyById(companyCode)
      .unwrap()
      .then((result) => {dispatch(setSelectedCompany(result)); setInputError(""); setTimeout(() => {
        navigate("/login")
      }, 2000);})
      .catch((error) => setInputError("Something went wrong, please try later"));
      setInputError("")
  };
  
  const handleChange = (e) => {
    const value = e.target.value;
    setCompanyCode(value);
    if (!value) {
      setInputError("Enter company code");
    } else if (value.length < 3) {
      setInputError("Company code too short");
    } else setInputError("");
  };

  return (
    <>
      <OnboardingHeader
        heading="Company Code"
        subHeading="Enter your company code received on your e-mail"
      />
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col gap-2 pb-4">
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
         {selectedCompany && <div
              className={`w-full flex cursor-pointer bg-accent/80 text-surface rounded-full px-6 py-3 mb-4 gap-4 items-center bg-hover-bg transition-colors`}
            >
              <div className={`w-8 h-8 flex justify-center items-center rounded-full `}>
                <span>{selectedCompany?.name?.[0]}</span>
              </div>
              <div className="flex gap-1 flex-col items-start">
                <p className={`font-medium leading-none text-sm`}>
                  {selectedCompany?.name}
                </p>
                <span className={`font-normal text-xs`}>
                  {selectedCompany?.email}
                </span>
              </div>
            </div>}

        <Button
          label={`${isSuccess ? "Redirecting..." : "Continue"}`}
          variant="primary"
          onClick={handleSubmit}
          disabled={(inputError !== "") || isLoading || isSuccess}
          classNames="w-full"
          isLoading={isLoading}
        />

        <div className="flex justify-center border-b border-theme-color w-max mx-auto pt-6 items-center">
          <img src={swap} alt="" />
          <span
            className="inline-block font-medium text-center leading-tight text-primary text-xs cursor-pointer"
            onClick={() => navigate("/switch-company")}
          >
            Switch Company
          </span>
        </div>
      </form>
      <div>
        
      </div>

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
