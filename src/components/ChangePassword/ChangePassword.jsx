import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { MdArrowBackIosNew } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showCnfPassword, setShowCnfPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("")
    const [cnfPassword, setCnfPassword] = useState("");

    const handleViewPassToggle = () => {
        setShowPassword(!showPassword);
    };

    const handleViewNewPasswordToggle = () => {
        setShowNewPassword(!showNewPassword);
    };

    const handleViewCnfPasswordToggle = () => {
        setShowCnfPassword(!showCnfPassword);
    };

    return (
        <>

<div className="flex fixed bg-white top-0 py-2 px-4 w-full justify-between items-center border-b">
                <div className='flex items-center font-semibold text-theme-color cursor-pointer' onClick={() => navigate("/dashboard")}>
                    <MdArrowBackIosNew className=' text-largeX font-normal' />
                    <span className=' text-lg font-medium'>Back</span>
                </div>

            </div>
            <p className='text-dark leading-[1.2] fixed top-2 left-1/2 -translate-x-1/2 text-mediumSubheading font-semibold'>Change Password</p>
            <form className="w-full max-w-[650px] max-h-[calc(100dvh-40px)] mt-16 overflow-hidden flex flex-col gap-4 mx-auto">
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
                            onChange={(e) => setPassword(e.target.value)}
                            className="border-border-input w-full placeholder:text-placeholder font-normal border-1 text-paragraph  focus-within:border-dark focus-within:outline-none py-3 px-4 rounded-md"
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
                        htmlFor="newPassword"
                        className="font-semibold flex items-center text-dark text-normal"
                    >
                        New Password
                        <span className="text-error pl-1">*</span>
                    </label>
                    <div className="relative">
                        <input
                            type={showNewPassword ? 'text' : 'password'}
                            name="newPassword"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="border-border-input w-full placeholder:text-placeholder font-normal border-1 text-paragraph  focus-within:border-dark focus-within:outline-none py-3 px-4 rounded-md"
                            placeholder="Enter new password"
                        />
                        {showNewPassword ? (
                            <AiOutlineEyeInvisible onClick={handleViewNewPasswordToggle} className="absolute cursor-pointer text-light right-4 top-1/2 -translate-y-1/2" />
                        ) : (
                            <AiOutlineEye onClick={handleViewNewPasswordToggle} className="absolute cursor-pointer text-light right-4 top-1/2 -translate-y-1/2" />
                        )}
                    </div>
                </div>

                <div className="flex flex-col gap-2 pb-4">
                    <label
                        htmlFor="cnfPassword"
                        className="font-semibold flex items-center text-dark text-normal"
                    >
                        Confirm Password
                        <span className="text-error pl-1">*</span>
                    </label>
                    <div className="relative">
                        <input
                            type={showCnfPassword ? 'text' : 'password'}
                            name="cnfPassword"
                            id="cnfPassword"
                            value={cnfPassword}
                            onChange={(e) => setCnfPassword(e.target.value)}
                            className="border-border-input w-full placeholder:text-placeholder font-normal border-1 text-paragraph  focus-within:border-dark focus-within:outline-none py-3 px-4 rounded-md"
                            placeholder="Confirm password"
                        />
                        {showCnfPassword ? (
                            <AiOutlineEyeInvisible onClick={handleViewCnfPasswordToggle} className="absolute cursor-pointer text-light right-4 top-1/2 -translate-y-1/2" />
                        ) : (
                            <AiOutlineEye onClick={handleViewCnfPasswordToggle} className="absolute cursor-pointer text-light right-4 top-1/2 -translate-y-1/2" />
                        )}
                    </div>
                </div>
                <div className="accept_terms mt-12 flex items-center gap-2">
                    <input type="checkbox" className='' name="" id="" style={{appearance: 'revert'}} />
                    <span>I agree to the privacy policy & Terms of Service </span>
                </div>
                <button onClick={() => navigate("/")} disabled={false} className="bg-theme-color font-medium tracking-widest py-4 w-full text-white rounded-md">
                    Change Password
                </button>
            </form>
        </>
    );
}

export default ChangePassword;
