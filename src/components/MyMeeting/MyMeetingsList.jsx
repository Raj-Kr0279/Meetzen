import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ViewMapModal from "./ViewMapModal";
import PageHeading from "../PageHeading";
import MeetingCard from "../ui/MeetingCard";
import FilterTabs from "../ui/FilterTabs";
import MeetingFilterForm from "../ui/MeetingFilterForm";
import { useGetMeetingsListQuery } from "../../features/meeting/meetingApi";
import MeetingCardSkeleton from "../ui/MeetingCardSkeleton";
import {
  filterMeetings,
  MEETING_STATUS_FILTERS,
} from "../../features/meeting/selectors";

const MyMeetingsList = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [year, setYear] = useState("all");
  const [committee, setCommittee] = useState("all");
  const [mapModal, setMapModal] = useState(false);

  const handleFilterSelection = (filter) => {
    setSelectedFilter(filter);
  };
  const { data: meetings, isLoading } = useGetMeetingsListQuery();
  const filteredMeetings = meetings
    ? filterMeetings(meetings, {
        status: selectedFilter,
        year,
        committee,
      })
    : [];

  return (
    <>
      {/* top navigation  */}
      {mapModal && <ViewMapModal setModal={setMapModal} />}
      <PageHeading label="All Meetings" />

      <div className="w-full md:pe-10 flex flex-col">
        {/* filters and search section  */}
        <div className="flex flex-col lg:flex-row lg:justify-between rounded-md lg:items-center lg:w-full">
          <FilterTabs
            options={MEETING_STATUS_FILTERS}
            selectedValue={selectedFilter}
            onSelect={handleFilterSelection}
          />
          <MeetingFilterForm
            year={year}
            onYearChange={setYear}
            committee={committee}
            onCommitteeChange={setCommittee}
          />
        </div>

        {/* meeting cards  */}
        <div className=" w-full overflow-scroll place-content-baseline h-200 mt-2 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,_minmax(26.563rem,_1fr))] gap-2 place-items-center">
          {isLoading
            ? Array.from({ length: 6 }, (_, index) => (
                <MeetingCardSkeleton key={index} />
              ))
            : filteredMeetings.map((meeting) => (
                <MeetingCard key={meeting._id} meeting={meeting} />
              ))}
        </div>
      </div>
    </>
  );
};

export default MyMeetingsList;
