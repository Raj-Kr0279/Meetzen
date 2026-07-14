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
import prof from "../../assets/profileDummy.png";

// import "./Dashboard.css";
import { demoData } from "../../demoData/demoData";
import ActionablesSummary from "./ActionablesSummary";
import MeetingCard from "../ui/MeetingCard";
import { formatDateTime } from "../../utils/dateFormatter";
import { RiNumbersFill } from "react-icons/ri";
import MeetingFilter from "../ui/MeetingFilter";
import { useGetMeetingsListQuery } from "../../features/meeting/meetingApi";
import MeetingCardSkeleton from "../ui/MeetingCardSkeleton";
const Dashboard = () => {
  const [notifFilterValue, setNotifFilterValue] = useState("notif");
  const { data: meetings, error, isLoading } = useGetMeetingsListQuery();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [isMeetingModal, setIsMeetingModal] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [committee, setCommittee] = useState("all");

  const filteredMeetings = meetings?.filter((m) => {
    const matchesStatus =
      selectedFilter === "all" ? true : m.status === selectedFilter;
    return matchesStatus;
  });
    const meetFilters = [
    { label: "All", value: "all" },
    { label: "Upcoming", value: "upcoming" },
    { label: "Recents", value: "recent" },
  ];
  const notifFilters = [
    {label: "Notifications", value: "notif"},
    {label: "Chats", value: "chats"}
  ]

    const handleFilterSelection = (filter) => {
    setSelectedFilter(filter);
  };
  const handleNotiFilterSelect = (filter)=>{
setNotifFilterValue(filter);
  }
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
    <div className="grid dash__wrapper grid-cols-1 md:grid-cols-[1.5fr_1fr] pb-20 gap-8">
      <div className="flex flex-col w-full">
        <div className="highlight__wrp md:min-h-120 overflow-hidden card">
            {/* <div className="font-normal flex items-center text-sm px-0 overflow-hidden border border-border rounded-md whitespace-nowrap h-12 place-items-center">
              <p
                onClick={() => setMeetingFilterValue("all")}
                className={`${meetingFilterValue === "all" ? "bg-selected" : "text-foreground bg-white"} w-full flex items-center justify-center h-full px-4`}
              >
                {`All(${demoData.meetings.length})`}
              </p>
              <p
                onClick={() => setMeetingFilterValue("upcoming")}
                className={`${meetingFilterValue === "upcoming" ? "bg-selected" : "text-foreground bg-white"} w-full flex items-center justify-center h-full px-4`}
              >
                {`Upcoming(${demoData.meetings.filter((i) => i.status === "upcoming").length})`}
              </p>
              <p
                onClick={() => setMeetingFilterValue("recent")}
                className={`${meetingFilterValue === "recent" ? "bg-selected" : "text-foreground bg-white"}  w-full flex items-center justify-center h-full px-4`}
              >
                {`Recent(${demoData.meetings.filter((i) => i.status === "recent").length})`}
              </p>
            </div> */}
            <div className="flex justify-between items-center">
            <MeetingFilter durationFilters={true} isFilter={false} filters={meetFilters} selectedFilter={selectedFilter} onFilterSelection={handleFilterSelection}/>
            <span
              onClick={() => {
                setSelectedFilter("all");
                navigate("/home/my-meetings-list");
              }}
              className="underline whitespace-nowrap cursor-pointer text-primary text-sm text-accent"
            >
              View all
            </span>
            </div>
          <div className="highlights__content_wrp max-h-[395px] overflow-y-scroll flex flex-col gap-2 mt-3">
            {meetings ?
              (selectedFilter === "upcoming"
                ? meetings
                    .filter((item) => item.status === "upcoming")
                    .map((meeting) => (
                      <MeetingCard meeting={meeting} id={meeting.id} />
                    ))
                : selectedFilter === "recent"
                  ? meetings
                      .filter((item) => item.status === "recent")
                      .map((meeting) => (
                        <MeetingCard meeting={meeting} id={meeting.id} />
                      ))
                  : meetings.map((meeting) => (
                      <MeetingCard meeting={meeting} id={meeting.id} />
                    ))) : 
                    Array.from({length: 3},(_, index)=><MeetingCardSkeleton/>)}
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
                    "absolute flex justify-center items-center w-8 h-8 right-14 border-2 text-xs top-3 rounded-md"
                  }
                  style={
                    customHeaderCount === 1 ? { visibility: "hidden" } : null
                  }
                  onClick={decreaseMonth}
                >
                  {<AiOutlineLeft />}
                </button>

                <span className=" text-2xl text-foreground font-semibold text-left w-full pl-6">
                  {monthDate.toLocaleString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <button
                  aria-label="Next Month"
                  className={
                    "absolute flex justify-center items-center w-8 h-8 right-3 border-2 text-xs top-3 rounded-md"
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
        <div className="notifications card bg-surface p-3 border border-border rounded-xl flex-col flex h-[50vh]">
           <div className="flex justify-between items-center">
              <MeetingFilter durationFilters filters={notifFilters} selectedFilter={notifFilterValue} isFilter={false} onFilterSelection={handleNotiFilterSelect}/>
            <span
              className="underline whitespace-nowrap cursor-pointer text-primary text-sm"
              onClick={() => {
                if (notifFilterValue === "chats") {
                  navigate("/home/chat");
                } else if (notifFilterValue === "notif") {
                  navigate("/home/notifications");
                }
              }}
            >
              View all
            </span>
            </div>
          <div className="flex flex-col overflow-scroll mt-2 grow-1 gap-3 chat__wrapper">
            {notifFilterValue === "notif"
              ? demoData.notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className="flex flex-col break-words bg-hover-bg border-l-4 border-l-secondary bg-surface p-2 border-border border rounded-md">
                    <h1 className="text-foreground text-sm font-normal">
                      {notif.title}
                    </h1>
                    <span className="text-xs tracking-[.18px] pb-1.5 text-placeholder font-extralight">
                      {notif.message}
                    </span>
                    <p className=" text-xs text-primary font-medium">
                      {formatDateTime(notif.createdAt)}
                    </p>
                  </div>
                ))
              : notifFilterValue === "chats"
                ? demoData.chats.map((chat) => (
                    <div key={chat.isToday} className="flex items-start bg-surface p-2 border-border border rounded-md">
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
                          <p className="text-foreground font-normal text-sm">
                            Brenda White
                          </p>
                          <span className="font-medium text-xs">12:00</span>
                        </div>
                        <span className="text-subtle text-xs text__content_dash">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Similique ipsa repellat suscipit optio ex,
                          voluptates quos nihil sunt consequuntur voluptate?
                        </span>
                      </div>
                    </div>
                  ))
                : ""}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
