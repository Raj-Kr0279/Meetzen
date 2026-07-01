import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import {
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import prof from "../../Assets/profileDummy.png";
import { FiUsers } from "react-icons/fi";
import { RiMapPin2Line } from "react-icons/ri";
import { FaAngleLeft } from "react-icons/fa";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ViewMapModal from "./ViewMapModal";
import PageHeading from "../PageHeading";
import { demoData } from "../../demoData/demoData";
import { formatDateTime } from "../../utils/dateFormatter";

const MyMeetingsList = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [mapModal, setMapModal] = useState(false);
  const handleFilterSelection = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <>
      {/* top navigation  */}
      {mapModal && <ViewMapModal setModal={setMapModal} />}
      <PageHeading label="All Meetings" />

      <div className="w-full px-10 flex flex-col">
        {/* filters and search section  */}
        <div className=" flex justify-between rounded-md mb-4 items-center">
          <div className="flex highlight_switcher justify-between items-center">
            <div className="font-semibold flex items-center border-borderInput text-xs px-0 overflow-hidden border rounded-md h-12 place-items-center">
              <div className="font-semibold flex items-center border-borderInput text-xs px-0 overflow-hidden border rounded-md h-12 place-items-center">
                <p
                  className={`w-full flex items-center px-4 justify-center h-full  ${
                    selectedFilter === "all"
                      ? "bg-meetFilterBlueLight text-theme-color"
                      : "bg-white text-dark"
                  }`}
                  onClick={() => handleFilterSelection("all")}
                >
                  All
                </p>
                <p
                  className={`w-full flex items-center justify-center h-full px-4 ${
                    selectedFilter === "upcoming"
                      ? "bg-meetFilterBlueLight text-theme-color"
                      : "bg-white text-dark"
                  }`}
                  onClick={() => handleFilterSelection("upcoming")}
                >
                  Upcoming
                </p>
                <p
                  className={`w-full flex items-center justify-center h-full px-4 ${
                    selectedFilter === "recent"
                      ? "bg-meetFilterBlueLight text-theme-color"
                      : "bg-white text-dark"
                  }`}
                  onClick={() => handleFilterSelection("recent")}
                >
                  Recent
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <label
              htmlFor="year"
              className="text-placeholder text-xs font-normal"
            >
              Filter Year:{" "}
            </label>
            <select
              className="py-2.5 px-2.5 bg-white text-dark text-xs w-[19vw] rounded-sm border border-borderInput"
              name="year"
              id="year"
            >
              <option value="all">All</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>

            <label
              htmlFor="year"
              className="text-placeholder text-xs font-normal"
            >
              Filter Committee:{" "}
            </label>
            <select
              className="py-2.5 px-2.5 bg-white text-dark text-xs w-[19vw] rounded-sm border border-borderInput"
              name="committee"
              id="committee"
            >
              <option value="all">All</option>
              <option value="board_meetig">Board Meeting</option>
              <option value="audit">Audit</option>
              <option value="src">SRC</option>
            </select>
          </div>
        </div>

        {/* meeting cards  */}
        <div className=" w-full overflow-scroll place-content-baseline h-[50rem] grid grid-cols-1 md:grid-cols-[repeat(auto-fit,_minmax(26.563rem,_1fr))] gap-4 place-items-center">
          {demoData.meetings.map((meeting) => (
            <div
              key={meeting.id}
              className={`inner__card w-full ${
                selectedFilter === "recent"
                  ? "bg-meetzen-meetRedBg border-meetzen-error"
                  : "bg-meetzen-meetGreenBg border-meetzen-success"
              } px-4 p-6 rounded-xl border`}
              onClick={() => navigate(`/home/meeting-details/${meeting.id}`)}
            >
              <div className="flex justify-between items-center">
                <p className="text-xs font-normal text-theme-color tracking-[.04rem] uppercase leading-[1.1]">
                  {meeting.type}
                </p>
                <span
                  className={`${
                    selectedFilter === "recent"
                      ? "text-meetzen-error bg-meetzen-meetRedPill"
                      : "text-meetzen-success bg-meetzen-meetGreenPill"
                  } font-medium text-xs py-[5px] px-3.5 rounded-xl`}
                >
                  {selectedFilter === "recent" ? "Recents" : "Upcoming"}
                </span>
              </div>
              <h3 className="text-dark text-base font-semibold pb-2">
                {meeting.committeeName}
              </h3>
              <div className="flex text-dark pb-2 gap-4 text-xs font-medium leading-snug">
                <div className="flex items-center gap-1">
                  <AiOutlineCalendar className="text-theme-color" />
                  <span>
                    {new Date(meeting.startAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <AiOutlineClockCircle className="text-theme-color" />
                  <span>
                    {new Date(meeting.startAt).toLocaleTimeString("en-GB", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}{" "}
                    -{" "}
                    {new Date(meeting.endAt).toLocaleTimeString("en-GB", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </span>
                </div>
              </div>
              <div className="flex items-center text-xs pb-2 text-dark font-medium">
                <RiMapPin2Line className="text-theme-color mr-1" />
                <span className="mr-2">{meeting.location.label}</span>
                <span
                  className="text-theme-color underline text-meetzen-smallSubheading cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setMapModal(true);
                  }}
                >
                  view on map
                </span>
              </div>
              <div className="flex items-center gap-5 pt-1">
                <div className="flex items-center text-xs font-normal gap-1 text-placeholder">
                  <FiUsers className="text-theme-color" />
                  <span>Members Accepted ({meeting.membersAccepted}/{meeting.membersTotal})</span>
                </div>
                <div className="users_preview_wrp flex">
                  <div
                    className={`users__image rounded-full border-meetzen-primary border bg-center bg-cover w-10 h-10 -ml-2.5`}
                    style={{ backgroundImage: `url(${prof})` }}
                  ></div>
                  <div
                    className={`users__image rounded-full border-meetzen-primary border bg-center bg-cover w-10 h-10 -ml-2.5`}
                    style={{ backgroundImage: `url(${prof})` }}
                  ></div>
                  <div
                    className={`users__image rounded-full border-meetzen-primary border bg-center bg-cover w-10 h-10 -ml-2.5`}
                    style={{ backgroundImage: `url(${prof})` }}
                  ></div>
                  <div
                    className={`users__image rounded-full border-meetzen-primary border bg-center bg-cover w-10 h-10 -ml-2.5`}
                    style={{ backgroundImage: `url(${prof})` }}
                  ></div>
                  <div className="bg-dark text-xs flex rounded-full border-meetzen-primary border w-10 h-10 -ml-2.5 text-white justify-center items-center font-medium">
                    <span>+23</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyMeetingsList;
