import React from "react";
import MeetingCard from "../ui/MeetingCard";
import MeetingCardSkeleton from "../ui/MeetingCardSkeleton";
import FilterTabs from "../ui/FilterTabs";

const MeetingHighlights = ({
  meetings,
  selectedFilter,
  onFilterSelection,
  onViewAll,
  filters,
}) => {
  return (
    <div className="highlight__wrp md:min-h-120 overflow-hidden card">
      <div className="flex justify-between items-center">
        <FilterTabs
          options={filters}
          selectedValue={selectedFilter}
          onSelect={onFilterSelection}
        />
        <span
          onClick={onViewAll}
          className="underline whitespace-nowrap cursor-pointer text-primary text-sm text-accent"
        >
          View all
        </span>
      </div>
      <div className="highlights__content_wrp max-h-[395px] overflow-y-scroll flex flex-col gap-2 mt-3">
        {meetings
          ? meetings.map((meeting) => (
              <MeetingCard key={meeting.id} meeting={meeting} id={meeting.id} />
            ))
          : Array.from({ length: 3 }, (_, index) => (
              <MeetingCardSkeleton key={index} />
            ))}
      </div>
    </div>
  );
};

export default MeetingHighlights;
