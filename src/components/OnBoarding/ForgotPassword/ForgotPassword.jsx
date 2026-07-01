import React, { useState } from "react";
import RightColumn from "../RightColumn";
import LeftColumn from "../LeftColumn";
import { useNavigate } from "react-router-dom";
import { AiOutlineWarning } from "react-icons/ai";
import OtpInput from "react-otp-input";
import OnboardingHeader from "../OnboardingHeader";
import InputField from "../../ui/InputField";
import Button from "../../ui/Button";

const ForgotPassword = () => {
  const [inputError, setInputError] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();
  const validate = (emailValue) => {
    if (!emailValue.trim()) {
      return "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      return "Invalid email address";
    }
    return "";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validate(email);

    if (validationError !== "") {
      setError(validationError);
      return;
    }

    console.log("email submitted", email);
    navigate("/otp-verify")
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
    const validationError = validate(e.target.value);
    if (validationError !== "") {
      setError(validationError);
    } else setError("");
  };
  return (
    <>
      <OnboardingHeader
        heading="Forgot Password?"
        subHeading="Enter your email address for the verification process. We will send a 6 digits code to your email."
      />
      <form action="" onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col gap-2 pb-12">
          <InputField
            name="email"
            type="email"
            onChange={handleChange}
            label="Email Address"
            placeholder="email@example.com"
            error={error}
          />
          {/* {inputError &&  <div className='flex gap-2 items-center text-smallCaption text-error'><AiOutlineWarning className='text-smallCaption'/><span className=''>Please enter a valid code</span></div>} */}
        </div>
        <Button
          variant="primary"
          label="Send OTP"
          classNames="py-3 w-full text-white rounded-md"
        />
      </form>
    </>
  );
};

export default ForgotPassword;
