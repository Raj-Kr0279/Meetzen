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
import MeetingFilter from "../ui/MeetingFilter";
import InputField from "../ui/InputField";

const MeetingDetails = () => {
  const [currentTab, setCurrentTab] = useState("Agenda");
  const [attendance, setAttendance] = useState(false);
  const [isPresent, setIsPresent] = useState(false);
  const navLinks = [
  { value: "agenda", label: "Agenda" },
  { value: "members", label: "Members" },
  { value: "minutes", label: "Minutes" },
  { value: "documents", label: "Documents" },
  { value: "requests", label: "Requests" },
];
  const activeStyles = `bg-primary text-white`;
  const { id } = useParams();
  const handlePresent = () => {
    setAttendance(false);
    setIsPresent(true);
  };
  const handleAttendance = () => {
    setIsPresent(false);
    setAttendance(true);
  };
  const handleSelect = (item)=>{
setCurrentTab(item)
  }
  const navigate = useNavigate();
  return (
    <>
      <PageHeading label="Meeting WorkSpace" />
      <div className="grid md:grid-cols-2">
        <div>
          <p className="text-secondary text-body-sm pb-0.5">BOARD COMMITTEE</p>
          <h1 className="text-display-md font-display text-primary pb-3">
            132nd Meeting of Board Committee
          </h1>
          <div className="flex items-center py-3 md:p-0 text-mono-md text-subtle gap-4">
            <div className="flex flex-col md:flex-row">
              <p className="flex items-center gap-1 ">
                <AiOutlineCalendar className="" />
                24/05/23
              </p>
              <p className="flex items-center gap-1 ">
                <AiOutlineClockCircle className="" />
                9:00 AM - 11:00 AM
              </p>
            </div>
            <p className="flex items-center gap-1 ">
              <RiMapPin2Line className="" />
              Online Conference
            </p>
          </div>
        </div>
        <div className=" md:justify-self-end">
          <div className="flex flex-wrap items-center gap-2">
            <button
              className="text-primary font-medium py-1.5 px-2.5 border border-theme-color rounded-md"
              onClick={() => navigate("/home/board-book")}
            >
              View Board book
            </button>
            <div className="relative">
              <button
                className="text-primary font-medium py-1.5 px-2.5 border border-theme-color rounded-md"
                onClick={handleAttendance}
              >
                Attendance
              </button>
              {attendance && (
                <div className="absolute whitespace-nowrap flex flex-col left-0 top-full mt-1 bg-white shadow-attendance rounded-sm">
                  <span className="text-prof py-1.5 px-3 hover:bg-hover-bg transition-all cursor-pointer text-base font-normal border-b">
                    Preset
                  </span>
                  <span className="text-prof py-1.5 px-3 hover:bg-hover-bg transition-all cursor-pointer text-base font-normal border-b">
                    Leave of Absence
                  </span>
                  <span
                    className="text-prof py-1.5 px-3 hover:bg-hover-bg transition-all cursor-pointer text-base font-normal"
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
                    className="bg-primary text-white rounded-md px-8 py-2 mt-4 text-base font-medium"
                    onClick={() => setIsPresent(false)}
                  >
                    Lorem Ipsumn
                  </button>
                </div>
              )}
            </div>
            <button
              className="rounded-md basis-full md:basis-[unset] py-3 font-medium text-white mt-2 md:mt-0 md:py-1.5 px-2.5 bg-primary border border-theme-color"
              onClick={() => navigate("/home/join-call")}
            >
              Join VC Call
            </button>
          </div>
          <p className="text-textGray text-base underline text-end pt-4 font-medium">
            Continue from last left
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center w-full mt-6 mb-4 ">
        {/* Desktop Tabs */}
        <div className=" font-normal w-full lg:w-auto rounded-full p-1 bg-surface flex mb-2 items-center text-sm overflow-x-auto snap-x snap-mandatory scroll-smooth border border-border whitespace-nowrap h-12 place-items-center">
          {navLinks.map((link, key) => (
            <NavLink
              to={`/home/meeting-details/${id}/${link.value}`}
              key={link.label}
              className={({ isActive }) =>
                `w-full flex items-center px-4 snap-start shrink justify-center h-full rounded-full ${
                  isActive ? "bg-primary text-white" : "text-primary"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="bg-hover-bg w-full h-[60dvh] overflow-y-scroll pt-4 flex justify-center rounded-xl">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MeetingDetails;
