import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import InputField from "../ui/InputField";
import OnboardingHeader from "../OnBoarding/OnboardingHeader";
import Button from "../ui/Button";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });
  const [passwordError, setPasswordError] = useState("");
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [terms, setTerms] = useState(false)
  const validate = ({ newPassword, confirmPassword }) => {
    const strongPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        newPassword,
      );

    if (!strongPassword) {
      setPasswordError("Weak password");
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError("password not matching");
      return;
    }

    setPasswordError("");
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    const tempForm = { ...form, [name]: value };
    validate(tempForm);
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleViewPassToggle = (field) => {
    console.log(field, "field");
    setShowPassword((prev) => ({ ...prev, [field]: !showPassword.field }));
  };
  const handleChangePassword = (e)=>{
    e.preventDefault()
    console.log("clicked")
  }
  const isDisabled =
  !form.oldPassword ||
  !form.newPassword ||
  !form.confirmPassword ||
  !!passwordError ||
  !terms;

  return (
    <>
      <OnboardingHeader
        heading="Change Password"
        subHeading="Change your password"
      />
      
      <form onSubmit={handleChangePassword} className="w-full">
        <div className="flex flex-col gap-2 pb-4">
          <InputField
            type="password"
            label="Old Password"
            name="oldPassword"
            id="new_password"
            value={form.oldPassword}
            onChange={handleChange}
            showPassword={showPassword.oldPassword}
            handleViewPassToggle={() => handleViewPassToggle("oldPassword")}
          />
        </div>
        <div className="flex flex-col gap-2 pb-4">
          <InputField
            type="password"
            label="Confirm Password"
            name="newPassword"
            id="new_password"
            value={form.newPassword}
            onChange={handleChange}
            showPassword={showPassword.newPassword}
            handleViewPassToggle={() => handleViewPassToggle("newPassword")}
          />
        </div>
        <div className="flex flex-col gap-2 pb-2">
          <InputField
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            id="confirm_password"
            value={form.confirmPassword}
            onChange={handleChange}
            showPassword={showPassword.confirmPassword}
            handleViewPassToggle={() => handleViewPassToggle("confirmPassword")}
          />
        </div>
        {
          <p
            className={`${passwordError ? "opacity-100 h-6" : "opacity-0 h-0"} text-sm text-red-500 transition-all ease-in-out`}
          >
            {passwordError}
          </p>
        }
        <p className="text-xs pb-2 text-primary font-medium mb-2 ">
        Password should contain at least 8 characters, one uppercase letter, one
        lowercase letter, one number, and one special character
      </p>

        <div className="accept_terms mb-2 flex items-center gap-2">
          <input
            type="checkbox"
            className=""
            value={terms}
            name="terms"
            id=""
            onChange={()=>setTerms((prev)=>!prev)}
            style={{ appearance: "revert" }}
          />
          <span className="text-xs text-muted">
            I agree to the privacy policy & Terms of Service{" "}
          </span>
        </div>
        <Button variant="primary" label="Change Password" disabled={isDisabled} classNames="w-full"/>
      </form>
    </>
  );
};

export default ChangePassword;
