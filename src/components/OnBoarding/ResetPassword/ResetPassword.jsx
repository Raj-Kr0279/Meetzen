import React, { useState } from "react";
import LeftColumn from "../LeftColumn";
import RightColumn from "../RightColumn";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import OnboardingHeader from "../OnboardingHeader";
import InputField from "../../ui/InputField";

const ResetPassword = () => {
  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState({
    pass: false,
    confirmPassword: false,
  });
  const [error, setError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0); // Password strength indicator
  const navigate = useNavigate();
  const handleViewPassToggle = (name) => {
    setShowPassword((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };
  const calculatePasswordStrength = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasRequiredLength = password.length >= 8;

    if (hasUppercase && hasLowercase && hasRequiredLength && hasNumbers) {
      return 3; // Strong
    } else if ((hasUppercase || hasLowercase) && hasRequiredLength) {
      return 2; // Moderate
    } else {
      return 1; // Weak
    }
  };

  const handlePasswordChange = (e) => {
    let tempForm 
   const {value, name} = e.target;
    setForm((prev) => (
     tempForm = {...prev, [name]: value }
    ));
    if (tempForm.password === tempForm.confirmPassword)
      setError("");
    else  setError("Passwords do not match")
   const strength = calculatePasswordStrength(tempForm.value);
    setPasswordStrength(strength);
  };

  return (
    <>
      <OnboardingHeader
        heading="Reset Password"
        subHeading="Set a new password for your account"
      />
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col gap-2 pb-4">
          <InputField
            type="password"
            label="Enter new password"
            handleViewPassToggle={() => handleViewPassToggle("pass")}
            className=""
            showPassword={showPassword.pass}
            name="password"
            value={form.password}
            onChange={handlePasswordChange}
            placeholder="enter your password"
            passStrength={() => calculatePasswordStrength(form.pass)}
          />
        </div>

        <div className="flex flex-col gap-2 pb-4">
          <InputField
            type="password"
            label="Confirm password"
            handleViewPassToggle={() => handleViewPassToggle("confirmPassword")}
            className=""
            showPassword={showPassword.confirmPassword}
            name="confirmPassword"
            error={error}
            value={form.confirmPassword}
            onChange={handlePasswordChange}
            placeholder="Confirm password"
            passStrength={() => calculatePasswordStrength(form.confirmPassword)}
          />
          {passwordStrength === 1 && (
            <>
              <div className="grid grid-cols-5 gap-4">
                <div className="bg-error h-1.5 rounded-md"></div>
                <div className="bg-error h-1.5 rounded-md"></div>
                <div className="bg-error h-1.5 rounded-md"></div>
                <div className="bg-error h-1.5 rounded-md"></div>
                <div className="bg-error h-1.5 rounded-md"></div>
              </div>
              <p className="text-smallCaption">Level: Weak password</p>
            </>
          )}
          {passwordStrength === 2 && (
            <>
              <div className="grid grid-cols-5 gap-4">
                <div className="bg-yellow-500 h-1.5 rounded-md"></div>
                <div className="bg-yellow-500 h-1.5 rounded-md"></div>
                <div className="bg-yellow-500 h-1.5 rounded-md"></div>
                <div className="bg-yellow-500 h-1.5 rounded-md"></div>
                <div className="bg-yellow-500 h-1.5 rounded-md"></div>
              </div>
              <p className="text-smallCaption">Level: Moderate password</p>
            </>
          )}
          {passwordStrength === 3 && (
            <>
              <div className="grid grid-cols-5 gap-4">
                <div className="bg-success h-1.5 rounded-md"></div>
                <div className="bg-success h-1.5 rounded-md"></div>
                <div className="bg-success h-1.5 rounded-md"></div>
                <div className="bg-success h-1.5 rounded-md"></div>
                <div className="bg-success h-1.5 rounded-md"></div>
              </div>
              <p className="text-smallCaption">Level: Very Strong password</p>
            </>
          )}
        </div>
        <button
          onClick={() => navigate("/")}
          disabled={false}
          className="bg-primary font-semibold tracking-widest py-3 mt-12 w-full text-white rounded-md"
        >
          Change Password
        </button>
      </form>
    </>
  );
};

export default ResetPassword;
