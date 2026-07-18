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

const ProfileModal = ({ onClose }) => {
  const navigate = useNavigate();
const dispatch = useDispatch()
  const navigateAndClose = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    dispatch(removeCompany())
  };
  const handleClose = (path)=>{
    navigate(path);
    onClose();

  }

  return (
    <div className="fixed right-4 top-20 z-50 flex w-[calc(100vw-2rem)] max-w-xs flex-col rounded-2xl bg-white shadow-lg md:right-6">
      <button
        type="button"
        className="absolute right-4 top-4 text-primary"
        onClick={onClose}
        aria-label="Close profile menu"
      >
        <AiFillCloseCircle className="text-2xl" />
      </button>

      <button
        type="button"
        className="flex items-center border-b border-divider py-3 pl-4 pr-10 text-left"
        onClick={() => handleClose("/home/edit-profile")}
      >
        <img src={prof} className="mr-4 h-6 w-6" alt="" />
        <span className="text-xs font-normal text-primary">Profile Details</span>
      </button>
      <button
        type="button"
        className="flex items-center border-b border-divider py-3 pl-4 pr-10 text-left"
        onClick={() => handleClose("/home/change-password")}
      >
        <img src={pass} className="mr-4 h-6 w-6" alt="" />
        <span className="text-xs font-normal text-primary">Change Password</span>
      </button>
      <button
        type="button"
        className="flex items-center border-b border-divider py-3 pl-4 pr-10 text-left"
      >
        <img src={face} className="mr-4 h-6 w-6" alt="" />
        <span className="text-xs font-normal text-primary">Setup Face ID</span>
      </button>
      <button
        type="button"
        className="flex items-center border-b border-divider py-3 pl-4 pr-10 text-left"
      >
        <img src={fing} className="mr-4 h-6 w-6" alt="" />
        <span className="text-xs font-normal text-primary">
          Setup Fingerprint ID
        </span>
      </button>
      <button
        type="button"
        className="flex items-center py-3 pl-4 pr-10 text-left"
        onClick={() => navigateAndClose("/")}
      >
        <img src={logoutIcon} className="mr-4 h-6 w-6" alt="" />
        <span className="text-xs font-normal text-primary">Logout</span>
      </button>
    </div>
  );
};

export default ProfileModal;
