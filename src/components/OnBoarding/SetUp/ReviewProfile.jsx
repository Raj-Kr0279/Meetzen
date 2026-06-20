import React, { useState } from 'react';
import profile from '../../../Assets/profileDummy.png';
import { AiOutlinePlus } from 'react-icons/ai';

const ReviewProfile = ({ next, prev }) => {
  const [inputError, setInputError] = useState(false);
  const [profileImage, setProfileImage] = useState(null); // Initialize as null

  const fileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      // Ensure a file is selected
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <>
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-2/3 place-items-center mx-auto pt-20">
        <div className='my-6 self-start tab:my-0'>
          <label
            htmlFor="profile_pic"
            className="w-[110px] tab:w-[300px] overflow-hidden inline-block h-[110px] tab:h-[300px] relative cursor-pointer"
          >
            <div className="absolute overflow-hidden w-[110px] tab:w-[300px] h-[110px] tab:h-[300px] top-0 left-0 rounded-full">
              <img src={profileImage || profile} alt="profile" className="w-full h-full object-cover" />
              <div className="absolute bg-prof-overlay h-1/2 bottom-0 left-0 flex flex-col w-full items-center justify-center font-semibold text-white gap-2">
                <AiOutlinePlus className=" text-mediumSubheading tab:text-heading font-semibold" />
                <p className="text-small font-medium tab:text-medium">Change Image</p>
              </div>
            </div>
            <input
              type="file"
              name="profile_pic"
              className="hidden"
              id="profile_pic"
              onChange={fileChange}
            />
          </label>
        </div>

        <form className='w-full'>
          <div className="flex flex-col gap-2 pb-4">
            <label
              htmlFor="login_id"
              className="font-semibold flex items-center text-dark text-normal"
            >
              Full Name
              <span className="text-error pl-1">*</span>
            </label>
            <input
              type="text"
              name="login_id"
              id="login_id"
              className={`${inputError ? 'border-error' : "border-border-input"} placeholder:text-placeholder w-full font-normal border-1 text-paragraph  focus-within:border-dark focus-within:outline-none py-3 px-4 rounded-md`}
              placeholder="Enter full name"
            />
            {/* {inputError && (
              <div className="flex gap-2 items-center text-smallCaption text-error">
                <AiOutlineWarning className="text-smallCaption" />
                <span className="">Please enter a valid login ID</span>
              </div>
            )} */}
          </div>

          <div className="flex flex-col gap-2 pb-4">
            <label
              htmlFor="whasapp"
              className="font-semibold flex items-center text-dark text-normal"
            >
              Mobile Number (WhatsApp Preferred)
              <span className="text-error pl-1">*</span>
            </label>
            <input
              type="whasapp"
              name="whasapp"
              id="whasapp"
              className={`${inputError ? 'border-error' : "border-border-input"} w-full placeholder:text-placeholder font-normal border-1 text-paragraph  focus-within:border-dark focus-within:outline-none py-3 px-4 rounded-md`}
              placeholder="Enter Whatsapp number"
            />
            {/* {inputError && (
              <div className="flex gap-2 items-center text-smallCaption text-error">
                <AiOutlineWarning className="text-smallCaption" />
                <span className="">Please enter a valid login ID</span>
              </div>
            )} */}
          </div>

          <div className="flex flex-col gap-2 pb-4">
            <label
              htmlFor="bio"
              className="font-semibold flex items-center text-dark text-normal"
            >
              Bio
              <span className="text-error pl-1">*</span>
            </label>
            <textarea
              name="bio"
              id="bio"
              className={`w-full h-[80px] tab:h-[135px] placeholder:text-placeholder font-normal border-1 text-paragraph  focus-within:border-dark focus-within:outline-none py-3 px-4 rounded-md`}
              placeholder="Enter something about yourself here..."
            />
            {/* {inputError && (
              <div className="flex gap-2 items-center text-smallCaption text-error">
                <AiOutlineWarning className="text-smallCaption" />
                <span className="">Please enter a valid login ID</span>
              </div>
            )} */}
          </div>
        </form>
      </div>
      </div>


    
    </>
  );
};


export default ReviewProfile;
