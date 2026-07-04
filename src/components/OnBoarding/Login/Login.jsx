import React, { useState } from "react";
import RightColumn from "../RightColumn";
import LeftColumn from "../LeftColumn";
import {
  AiOutlineWarning,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import fingerprint from "../../../Assets/fingerprint.svg";
import faceid from "../../../Assets/faceid.svg";
import FaceModal from "../FaceModal";
import FooterText from "../../FooterText/FooterText";
import OnboardingHeader from "../OnboardingHeader";
import InputField from "../../ui/InputField";
import Button from "../../ui/Button";

const Login = () => {
  const INITIAL = { user: "", password: "" };
  const [inputError, setInputError] = useState(false);
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [faceidModal, setFaceidModal] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const e = {};
    !form.user.trim() && (e.user = "Username is required");
    !form.password.trim() && (e.password = "Please enter your password");
    return e;
  };
  console.log(form, "shorma");
  const handleChange = (e) => {
    console.log(e, "check e")
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(() => ({ ...errors, [e.target.name]: "" }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      console.error("faksdfhkasdhfj");
      return;
    }
    console.log("Form submitted successfully:", form);
    navigate("/set-up");
  };
  const handleViewPassToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <OnboardingHeader heading="Login with your credentials" />
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col gap-2 pb-4">
          <InputField
            label="Login ID"
            name="user"
            type="text"
            placeholder="Enter your user name"
            onChange={handleChange}
            error={errors.user}
            value={form.user}
          />
        </div>

        <div className="flex flex-col gap-2 pb-4">
          <div className="relative">
            <InputField
              type="password"
              name="password"
              label="Password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
              error={errors.password}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              handleViewPassToggle={handleViewPassToggle}
            />
          </div>
          {/* {inputError && (
              <div className="flex gap-2 items-center text-smallCaption text-error">
                <AiOutlineWarning className="text-smallCaption" />
                <span className="">Please enter a valid code</span>
              </div>
            )} */}
          <div className="flex w-full justify-between font-medium text-xs items-end">
            <span
              onClick={() => navigate("/")}
              className="text-muted underline cursor-pointer"
            >
              Login with different user
            </span>
            <span
              onClick={() => navigate("/forgot-password")}
              className="text-muted cursor-pointer"
            >
              Forgot Password?
            </span>
          </div>
        </div>
        <Button
          label="Login"
          variant="primary"
          classNames="font-semibold py-3 tracking-widest mt-3 w-full text-white rounded-md"
        />
      </form>
      <p className="text-muted text-xs pt-3 font-normal">
        Do you have another account?{" "}
        <span
          className="text-primary cursor-pointer"
          onClick={() => navigate("/switch-company")}
        >
          Switch Company
        </span>
      </p>

      {/* <div className="w-full mt-12 h-[1px] bg-lighter text-lighter text-base font-normal relative">
        <h1 className="absolute px-2 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-1">
          OR
        </h1>
      </div>

      <div className="biometric__buttons flex gap-3 mt-12 flex-col w-full">
        <buttons
          onClick={() => navigate("/fingerprint-login")}
          className="border border-theme-color cursor-pointer w-full gap-2 justify-center text-pargraph items-center rounded-md flex py-3 text-primary px-4"
        >
          Login with Fingerprint ID <img src={fingerprint} alt="" />{" "}
        </buttons>
        <buttons className="border border-theme-color cursor-pointer w-full gap-2 justify-center text-pargraph items-center rounded-md flex py-3 text-primary px-4">
          Login with Face ID <img src={faceid} alt="" />{" "}
        </buttons>
      </div> */}
    </div>
  );
};

export default Login;
