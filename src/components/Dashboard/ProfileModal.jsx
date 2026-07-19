import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import prof from "../../assets/person_FILL0_wght300_GRAD0_opsz24.svg";
import pass from "../../assets/password_FILL0_wght300_GRAD0_opsz24 1.svg";
import face from "../../assets/Face ID Symbol.png";
import fing from "../../assets/fingerprint_FILL0_wght200_GRAD200_opsz24 1.svg";
import logoutIcon from "../../assets/logout_FILL0_wght300_GRAD0_opsz24.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../features/user/userSlice";
import { removeCompany } from "../../features/company/companySlice";
import { MdLogout, MdOutlinePassword } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

const ProfileModal = ({ onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigateAndClose = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    dispatch(removeCompany());
    navigate("/");
  };
  const handleClose = (path) => {
    navigate(path);
    onClose();
  };
  const links = [
    { label: "Profile Details", icon: <FaRegUserCircle /> },
    { label: "Change Password", icon: <MdOutlinePassword /> },
    { label: "Logout", icon: <MdLogout /> },
  ];
  const clickLink = (label) => {
    label === "Profile Details"
      ? navigateAndClose("/home/edit-profile")
      : label === "Change Password"
        ? navigateAndClose("/home/change-password")
        : label === "Logout"
          ? handleClose("/")
          : null;
  };

  return (
    <div className="absolute gap-2 px-4 py-2 right-4 top-20 z-50 max-w-xs flex-col rounded-md bg-white shadow-lg md:right-6">
      <button
        type="button"
        className="absolute right-2 top-2 text-primary"
        onClick={onClose}
        aria-label="Close profile menu"
      >
        <AiFillCloseCircle className="text-body-md text-error" />
      </button>
      <div className="mt-2 flex flex-col gap-2 pb-2">
      {links.map((item) => (
        <div key={item.label}
          className="flex items-center gap-2 divide-accent border-b border-border cursor-pointer"
          onClick={()=>clickLink(item.label)}
        >
          {item.icon}
          <span className="text-body-sm text-primary">{item.label}</span>
        </div>
      ))}
      </div>
      {/* <button
        type="button"
        className="flex items-center border-b border-border py-3 pl-4 pr-10 text-left"
      >
        <img src={face} className="mr-4 h-6 w-6" alt="" />
        <span className="text-body-sm text-primary">Setup Face ID</span>
      </button>
      <button
        type="button"
        className="flex items-center border-b border-border py-3 pl-4 pr-10 text-left"
      >
        <img src={fing} className="mr-4 h-6 w-6" alt="" />
        <span className="text-body-sm text-primary">
          Setup Fingerprint ID
        </span>
      </button> */}
    </div>
  );
};

export default ProfileModal;
