import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import prof from "../../assets/profileDummy.png";
import { FiTrash2 } from "react-icons/fi";
import InputField from "../ui/InputField";
import { languages, TIME_ZONES } from "../../utils/timeZones";
import { useSelector } from "react-redux";
import Button from "../ui/Button";
import { useEditUserMutation } from "../../features/user/userApi";

const EditProfile = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const [editUser, { isLoading }] = useEditUserMutation();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    bio: "",
    language: "",
    timezone: ""
  });
  const [userImage, setUserImage] = useState(null)
  const [preview, setPreview] = useState(null)
  const [error, setError] = useState({
    name: "",
    phone: "",
    bio: ""
  })
  // Strip trailing "/api/" so the uploads static path can be built from it
  // const baseUrl = (import.meta.env.VITE_BASE_URL || "").replace(/\/api\/?$/, "");
  // const userImageSrc = user?.userImage
  //   ? `${baseUrl}/uploads/${user.userImage.replace(/^uploads\//, "")}`
  //   : null;
 const validate = (values = form) => {
  const e = {};

  if (values.name.length < 5) e.name = "Enter at least 5 characters";
  else e.name = "";

  if (!/^(?:\+91|91|0)?[6-9]\d{9}$/.test(values.phone)) e.phone = "Invalid phone number";
  else e.phone = "";

  if (values.bio.length < 10) e.bio = "At least 10 characters needed";
  else e.bio = "";

  setError(e);
  return e;
};

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...form, [name]: value };
    setForm(updatedForm);
    validate(updatedForm);
  };
const handleInputFileChange = (e)=>{
  const file = e.target.files[0];
  setUserImage(file);
  if (file) {
    setPreview(URL.createObjectURL(file));
  }
}
const handleDeleteImage = () => {
  if (preview) {
    URL.revokeObjectURL(preview);
    setPreview(null);
  }
  setUserImage(null);
}
console.log(userImage,form, user._id, "file");
const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validate();
  if (Object.values(validationErrors).some((err) => err !== "")) return;

  const formData = new FormData();

  formData.append("name", form.name);
  formData.append("phone", form.phone);
  formData.append("bio", form.bio);
  formData.append("language", form.language);
  formData.append("timezone", form.timezone);

  if (userImage) {
    formData.append("userImage", userImage);
  }

  try {
    await editUser({ id: user._id, formData }).unwrap();
    navigate(-1);
  } catch (err) {
    console.error("Failed to update profile:", err);
  }
};
  useEffect(() => {
    if (!user) return;
    setForm({
      name: user?.name,
      phone: user?.phone,
      bio: user?.bio,
      language: user?.language,
      timezone: user?.timezone,
    });
  }, [user]);

  // Revoke object URL when a new preview is created or on unmount
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <>
      <p className="text-primary text-center pb-8 font-display text-display-lg">
        Edit Profile
      </p>
      <div className="grid lg:grid-cols-[4fr_8fr] lg:max-h-[calc(100dvh-40px)] grid-cols-1 place-items-center w-full">
        <div className="flex flex-col self-baseline gap-4 items-center">
          <div className="flex flex-col gap-2 items-center">
            <img
              src={preview || user?.userImage || prof}
              className="w-[240px] h-[240px] rounded-full object-cover"
              alt=""
            />
            <span className="text-primary font-medium text-xs text-center pb-6">
              Recommeded image size
              <br />
              250x250
            </span>
          </div>
          <div className="buttons flex flex-col gap-4 w-9/12">
          <button className="font-normal relative transition h-13 flex justify-center items-center font-poppins rounded-xs bg-primary border border-primary hover:bg-primary-hover text-white">
            <input type="file" accept="image/png, image/jpeg" className="opacity-0 absolute inset-0" onChange={handleInputFileChange} name="userImage" id="userImage" />
           Edit Profile
            </button>
            <button
              type="button"
              onClick={handleDeleteImage}
              className="border-error hover:bg-error hover:text-inverse border text-error py-3 px-4 rounded-xs flex items-center gap-2 justify-center text-body-sm font-normal transition-colors ease-in-out"
            >
              <FiTrash2 />
              Delete
            </button>
          </div>
        </div>
        {/* form profile  */}
        <div className="w-full xl:w-8/12 justify-self-start">
          <form
            onSubmit={handleSubmit}
            className="flex edit_profile flex-col w-full gap-2 lg:gap-4"
          >
            <InputField
              label="Name"
              name="name"
              type="text"
              error={error.name}
              value={form.name}
              onChange={handleInputChange}
            />
            <InputField
              label="Enter your number"
              name="phone"
              type="text"
              error={error.phone}
              value={form.phone}
              onChange={handleInputChange}
            />
            <InputField
              label="Bio"
              name="bio"
              type="textarea"
              error={error.bio}
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
                value={form.timezone}
                onChange={handleInputChange}
                selectWrapperClasses=""
                options={TIME_ZONES}
              />
            </div>

            <Button
              variant="primary"
              label="Submit"
              classNames="mt-4"
              disabled={isLoading}
              isLoading={isLoading}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
