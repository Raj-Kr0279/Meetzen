import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import TopHeader from "./TopHeader";
import FilterModal from "./FilterModal";
import NotificationModal from "./NotificationModal";
import ProfileModal from "./ProfileModal";
import { MdOutlineMessage } from "react-icons/md";
import cal from "../../Assets/Calendar.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import MeetingModal from "./MeetingModal";
import { DataContext } from "../Context/DataContext";

const HomeLayout = () => {
  const { sidemenu, setSidemenu, isFiltersModal, setIsFilterModal } =
    useContext(DataContext);

  const [isNotificationsModal, setIsNotificationsModal] = useState(false);
  const [isProfileModal, setIsProfileModal] = useState(false);
  const [isMeetingModal, setIsMeetingModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {}, [window.location.pathname]);
  return (
    <>
      {console.log(isSidebarOpen, "checking")}
      {/* overlay for mobile screen  */}

      <div
        className={`${
          isMeetingModal || isFiltersModal ? "block" : "hidden"
        } z-40 fixed h-full w-full bg-[#00000095] top-0 left-0`}
      ></div>
      {isSidebarOpen ? (
        <div
          className={`z-40 md:hidden overlay fixed h-full w-full bg-[#00000095] top-0 left-0`}
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      ) : null}
      <div className="h-screen">
        <TopHeader
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          isFiltersModal={isFiltersModal}
          setIsFilterModal={setIsFilterModal}
          isNotificationsModal={isNotificationsModal}
          setIsNotificationsModal={setIsNotificationsModal}
          isProfileModal={isProfileModal}
          setIsProfileModal={setIsProfileModal}
        />
        {isNotificationsModal && (
          <NotificationModal
            isNotificationsModal={isNotificationsModal}
            setIsNotificationsModal={setIsNotificationsModal}
          />
        )}
        {isFiltersModal && (
          <FilterModal
            isFiltersModal={isFiltersModal}
            setIsFilterModal={setIsFilterModal}
          />
        )}
        {isProfileModal && (
          <ProfileModal
            isProfileModal={isProfileModal}
            setIsProfileModal={setIsProfileModal}
          />
        )}
        {isMeetingModal && (
          <MeetingModal
            isMeetingModal={isMeetingModal}
            setIsMeetingModal={setIsMeetingModal}
          />
        )}
        <div className="w-full h-[calc(100vh-64px)] flex">
          <Sidebar isSidebarOpen={isSidebarOpen} />
          <div className="grow h-full mt-6 w-full relative">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
