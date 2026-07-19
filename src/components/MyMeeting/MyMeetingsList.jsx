import React, { useState } from "react";
import PageHeading from "../PageHeading";
import MeetingCard from "../ui/MeetingCard";
import FilterTabs from "../ui/FilterTabs";
import MeetingFilterForm from "../ui/MeetingFilterForm";
import { useGetMeetingsListQuery } from "../../features/meeting/meetingApi";
import MeetingCardSkeleton from "../ui/MeetingCardSkeleton";
import EmptyState from "../ui/EmptyState";
import ErrorState from "../ui/ErrorState";
import {
  filterMeetings,
  MEETING_STATUS_FILTERS,
} from "../../features/meeting/selectors";

const MyMeetingsList = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [year, setYear] = useState("all");
  const [committee, setCommittee] = useState("all");

  const handleFilterSelection = (filter) => {
    setSelectedFilter(filter);
  };
  const { data: meetings, error, isLoading, refetch } = useGetMeetingsListQuery();
  const filteredMeetings = meetings
    ? filterMeetings(meetings, {
        status: selectedFilter,
        year,
        committee,
      })
    : [];

  return (
    <>
      <PageHeading label="All Meetings" />

      <div className="w-full md:pe-10 flex flex-col">
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

        <div className=" w-full overflow-scroll place-content-baseline h-200 mt-2 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,_minmax(26.563rem,_1fr))] gap-2 place-items-center">
          {error ? (
            <div className="col-span-full w-full">
              <ErrorState
                title="Meetings unavailable"
                message="The meetings list could not be loaded."
                onRetry={refetch}
              />
            </div>
          ) : isLoading
            ? Array.from({ length: 6 }, (_, index) => (
                <MeetingCardSkeleton key={index} />
              ))
            : filteredMeetings.length
              ? filteredMeetings.map((meeting) => (
                <MeetingCard key={meeting._id} meeting={meeting} />
              ))
              : (
                <div className="col-span-full w-full">
                  <EmptyState
                    title="No meetings match these filters"
                    message="Change the selected status, year, or committee to broaden the results."
                  />
                </div>
              )}
        </div>
      </div>
    </>
  );
};

export default MyMeetingsList;
