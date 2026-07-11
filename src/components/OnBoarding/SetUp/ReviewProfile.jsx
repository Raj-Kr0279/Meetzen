import React, { useState } from "react";
import profile from "../../../Assets/profileDummy.png";
import { AiOutlinePlus } from "react-icons/ai";
import InputField from "../../ui/InputField";
import { useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../../features/user/userSlice";

const ReviewProfile = ({ next, prev }) => {
const {formData, handleFormChange, error, setError} = useOutletContext();
const {name, phone, bio} = useSelector(state=>state.user);
const dispatch = useDispatch()
console.log(name, "form in review")

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
              <InputField
                type="text"
                label="Name"
                value={name}
                placeholder="Enter full name"
                name="name"
                className=""
                onChange={(e)=> dispatch(editUser({field: "name", value: e.target.value}))}
                error={error.name}
              />
            </div>

            <div className="flex flex-col gap-2 pb-4">
              <InputField
                type="text"
                label="Mobile Number (Whatsapp Preferred)"
                name="phone"
                value={phone}
                placeholder="Enter Whatsapp number"
                className=""
                onChange={(e)=> dispatch(editUser({field: "phone", value: e.target.value}))}
                error={error.number}
              />
            </div>

            <div className="flex flex-col gap-2 pb-4">
              <InputField
                type="textarea"
                label="Bio"
                name="bio"
                value={bio}
                className=""
                onChange={(e)=> dispatch(editUser({field: "bio", value: e.target.value}))}
                error={error.bio}
                placeholder="Enter something about yourself here..."
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReviewProfile;
