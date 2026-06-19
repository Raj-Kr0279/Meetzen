import React, { useState } from 'react'
import LeftColumn from '../LeftColumn'
import RightColumn from '../RightColumn'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';


const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [cnfPassword, setCnfPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const [showCnfPassword, setShowCnfPassword] = useState(false);
    const [inputError, setInputError] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(0); // Password strength indicator
    const navigate = useNavigate()
    const handleViewPassToggle = () => {
        setShowPassword(!showPassword);
    };
    const handleViewCnfPasswordToggle = () => {
        setShowCnfPassword(!showCnfPassword)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    };
    const calculatePasswordStrength = (password) => {
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumbers = /[0-9]/.test(password);
        const hasRequiredLength = password.length >= 8;

        if (hasUppercase && hasLowercase && hasRequiredLength && hasNumbers ) {
            return 3; // Strong
        } else if ((hasUppercase || hasLowercase) && hasRequiredLength) {
            return 2; // Moderate
        } else {
            return 1; // Weak
        }
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        const strength = calculatePasswordStrength(newPassword);
        setPasswordStrength(strength);
    };

    return (
        <div className="grid-cols-1 tab:grid-cols-2 grid w-full h-screen">
            <LeftColumn />
            <RightColumn>

                <h1 className='text-heading leading-none text-center text-dark font-semibold'>Reset Password</h1>
                <p className="mt-4 mb-12 text-center text-light leading-snug text-paragraph font-medium break-words">Set a new password for your account</p>
                <form action="#" onSubmit={handleSubmit} className="w-full">
                    <div className="flex flex-col gap-2 pb-4">
                        <label
                            htmlFor="password"
                            className="font-semibold flex items-center text-dark text-normal"
                        >
                            Password
                            <span className="text-error pl-1">*</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                className={`${inputError ? 'border-error' : "border-border-input"} w-full placeholder:text-placeholder font-normal border-1 text-paragraph  focus-within:border-dark focus-within:outline-none py-3 px-4 rounded-md`}
                                placeholder="Enter password"
                            />
                            {showPassword ? (
                                <AiOutlineEyeInvisible onClick={handleViewPassToggle} className="absolute cursor-pointer text-light right-4 top-1/2 -translate-y-1/2" />
                            ) : (
                                <AiOutlineEye onClick={handleViewPassToggle} className="absolute cursor-pointer text-light right-4 top-1/2 -translate-y-1/2" />
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 pb-4">
                        <label
                            htmlFor="password"
                            className="font-semibold flex items-center text-dark text-normal"
                        >
                            Password
                            <span className="text-error pl-1">*</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showCnfPassword ? 'text' : 'password'}
                                name="password"
                                id="password"
                                value={cnfPassword}
                                onChange={(e) => setCnfPassword(e.target.value)}
                                className={`${inputError ? 'border-error' : "border-border-input"} w-full placeholder:text-placeholder font-normal border-1 text-paragraph  focus-within:border-dark focus-within:outline-none py-3 px-4 rounded-md`}
                                placeholder="Enter password"
                            />
                            {showCnfPassword ? (
                                <AiOutlineEyeInvisible onClick={handleViewCnfPasswordToggle} className="absolute cursor-pointer text-light right-4 top-1/2 -translate-y-1/2" />
                            ) : (
                                <AiOutlineEye onClick={handleViewCnfPasswordToggle} className="absolute cursor-pointer text-light right-4 top-1/2 -translate-y-1/2" />
                            )}
                        </div>
                        {passwordStrength === 1 && (
                            <>
                                <div className='grid grid-cols-5 gap-4'>
                                    <div className="bg-error h-1.5 rounded-md"></div>
                                    <div className="bg-error h-1.5 rounded-md"></div>
                                    <div className="bg-error h-1.5 rounded-md"></div>
                                    <div className="bg-error h-1.5 rounded-md"></div>
                                    <div className="bg-error h-1.5 rounded-md"></div></div>
                                <p className="text-smallCaption">Level: Weak password</p>
                            </>
                        )}
                        {passwordStrength === 2 && (
                            <>
                                <div className='grid grid-cols-5 gap-4'>
                                    <div className="bg-yellow-500 h-1.5 rounded-md"></div>
                                    <div className="bg-yellow-500 h-1.5 rounded-md"></div>
                                    <div className="bg-yellow-500 h-1.5 rounded-md"></div>
                                    <div className="bg-yellow-500 h-1.5 rounded-md"></div>
                                    <div className="bg-yellow-500 h-1.5 rounded-md"></div></div>
                                <p className="text-smallCaption">Level: Moderate password</p>
                            </>
                        )}
                        {passwordStrength === 3 && (
                            <>
                                <div className='grid grid-cols-5 gap-4'>
                                    <div className="bg-success h-1.5 rounded-md"></div>
                                    <div className="bg-success h-1.5 rounded-md"></div>
                                    <div className="bg-success h-1.5 rounded-md"></div>
                                    <div className="bg-success h-1.5 rounded-md"></div>
                                    <div className="bg-success h-1.5 rounded-md"></div></div>
                                <p className="text-smallCaption">Level: Very Strong password</p>
                            </>
                        )}
                    </div>
                    <button onClick={() => navigate("/")} disabled={false} className="bg-theme-color font-semibold tracking-widest py-3 mt-12 w-full text-white rounded-md">
                        Change Password
                    </button>
                </form>
            </RightColumn>
        </div>
    )
}

export default ResetPassword
