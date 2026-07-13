import React, { useState } from "react";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { RiMapPin2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const MeetingCard = ({ meeting }) => {
  const [mapModal, setMapModal] = useState(false);
  const peopleThumbnailsList = Array.from({ length: 4 }, (_, index) => (
    <img
      key={index}
      src={`https://randomuser.me/api/portraits/${
        index % 2 === 0 ? "men" : "women"
      }/${index % 100}.jpg`}
      alt=""
      className="w-10 h-10 rounded-full object-cover"
    />
  ));
  const navigate = useNavigate();
  return (
    <div
      key={meeting._id}
      className={`inner__card w-full px-4 p-6 rounded-xl border border-border`}
      onClick={() => navigate(`/home/meeting-details/${meeting._id}`)}
    >
      <div className="flex justify-between items-center">
        <p className="text-sm font-semibold text-primary tracking-[.04rem] uppercase leading-[1.1]">
          {meeting.meetingType}
        </p>
        <span
          className={`${
            meeting.status === "recent" ? "bg-error-soft" : "bg-info-soft"
          } font-medium text-xs py-1.25 px-3.5 rounded-xl`}
        >
          {meeting.status === "recent" ? "Recents" : "Upcoming"}
        </span>
      </div>
      <h3 className="text-foreground text-base font-medium pb-2">
        {meeting.committeeName}
      </h3>
      <div className="flex text-foreground pb-2 gap-4 text-xs font-medium leading-snug">
        <div className="flex items-center gap-1">
          <AiOutlineCalendar className="text-primary" />
          <span>
            {new Date(meeting.startAt).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <AiOutlineClockCircle className="text-primary" />
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
      <div className="flex items-center text-xs pb-2 text-foreground font-medium">
        <RiMapPin2Line className="text-primary mr-1" />
        <span className="mr-2">{meeting.location.label}</span>
        <span
          className="text-primary underline text-xs cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setMapModal(true);
          }}
        >
          view on map
        </span>
      </div>
      <div className="flex-col mt-2 md:mt-0 flex md:flex-row md:items-center gap-1 md:gap-5 pt-1">
        <div className="flex items-center text-xs font-normal gap-1 text-muted">
          <FiUsers className="text-primary" />
          <span>
            Members Accepted ({meeting.membersAccepted}/{meeting.membersTotal})
          </span>
        </div>
        <div className="users_preview_wrp flex">
          {peopleThumbnailsList}
          {peopleThumbnailsList.length > 4 && (
            <div className="bg-primary text-xs flex rounded-full border-primary border w-10 h-10 -ml-2.5 text-inverse justify-center items-center font-medium">
              <span className="text-foreground">{`+${peopleThumbnailsList.length - 4}`}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MeetingCard;
