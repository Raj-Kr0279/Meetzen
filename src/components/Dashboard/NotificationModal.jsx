import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "../ui/Modal";

const NotificationModal = ({ onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleViewAllClick = () => {
    if (location.pathname !== "/home/notifications") {
      navigate("/home/notifications");
    }
    onClose();
  };

  return (
    <Modal
      onClose={onClose}
      title="Notifications"
      panelClassName="absolute right-4 top-20 flex h-[24rem] w-[calc(100vw-2rem)] max-w-md flex-col gap-4 rounded-2xl bg-white p-4 shadow-lg md:right-6"
    >
      <button
        type="button"
        className="absolute right-4 top-4 text-primary"
        onClick={onClose}
        aria-label="Close notifications"
      >
        <AiFillCloseCircle className="text-2xl" />
      </button>

      <div className="flex items-center justify-between pr-8">
        <h1 className="font-semibold text-primary">Notifications</h1>
        <button
          type="button"
          className="text-xs font-medium text-primary underline"
          onClick={handleViewAllClick}
        >
          View all
        </button>
      </div>

      <div className="grow overflow-y-auto">
        <div className="mb-2 flex flex-col break-words border-l-4 border-primary bg-hover p-2">
          <h1 className="text-base font-semibold text-primary">
            80th Meeting of Board Committee
          </h1>
          <span className="pb-1 text-smallCaption font-normal tracking-[.18px] text-placeholder">
            Lorem ipsum dolor sit amet consectetur. Donec laoreet molestie
            semper sed urna. Donec laoreet molestie semper sed urna.
          </span>
          <p className="text-smallCaption font-semibold text-primary">
            July 23, 2023 at 05:45 PM
          </p>
        </div>
        <div className="mb-2 flex flex-col break-words border-l-4 border-transparent p-2">
          <h1 className="text-base font-semibold text-primary">
            80th Meeting of Board Committee
          </h1>
          <span className="pb-1 text-smallCaption font-normal tracking-[.18px] text-placeholder">
            Lorem ipsum dolor sit amet consectetur. Donec laoreet molestie
            semper sed urna. Donec laoreet molestie semper sed urna.
          </span>
          <p className="text-smallCaption font-semibold text-primary">
            July 23, 2023 at 05:45 PM
          </p>
        </div>
        <div className="mb-2 flex flex-col break-words border-l-4 border-transparent p-2">
          <h1 className="text-base font-semibold text-primary">
            80th Meeting of Board Committee
          </h1>
          <span className="pb-1 text-smallCaption font-normal tracking-[.18px] text-placeholder">
            Lorem ipsum dolor sit amet consectetur. Donec laoreet molestie
            semper sed urna. Donec laoreet molestie semper sed urna.
          </span>
          <p className="text-smallCaption font-semibold text-primary">
            July 23, 2023 at 05:45 PM
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default NotificationModal;
