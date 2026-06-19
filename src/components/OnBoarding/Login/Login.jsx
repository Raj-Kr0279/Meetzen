import React, { useState } from 'react';
import RightColumn from '../RightColumn';
import LeftColumn from '../LeftColumn';
import { AiOutlineWarning, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import fingerprint from '../../../Assets/fingerprint.svg'
import faceid from '../../../Assets/faceid.svg'
import FaceModal from '../FaceModal';

const NewPage = () => {
  const [inputError, setInputError] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [faceidModal, setFaceidModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //form submission logic here
  };

  const handleViewPassToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
   <>
 <div className="grid-cols-1 tab:grid-cols-2 grid w-full h-screen">
      <LeftColumn />
      <RightColumn>
        <form action="#" onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col gap-2 pb-4">
            <label
              htmlFor="login_id"
              className="font-semibold flex items-center text-dark text-normal"
            >
              Login ID
              <span className="text-error pl-1">*</span>
            </label>
            <input
              type="text"
              name="login_id"
              id="login_id"
              className={`${inputError ? 'border-error' : "border-border-input"} placeholder:text-placeholder font-normal border-1 text-paragraph  focus-within:border-dark focus-within:outline-none py-3 px-4 rounded-md`}
              placeholder="Enter Login ID"
            />
            {inputError && (
              <div className="flex gap-2 items-center text-smallCaption text-error">
                <AiOutlineWarning className="text-smallCaption" />
                <span className="">Please enter a valid login ID</span>
              </div>
            )}
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
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`${inputError ? 'border-error' : "border-border-input"} w-full placeholder:text-placeholder font-normal border-1 text-paragraph  focus-within:border-dark focus-within:outline-none py-3 px-4 rounded-md`}
                placeholder="Enter password"
              />
              {showPassword ? (
                <AiOutlineEyeInvisible onClick={handleViewPassToggle} className="absolute cursor-pointer text-light right-4 top-1/2 -translate-y-1/2" />
              ) : (
                <AiOutlineEye onClick={handleViewPassToggle} className="absolute cursor-pointer text-light right-4 top-1/2 -translate-y-1/2" />
              )}
            </div>
            {/* {inputError && (
              <div className="flex gap-2 items-center text-smallCaption text-error">
                <AiOutlineWarning className="text-smallCaption" />
                <span className="">Please enter a valid code</span>
              </div>
            )} */}
            <div className="flex w-full justify-between font-medium text-smallSubheading items-end">
              <span onClick={()=>navigate("/")} className='text-dark underline cursor-pointer'>Login with different user</span><span onClick={()=>navigate("/forgot-password")} className='text-theme-color cursor-pointer'>Forgot Password?</span>
            </div>
          </div>
          <button onClick={()=>navigate("/set-up")} disabled={false} className="bg-theme-color font-semibold py-3 tracking-widest mt-3 w-full text-white rounded-md">
            Login
          </button>
        </form>
        <p className="text-dark text-smallSubheading pt-3 font-normal">
          Do you have another account? <span className="text-theme-color cursor-pointer"  onClick={()=>navigate("/switch-company")}>Switch Company</span>
        </p>

       

       <div className='w-full mt-12 h-[1px] bg-lighter text-lighter text-paragraph font-normal relative'><h1 className='absolute px-2 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-1'>OR</h1></div> 

       <div className="biometric__buttons flex gap-3 mt-12 flex-col w-full">
          <buttons onClick={()=>navigate('/fingerprint-login')} className = "border border-theme-color cursor-pointer w-full gap-2 justify-center text-pargraph items-center rounded-md flex py-3 text-theme-color px-4">Login with Fingerprint ID <img src={fingerprint}  alt="" /> </buttons>
          <buttons className = "border border-theme-color cursor-pointer w-full gap-2 justify-center text-pargraph items-center rounded-md flex py-3 text-theme-color px-4">Login with Face ID <img src={faceid} alt="" /> </buttons>
        </div>
        </RightColumn>
    </div>
    </>
  );
};

export default NewPage;
