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
import MeetingCard from "../ui/MeetingCard";

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
              <div className="font-normal flex items-center text-sm px-0 overflow-hidden border border-border rounded-md whitespace-nowrap h-12 place-items-center">
                <p
                  className={`w-full flex items-center px-4 justify-center h-full  ${
                    selectedFilter === "all"
                      ? "bg-selected" : "text-foreground bg-white"} w-full flex items-center justify-center h-full px-4`}
                  onClick={() => handleFilterSelection("all")}
                >
                  All
                </p>
                <p
                  className={`w-full flex items-center justify-center h-full px-4 ${
                    selectedFilter === "upcoming"
                      ? "bg-selected" : "text-foreground bg-white"} w-full flex items-center justify-center h-full px-4`}
                  onClick={() => handleFilterSelection("upcoming")}
                >
                  Upcoming
                </p>
                <p
                  className={`w-full flex items-center justify-center h-full px-4 ${
                    selectedFilter === "recent"
                      ? "bg-selected" : "text-foreground bg-white"} w-full flex items-center justify-center h-full px-4`}
                  onClick={() => handleFilterSelection("recent")}
                >
                  Recent
                </p>
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
              className="py-2.5 px-2.5 bg-white text-foreground text-xs w-[19vw] rounded-sm border border-border"
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
              className="py-2.5 px-2.5 bg-white text-foreground text-xs w-[19vw] rounded-sm border border-border"
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
            <MeetingCard key={meeting.id} meeting={meeting}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyMeetingsList;
