import React, { useState } from "react";
import profile from "../../../Assets/profileDummy.png";
import { AiOutlinePlus } from "react-icons/ai";
import InputField from "../../ui/InputField";
import { useOutletContext } from "react-router-dom";

const ReviewProfile = ({ next, prev }) => {
const {formData, handleFormChange, error, setError} = useOutletContext();
console.log(formData, "form in review")

  return (
    <>
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:px-0 lg:w-2/3 place-items-center mx-auto lg:pt-20">
          <div className="my-6 self-start tab:my-0">
            <label
              htmlFor="profile_pic"
              className="w-[210px] tab:w-[300px] rounded-full overflow-hidden inline-block h-[210px] tab:h-[300px] relative cursor-pointer"
            >
              <div className="absolute overflow-hidden w-[210px] tab:w-[300px] h-[210px] tab:h-[300px] top-0 left-0 rounded-full">
                <img
                  src={profile}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bg-gray-900/80 h-1/2 bottom-0 left-0 flex flex-col w-full items-center justify-center font-semibold text-white gap-2">
                  <AiOutlinePlus className=" text-xl tab:text-heading font-normal" />
                  <p className="text-xs font-medium tab:text-medium">
                    Change Image
                  </p>
                </div>
              </div>
              <input
                type="file"
                name="profile"
                className="absolute inset-2.5 opacity-0"
                id="profile"
                onChange={handleFormChange}
              />
            </label>
          </div>

          <form className="w-full">
            <div className="flex flex-col gap-2 pb-4">
              {/* <label
              htmlFor="login_id"
              className="font-semibold flex items-center text-foreground text-normal"
            >
              Full Name
              <span className="text-error pl-1">*</span>
            </label>
            <input
              type="text"
              name="login_id"
              id="login_id"
              className={`${inputError ? 'border-error' : "border-border-input"} placeholder:text-placeholder w-full font-normal border-1 text-xs  focus-within:border-dark focus-within:outline-none py-3 px-4 rounded-md`}
              placeholder="Enter full name"
            /> */}
              <InputField
                type="text"
                label="Name"
                placeholder="Enter full name"
                name="name"
                className=""
                onChange={handleFormChange}
                error={error.name}
              />
              {/* {inputError && (
              <div className="flex gap-2 items-center text-smallCaption text-error">
                <AiOutlineWarning className="text-smallCaption" />
                <span className="">Please enter a valid login ID</span>
              </div>
            )} */}
            </div>

            <div className="flex flex-col gap-2 pb-4">
              {/* <label
              htmlFor="whasapp"
              className="font-semibold flex items-center text-foreground text-normal"
            >
              Mobile Number (WhatsApp Preferred)
              <span className="text-error pl-1">*</span>
            </label>
            <input
              type="whasapp"
              name="whasapp"
              id="whasapp"
              className={`${inputError ? 'border-error' : "border-border-input"} w-full placeholder:text-placeholder font-normal border-1 text-xs  focus-within:border-dark focus-within:outline-none py-3 px-4 rounded-md`}
              placeholder="Enter Whatsapp number"
            /> */}
              {/* {inputError && (
              <div className="flex gap-2 items-center text-smallCaption text-error">
                <AiOutlineWarning className="text-smallCaption" />
                <span className="">Please enter a valid login ID</span>
              </div>
            )} */}
              <InputField
                type="text"
                label="Mobile Number (Whatsapp Preferred)"
                name="number"
                placeholder="Enter Whatsapp number"
                className=""
                onChange={handleFormChange}
                error={error.number}
              />
            </div>

            <div className="flex flex-col gap-2 pb-4">
              {/* <label
              htmlFor="bio"
              className="font-semibold flex items-center text-foreground text-normal"
            >
              Bio
              <span className="text-error pl-1">*</span>
            </label>
            <textarea
              name="bio"
              id="bio"
              className={`w-full h-[80px] tab:h-[135px] placeholder:text-placeholder font-normal border-1 text-xs  focus-within:border-dark focus-within:outline-none py-3 px-4 rounded-md`}
              placeholder=""
            /> */}
              <InputField
                type="textarea"
                label="Bio"
                name="bio"
                className=""
                onChange={handleFormChange}
                error={error.bio}
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
