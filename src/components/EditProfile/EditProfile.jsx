import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdArrowBackIosNew, MdOutlineImage } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import prof from "../../Assets/profileDummy.png";
import { FaAngleDown } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import PageHeading from "../PageHeading";

const EditProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    bio: "",
    language: "english",
    timezone: "+00:00",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
            <span className="text-dark font-medium text-smallSubheading text-center pb-6">
              Recommeded image size
              <br />
              250x250
            </span>
          </div>
          <div className="buttons flex flex-col gap-4 w-9/12">
            <button className="bg-meetzen-primary text-white py-3 px-4 rounded-md flex items-center gap-2 justify-center text-smallSubheading font-normal">
              <MdOutlineImage />
              Change Picture
            </button>
            <button className="bg-white border-error border text-error py-3 px-4 rounded-md flex items-center gap-2 justify-center text-smallSubheading font-normal">
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
            <div>
              <label
                htmlFor="name"
                className="text-dark text-base font-semibold inline-block pb-2"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="border-border-input placeholder:text-placeholder w-full font-normal border text-base focus:border-dark focus:outline-none py-3 px-4 rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="text-dark text-base font-semibold inline-block pb-2"
              >
                Mobile Number (WhatsApp Preferred)
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="border-border-input placeholder:text-placeholder w-full font-normal border text-base focus:border-dark focus:outline-none py-3 px-4 rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="bio"
                className="text-dark text-base font-semibold inline-block pb-2"
              >
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                className="border-border-input resize-none h-28 placeholder:text-placeholder w-full font-normal border text-base focus:border-dark focus:outline-none py-3 px-4 rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="language"
                className="text-dark text-base font-semibold inline-block pb-2"
              >
                Change Language
              </label>

              <div className="select-wrapper w-full relative">
                <FaAngleDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />

                <select
                  id="language"
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  className="border w-full text-base text-dark font-medium pl-4 pr-10 py-3 rounded-md focus:border-dark appearance-none"
                >
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                  <option value="bengali">Bengali</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="timezone"
                className="text-dark text-base font-semibold inline-block pb-2"
              >
                Change Time Zone
              </label>

              <div className="select-wrapper w-full relative">
                <FaAngleDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />

                <select
                  id="timezone"
                  name="timezone"
                  value={formData.timezone}
                  onChange={handleChange}
                  className="border w-full text-base text-dark font-medium pl-4 pr-10 py-3 rounded-md focus:border-dark appearance-none"
                >
                  <option value="-12:00">
                    (GMT -12:00) Eniwetok, Kwajalein
                  </option>
                  <option value="-11:00">
                    (GMT -11:00) Midway Island, Samoa
                  </option>
                  <option value="-10:00">(GMT -10:00) Hawaii</option>
                  {/* ...rest of the options... */}
                  <option value="+00:00">
                    (GMT) Western Europe Time, London, Lisbon, Casablanca
                  </option>
                  <option value="+05:30">
                    (GMT +5:30) Bombay, Calcutta, Madras, New Delhi
                  </option>
                  <option value="+14:00">
                    (GMT +14:00) Line Islands, Tokelau
                  </option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 py-4 px-8 rounded-lg bg-meetzen-primary text-white"
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
