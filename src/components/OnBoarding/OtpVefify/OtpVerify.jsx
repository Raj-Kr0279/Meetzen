import React, { useState } from "react";
import LeftColumn from "../LeftColumn";
import RightColumn from "../RightColumn";
import { useNavigate } from "react-router-dom";
import { AiOutlineWarning } from "react-icons/ai";
import OtpInput from "react-otp-input";
import OnboardingHeader from "../OnboardingHeader";
import Button from "../../ui/Button";

const OtpVerify = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/reset-password")
  };
  return (
    <>
      <OnboardingHeader
        heading="Verify OTP"
        subHeading="Enter the 6-digit OTP that you have received on your registered email
        jo******@gmail.com."
      />
      <form action="" onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col pb-4 w-full gap-4 justify-center otp__wrapper">
          <label
            htmlFor="otp"
            className="font-semibold justify-self-start flex items-center text-dark text-normal"
          >
            Enter OTP
            <span className="text-error pl-1">*</span>
          </label>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            inputType="number"
            separator={
              <span style={{ width: "8px", display: "inline-block" }}></span>
            }
            renderInput={(props) => <input {...props} />}
            inputStyle={{
              border: "1px solid #2E36461A",
              fontSize: "1.5rem",
              borderRadius: "8px",
              width: "100%",
              aspectRatio: "1/1",
              color: "#49556D",
              marginLeft: "16px",
              fontWeight: "400",
              caretColor: "blue",
            }}
            focusStyle={{
              outline: "1px solid #49556D",
            }}
          />
        </div>
        <Button
          label="Send OTP"
          variant="primary"
          classNames="mt-16 py-3 w-full text-white rounded-md"
        />
      </form>
    </>
  );
};

export default OtpVerify;
