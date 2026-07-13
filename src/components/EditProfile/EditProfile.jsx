import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdArrowBackIosNew, MdOutlineImage } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import prof from "../../assets/profileDummy.png";
import { FaAngleDown } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import PageHeading from "../PageHeading";
import InputField from "../ui/InputField";
import { languages, TIME_ZONES } from "../../utils/timeZones";
import { useSelector } from "react-redux";

const EditProfile = () => {
  const user =useSelector(state=>state.user)
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: user.name,
    phone: user.phone,
    bio: user.bio,
    language: user.language,
    timezone: user.timezone,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(form, "form");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Profile updated");
    navigate("/home/dashboard");
  };

  return (
    <>
      <PageHeading label="Edit Profile" />

      <div className="grid md:grid-cols-[4fr_8fr] max-h-[calc(100dvh-40px)] mt-20 grid-cols-1 md:px-5 lg:px-24 place-items-center w-full">
        <div className="flex flex-col self-baseline gap-4 items-center">
          <div className="flex flex-col gap-2 items-center">
            <img
              src={prof}
              className="w-[240px] h-[240px] rounded-full"
              alt=""
            />
            <span className="text-foreground font-medium text-xs text-center pb-6">
              Recommeded image size
              <br />
              250x250
            </span>
          </div>
          <div className="buttons flex flex-col gap-4 w-9/12">
            <button className="bg-primary text-white py-3 px-4 rounded-md flex items-center gap-2 justify-center text-xs font-normal">
              <MdOutlineImage />
              Change Picture
            </button>
            <button className="bg-white border-error border text-error py-3 px-4 rounded-md flex items-center gap-2 justify-center text-xs font-normal">
              <FiTrash2 />
              Delete
            </button>
          </div>
        </div>
        {/* form profile  */}
        <div className="w-full xl:w-8/12 justify-self-start">
          <form
            onSubmit={handleSubmit}
            className="flex edit_profile flex-col w-full gap-6 lg:gap-2"
          >
            <InputField
              label="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleInputChange}
            />
            <InputField
              label="Enter your number"
              name="phone"
              type="text"
              value={form.phone}
              onChange={handleInputChange}
            />
            <InputField
              label="Bio"
              name="bio"
              type="textarea"
              value={form.bio}
              onChange={handleInputChange}
            />

            <div>
              <InputField
                label="Change Language"
                name="language"
                type="select"
                value={form.language}
                className=""
                onChange={handleInputChange}
                selectWrapperClasses=""
                options={languages}
              />
            </div>

            <div>
              <InputField
                label="Change Time Zone"
                name="timezone"
                type="select"
                className=""
                onChange={handleInputChange}
                selectWrapperClasses=""
                options={TIME_ZONES}
              />
            </div>

            <button
              type="submit"
              className="w-full mt-6 py-4 px-8 rounded-lg bg-primary text-white"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
