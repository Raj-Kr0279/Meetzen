import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../features/user/userSlice";
import { removeCompany } from "../../features/company/companySlice";
import { MdLogout, MdOutlinePassword } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import Modal from "../ui/Modal";

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
    if (label === "Profile Details") {
      navigateAndClose("/home/edit-profile");
      return;
    }

    if (label === "Change Password") {
      navigateAndClose("/home/change-password");
      return;
    }

    if (label === "Logout") {
      handleClose("/");
    }
  };

  return (
    <Modal
      onClose={onClose}
      title="Profile menu"
      panelClassName="absolute right-4 top-20 max-w-xs rounded-md bg-white px-4 py-2 shadow-lg md:right-6"
    >
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
          <div
            key={item.label}
            className="flex items-center gap-2 divide-accent border-b border-border cursor-pointer"
            onClick={() => clickLink(item.label)}
          >
            {item.icon}
            <span className="text-body-sm text-primary">{item.label}</span>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default ProfileModal;
