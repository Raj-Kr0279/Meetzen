import React, { useState } from 'react'
import RightColumn from '../RightColumn';
import LeftColumn from '../LeftColumn';
import { useNavigate } from 'react-router-dom';
import { AiOutlineWarning } from 'react-icons/ai';
import OtpInput from 'react-otp-input';

const ForgotPassword = () => {
  const [inputError, setInputError] = useState(false);
  const [otp, setOtp] = useState('');

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
   <>
        <h1 className='text-heading leading-none text-center text-dark font-semibold'>Forgot Password</h1>
        <p className="mt-4 mb-12 text-center text-light leading-snug text-paragraph font-medium break-words">Enter your email address for the verification process. We will send a 6 digits code to your email.</p>
        <form action="" onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col gap-2 pb-12">
            <label
              htmlFor="email"
              className="font-semibold flex items-center text-dark text-normal"
            >
              Email Address
              <span className="text-error pl-1">*</span>
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className={`${inputError ? 'border-error' : "border-border-input"} border-1 text-paragraph  focus-within:border-dark focus-within:outline-none py-3 px-4 rounded-md`}
              placeholder="Enter email address"
            />
            {/* {inputError &&  <div className='flex gap-2 items-center text-smallCaption text-error'><AiOutlineWarning className='text-smallCaption'/><span className=''>Please enter a valid code</span></div>} */}
          </div>
         

          <button onClick={() => navigate("/otp-verify")} disabled={false} className="bg-meetzen-primary py-3 w-full text-white rounded-md">
            Send OTP
          </button>
        </form>
        </>
  )
}

export default ForgotPassword
