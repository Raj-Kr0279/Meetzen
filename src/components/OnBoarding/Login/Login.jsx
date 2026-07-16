import React, { useState } from "react";
import RightColumn from "../RightColumn";
import LeftColumn from "../LeftColumn";
import {
  AiOutlineWarning,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import fingerprint from "../../../assets/fingerprint.svg";
import faceid from "../../../assets/faceid.svg";
import FaceModal from "../FaceModal";
import FooterText from "../../FooterText/FooterText";
import OnboardingHeader from "../OnboardingHeader";
import InputField from "../../ui/InputField";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../../features/user/userApi";
import { setUserDetails } from "../../../features/user/userSlice";

const Login = () => {
  const INITIAL = { email: "", password: "" };
  const [inputError, setInputError] = useState(false);
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [faceidModal, setFaceidModal] = useState(false);
  const navigate = useNavigate();
 const {selectedCompany} = useSelector(state => state.company);
 const [login, {error, data, isSuccess, isLoading}] = useLoginMutation();
const dispatch = useDispatch()
  const validate = () => {
    const e = {};
    if (!form?.email?.trim()) {
      e.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form?.email)) {
      e.email = "Invalid email address";
    }
    !form.password.trim() && (e.password = "Please enter your password");
    return e;
  };
  const handleChange = (e) => {
    console.log(e, "check e")
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(() => ({ ...errors, [e.target.name]: "" }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      console.error("faksdfhkasdhfj");
      return;
    }
    try {
    const result = await login({...form, companyId: selectedCompany?.companyId}).unwrap()
    console.log(result, "resulted")

    // Save token + user for RTK Query to attach Authorization header on future requests
    // Adjust `result.token` below if your backend uses a different field name.
    localStorage.setItem("token", result?.token);
    dispatch(setUserDetails({ user: result.user, token: result.token ?? result.accessToken ?? result.data?.token }));

    navigate('/home/dashboard');
    } catch (error) {
      console.log(error)
    }
   

    // navigate('/home/dashboard');
  };
  console.log(form, "formwa")
  const handleViewPassToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      {isSuccess && <h1 className="text-7xl">Success</h1>}
      <OnboardingHeader heading={"Login"} subHeading= {"Login with your credentials"}/>
      <span className="text-xs text-accent font-medium">{selectedCompany?.name}</span>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col gap-2 pb-4">
          <InputField
            label="Login with your E-mail"
            name="email"
            type="text"
            placeholder="Enter your email ID"
            onChange={handleChange}
            error={errors.email}
            value={form.email}
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
        <p className={`${error ? "opacity-100 h-3" : "opacity-0 h-0"} text-sm text-red-500 transition-all ease-in-out`}>{error?.data?.message}</p>
        <Button
          label="Login"
          variant="primary"
          classNames="font-semibold py-3 tracking-widest mt-3 w-full text-white rounded-md"
          disabled={isLoading || isSuccess}
          isLoading={isLoading}
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
