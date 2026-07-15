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
      className="w-8 h-8 rounded-full object-cover"
    />
  ));
  const navigate = useNavigate();
  return (
    <div
      key={meeting._id}
      className={`inner__card bg-surface w-full grid grid-cols-[60px_1fr] rounded-xl border border-border hover:border-secondary cursor-pointer relative`}
      onClick={() => navigate(`/home/meeting-details/${meeting._id}`)}
    >
      <div className="bg-primary text-center flex flex-col justify-center rounded-s-xl text-inverse">
        <p className=" text-subtle">
          {new Date(meeting.startAt).toLocaleDateString("en-GB", {
            month: "long",
          }).slice(0,3)}
        </p>
        <p className="text-4xl text-surface">
          {new Date(meeting.startAt).toLocaleDateString("en-GB", {
            day: "2-digit",
          })}
        </p>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <p className="text-mono-sm text-secondary uppercase">
            {meeting.meetingType}
          </p>
          <span
            className={`${
              meeting.status === "recent" ? "bg-error-soft" : "bg-info-soft"
            } text-caption text-primary rounded-full p-1 px-3 absolute top-2 right-2`}
          >
            {meeting.status === "recent" ? "Recents" : "Upcoming"}
          </span>
        </div>
        <h3 className="font-display text-display-sm pb-3 w-full">
          {meeting.committeeName}
        </h3>
        <div className="flex lg:flex-row flex-col lg:gap-4 pb-2">
          {/* <div className="flex items-center gap-1">
            <AiOutlineCalendar className="text-primary" />
            <span>
              {new Date(meeting.startAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </span>
          </div> */}
          
          <div className="flex items-center gap-1">
            <AiOutlineClockCircle className="text-mono-sm text-subtle" />
            <span className="text-mono-sm text-subtle">
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
           <div className="flex items-center text-mono-sm text-subtle">
          <RiMapPin2Line className="mr-1" />
          <span className="mr-2">{meeting.location.label}</span>
          <span
            className="text-primary underline text-caption cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setMapModal(true);
            }}
          >
            view on map
          </span>
        </div>
        </div>
       
        <div className="flex-col mt-2 md:mt-0 flex md:flex-row md:items-end gap-1 md:gap-5 pt-1">
          <div className="users_preview_wrp flex">
            {peopleThumbnailsList}
            {peopleThumbnailsList.length > 4 && (
              <div className="bg-primary text-xs flex rounded-full border-primary border w-8 h-8 -ml-2.5 text-inverse justify-center items-center font-medium">
                <span className="text-primary">{`+${peopleThumbnailsList.length - 4}`}</span>
              </div>
            )}
          </div>
          <div className="text-caption flex items-center text-muted">
            <FiUsers className="" />
            <span className="ps-1">
              Members Accepted (<span className="text-primary">{meeting.membersAccepted}/{meeting.membersTotal}</span>
              )
            </span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MeetingCard;
