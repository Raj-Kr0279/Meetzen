import React, { useState } from "react";
import {
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import { MdArrowBackIosNew } from "react-icons/md";
import { RiMapPin2Line } from "react-icons/ri";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import Agenda from "./Agenda/Agenda";
import Members from "./Members";
import Minutes from "./Minutes";
import ImportantDocuments from "./ImportantDocuments";
import Requests from "./Requests";
import PageHeading from "../PageHeading";

const MeetingDetails = () => {
  const [currentTab, setCurrentTab] = useState("agenda");
  const [attendance, setAttendance] = useState(false);
  const [isPresent, setIsPresent] = useState(false);
  const navLinks = ["agenda", "members", "minutes", "documents", "requests"];
  const activeStyles = `bg-theme-color text-white`;
  const { id } = useParams();
  const handlePresent = () => {
    setAttendance(false);
    setIsPresent(true);
  };
  const handleAttendance = () => {
    setIsPresent(false);
    setAttendance(true);
  };
  const navigate = useNavigate();
  return (
    <>
      <PageHeading label="Meeting WorkSpace" />
      <div className="grid md:grid-cols-2 px-4 md:px-10">
        <div>
          <p className="text-theme-color font-normal leading-none pb-1 text-[10px] md:text-paragraph">
            BOARD COMMITTEE
          </p>
          <h1 className="text-[16px] md:text-extraLarge leading-none font-semibold text-dark pb-3">
            132nd Meeting of Board Committee
          </h1>
          <div className="flex items-center py-3 md:p-0 gap-4">
            <div className="flex flex-col md:flex-row">
              <p className="flex items-center gap-1 text-theme-color text-[12px] md:text-paragraph font-semibold">
                <AiOutlineCalendar className="text-theme-color" />
                24/05/23
              </p>
              <p className="flex items-center gap-1 text-theme-color text-[12px] md:text-paragraph font-semibold">
                <AiOutlineClockCircle className="text-theme-color" />
                9:00 AM - 11:00 AM
              </p>
            </div>
            <p className="flex items-center gap-1 text-theme-color text-[12px] md:text-paragraph font-semibold">
              <RiMapPin2Line className="text-theme-color" />
              Online Conference
            </p>
          </div>
        </div>
        <div className=" md:justify-self-end">
          <div className="flex flex-wrap items-center gap-2">
            <button
              className="text-theme-color font-medium py-1.5 px-2.5 border border-theme-color rounded-md"
              onClick={() => navigate("/home/board-book")}
            >
              View Board book
            </button>
            <div className="relative">
              <button
                className="text-theme-color font-medium py-1.5 px-2.5 border border-theme-color rounded-md"
                onClick={handleAttendance}
              >
                Attendance
              </button>
              {attendance && (
                <div className="absolute whitespace-nowrap flex flex-col left-0 top-full mt-1 bg-white shadow-attendance rounded-sm">
                  <span className="text-prof py-1.5 px-3 hover:bg-hover-bg transition-all cursor-pointer text-paragraph font-normal border-b">
                    Preset
                  </span>
                  <span className="text-prof py-1.5 px-3 hover:bg-hover-bg transition-all cursor-pointer text-paragraph font-normal border-b">
                    Leave of Absence
                  </span>
                  <span
                    className="text-prof py-1.5 px-3 hover:bg-hover-bg transition-all cursor-pointer text-paragraph font-normal"
                    onClick={handlePresent}
                  >
                    Present Via VC
                  </span>
                </div>
              )}
              {isPresent && (
                <div className="absolute p-4 whitespace-nowrap flex flex-col -left-[150%] top-[150%] mt-1 bg-white shadow-attendance rounded-md">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    className="border rounded-md"
                    rows="5"
                  />
                  <button
                    className="bg-theme-color text-white rounded-md px-8 py-2 mt-4 text-paragraph font-medium"
                    onClick={() => setIsPresent(false)}
                  >
                    Lorem Ipsumn
                  </button>
                </div>
              )}
            </div>
            <button
              className="rounded-md basis-full md:basis-[unset] py-3 font-medium text-white mt-2 md:mt-0 md:py-1.5 px-2.5 bg-theme-color border border-theme-color"
              onClick={() => navigate("/home/join-call")}
            >
              Join VC Call
            </button>
          </div>
          <p className="text-textGray text-paragraph underline text-end pt-4 font-medium">
            Continue from last left
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center w-full mt-6 mb-4 ">
        <div className="flex gap-8 md:gap-1 w-full overflow-x-auto md:w-auto whitespace-nowrap">
          {navLinks.map((link, key) => (
            <NavLink
              to={`/home/meeting-details/${id}/${link}`}
              key={link}
              className={({ isActive }) =>
                `cursor-pointer  rounded-[8px_8px_0px_0px] p-3 ${
                  isActive && "bg-theme-color text-white"
                }`
              }
            >
              {link}
            </NavLink>
          ))}
        </div>

        <div className="bg-hover-bg md:p-4 w-[95%] h-[70dvh] overflow-y-scroll pt-12 flex justify-center rounded-xl">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MeetingDetails;
