import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import {
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import prof from "../../assets/profileDummy.png";
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
import MeetingFilter from "../ui/MeetingFilter";
import { useGetMeetingsListQuery } from "../../features/meeting/meetingApi";

const MyMeetingsList = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [year, setYear] = useState("all");
  const [committee, setCommittee] = useState("all");
  const [mapModal, setMapModal] = useState(false);

  const handleFilterSelection = (filter) => {
    setSelectedFilter(filter);
  };
    const meetFilters = [
    { label: "All", value: "all" },
    { label: "Upcoming", value: "upcoming" },
    { label: "Recent", value: "recent" },
  ];
 const { data: meetings, error, isLoading } = useGetMeetingsListQuery();
  const filteredMeetings = meetings?.filter((m) => {
    const matchesStatus =
      selectedFilter === "all" ? true : m.status === selectedFilter;

    const meetingYear = new Date(m.startAt).getFullYear().toString();
    const matchesYear = year === "all" ? true : meetingYear === year;

    const matchesCommittee =
      committee === "all" ? true : m.committeeCode === committee;

    return matchesStatus && matchesYear && matchesCommittee;
  });

  return (
    <>
      {/* top navigation  */}
      {mapModal && <ViewMapModal setModal={setMapModal} />}
      <PageHeading label="All Meetings" />

      <div className="w-full md:pe-10 flex flex-col">
        {/* filters and search section  */}
        <MeetingFilter
          selectedFilter={selectedFilter}
          onFilterSelection={handleFilterSelection}
          year={year}
          filters={meetFilters}
          onYearChange={setYear}
          committee={committee}
          onCommitteeChange={setCommittee}
        />

        {/* meeting cards  */}
        <div className=" w-full overflow-scroll place-content-baseline h-[50rem] grid grid-cols-1 md:grid-cols-[repeat(auto-fit,_minmax(26.563rem,_1fr))] gap-4 place-items-center">
          {filteredMeetings?.map((meeting) => (
            <MeetingCard key={meeting._id} meeting={meeting} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MyMeetingsList;
