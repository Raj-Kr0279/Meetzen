import React from "react";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { RiMapPin2Line } from "react-icons/ri";
import prof from "../../assets/profileDummy.png"

const MeetingCard = ({ meeting }) => {
  return (
    <div
      key={meeting.id}
      className={`inner__card w-full ${
        meeting.status === "recent"
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
            meeting.status === "recent"
              ? "text-meetzen-error bg-meetzen-meetRedPill"
              : "text-meetzen-success bg-meetzen-meetGreenPill"
          } font-medium text-xs py-[5px] px-3.5 rounded-xl`}
        >
          {meeting.status === "recent" ? "Recents" : "Upcoming"}
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
          <span>
            Members Accepted ({meeting.membersAccepted}/{meeting.membersTotal})
          </span>
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
  );
};

export default MeetingCard;
