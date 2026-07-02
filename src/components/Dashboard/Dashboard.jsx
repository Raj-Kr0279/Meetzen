import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { FiEdit, FiFile, FiUsers } from "react-icons/fi";
import { MdOutlineMessage } from "react-icons/md";
// import DatePicker from "react-modern-calendar-datepicker";
import { useState } from "react";
import prof from "../../Assets/profileDummy.png";

// import "./Dashboard.css";
import { demoData } from "../../demoData/demoData";
import ActionablesSummary from "./ActionablesSummary";
import MeetingCard from "../ui/MeetingCard";

const Dashboard = () => {
  const [isChat, setIsChat] = useState(false);
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [isMeetingModal, setIsMeetingModal] = useState(false);
  const [meetingFilterValue, setMeetingFilterValue] = useState("all");
  const handleDateClick = (date) => {
    if (date) {
      const today = new Date();
      const isToday = date.toDateString() === today.toDateString();

      if (isToday) {
        setSelectedDate(date);
        setIsMeetingModal(true);
      }
    }
  };

  return (
    <div className="grid dash__wrapper px-4 md:px-10 grid-cols-1 md:grid-cols-[1.5fr_1fr] pb-20 gap-8">
      <div className="flex flex-col w-full">
        <div className="highlight__wrp md:min-h-[480px] overflow-hidden border border-gray-300 w-full rounded-xl md:p-4 card">
          <div className="flex highlight_switcher justify-between items-center">
            <div className="font-normal flex items-center text-sm px-0 overflow-hidden border border-gray-300 rounded-md whitespace-nowrap h-12 place-items-center">
              <p
                onClick={() => setMeetingFilterValue("all")}
                className={`${meetingFilterValue === "all" ? "bg-meetzen-primary text-white" : "text-meetzen-textPrimary bg-white"} w-full flex items-center justify-center h-full px-4`}
              >
                {`All(${demoData.meetings.length})`}
              </p>
              <p
                onClick={() => setMeetingFilterValue("upcoming")}
                className={`${meetingFilterValue === "upcoming" ? "bg-meetzen-primary text-white" : "text-meetzen-textPrimary bg-white"} w-full flex items-center justify-center h-full px-4`}
              >
                {`Upcoming(${demoData.meetings.filter(i=>i.status === "upcoming").length})`}
              </p>
              <p
                onClick={() => setMeetingFilterValue("recent")}
                className={`${meetingFilterValue === "recent" ? "bg-meetzen-primary text-white" : "text-meetzen-textPrimary bg-white"}  w-full flex items-center justify-center h-full px-4`}
              >
                {`Recent(${demoData.meetings.filter(i=>i.status === "recent").length})`}
              </p>
            </div>
            <span
              onClick={() => {
                setMeetingFilterValue("all");
                navigate("/home/my-meetings-list");
              }}
              className="underline cursor-pointer text-theme-color font-semibold"
            >
              View all
            </span>
          </div>
          <div className="highlights__content_wrp max-h-[395px] overflow-y-scroll flex md:flex-col gap-2 mt-6">
            {meetingFilterValue === "upcoming"
              ? demoData.meetings
                  .filter((item) => item.status === "upcoming")
                  .map((meeting) => (
                    <MeetingCard meeting={meeting} id={meeting.id} />
                  ))
              : meetingFilterValue === "recent"
                ? demoData.meetings
                    .filter((item) => item.status === "recent")
                    .map((meeting) => (
                      <MeetingCard meeting={meeting} id={meeting.id} />
                    ))
                : demoData.meetings.map((meeting) => (
                    <MeetingCard meeting={meeting} id={meeting.id} />
                  ))}
          </div>
        </div>
        <ActionablesSummary />
      </div>
      <div className="flex flex-col gap-4 w-full">
        {/* date picker  */}
        {/* <div className="date__picker py-2 overflow-hidden border rounded-lg card">
          <DatePicker
            selected={startDate}
            formatWeekDay={(day) => day.substr(0, 1)}
            onChange={(date) => {
              setStartDate(date);
              handleDateClick(date);
            }}
            // onChange={handleDateClick}
            renderCustomHeader={({
              monthDate,
              customHeaderCount,
              decreaseMonth,
              increaseMonth,
            }) => (
              <div>
                <button
                  aria-label="Previous Month"
                  className={
                    "absolute flex justify-center items-center w-8 h-8 right-14 border-2 text-smallSubheading top-3 rounded-md"
                  }
                  style={
                    customHeaderCount === 1 ? { visibility: "hidden" } : null
                  }
                  onClick={decreaseMonth}
                >
                  {<AiOutlineLeft />}
                </button>

                <span className=" text-2xl text-dark font-semibold text-left w-full pl-6">
                  {monthDate.toLocaleString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <button
                  aria-label="Next Month"
                  className={
                    "absolute flex justify-center items-center w-8 h-8 right-3 border-2 text-smallSubheading top-3 rounded-md"
                  }
                  // style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
                  onClick={increaseMonth}
                >
                  {<AiOutlineRight />}
                </button>
              </div>
            )}
            inline
          />
        </div> */}
        <div className="notifications border border-gray-300 rounded-lg p-4 card flex-col flex bg-white h-[50vh]">
          <div className="flex highlight_switcher whitespace-nowrap mb-3 justify-between items-center">
            <div className="font-semibold flex items-center text-base px-0 overflow-hidden border border-gray-300 rounded-md h-12">
              <p
                className={`w-full flex items-center justify-center h-full px-4 ${
                  isChat
                    ? "bg-white text-dark"
                    : "bg-lightBlueBg text-theme-color"
                }`}
                onClick={() => setIsChat(false)}
              >
                Notifications (2)
              </p>
              <p
                className={`w-full flex items-center justify-center h-full px-4 ${
                  !isChat
                    ? "bg-white text-dark"
                    : "bg-lightBlueBg text-theme-color"
                }`}
                onClick={() => setIsChat(true)}
              >
                Chats (4)
              </p>
            </div>
            <span
              className="underline cursor-pointer text-theme-color font-semibold"
              onClick={() => {
                if (isChat) {
                  navigate("/home/chat");
                } else {
                  navigate("/home/notifications");
                }
              }}
            >
              View all
            </span>
          </div>
          <div className="flex flex-col overflow-scroll grow-1 chat__wrapper">
            {!isChat
              ? Array.from({ length: 4 }, (_, index) => (
                  <div key={index} className="pt-4 grow-1 noti__wrapper">
                    <div className="flex flex-col mb-2 break-words bg-hover-bg border-l-4 p-2 border-theme-color">
                      <h1 className="text-dark text-base font-semibold">
                        80th Meeting of Board Committee
                      </h1>
                      <span className="text-smallCaption tracking-[.18px] pb-1 text-placeholder font-normal">
                        Lorem ipsum dolor sit amet consectetur. Donec laoreet
                        molestie semper sed urna. Donec laoreet molestie semper
                        sed urna.{" "}
                      </span>
                      <p className=" text-smallCaption text-theme-color font-semibold">
                        July 23, 2023 at 05:45 PM
                      </p>
                    </div>
                  </div>
                ))
              : Array.from({ length: 5 }, (_, index) => (
                  <div key={index} className="chat__card px-6">
                    <div className="flex items-start">
                      <div className="relative w-10 h-10 shrink-0 mr-4">
                        <img
                          src={prof}
                          className="w-full h-full rounded-full"
                          alt=""
                        />
                        <div className="absolute w-[.563rem] h-[.563rem] bg-success rounded-full right-0 bottom-0"></div>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex justify-between leading-none pb-1 items-center">
                          <p className="text-dark font-medium text-smallSubheading">
                            Brenda White
                          </p>
                          <span className="text-light font-medium text-[.813rem]">
                            12:00
                          </span>
                        </div>
                        <span className="text-light text-smallSubheading text__content_dash">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Similique ipsa repellat suscipit optio ex,
                          voluptates quos nihil sunt consequuntur voluptate?
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
