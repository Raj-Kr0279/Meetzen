import React from "react";
import FilterTabs from "./FilterTabs";
import MeetingFilterForm from "./MeetingFilterForm";

const MeetingFilter = ({
  selectedFilter,
  onFilterSelection,
  year,
  onYearChange,
  committee,
  onCommitteeChange,
  isFilter,
  filters,
  durationFilters,
  heading
}) => {
  return (
    <>
      {heading && (
        <p className="text-primary font-display pb-4 lg:pb-0 text-display-md">
          {heading}
        </p>
      )}
      <div className=" flex flex-col lg:flex-row lg:justify-between rounded-md lg:items-center lg:w-full">
        {durationFilters && (
          <FilterTabs
            options={filters}
            selectedValue={selectedFilter}
            onSelect={onFilterSelection}
          />
        )}

        {isFilter && (
          <MeetingFilterForm
            year={year}
            onYearChange={onYearChange}
            committee={committee}
            onCommitteeChange={onCommitteeChange}
            showYear={true}
            showCommittee={true}
          />
        )}
      </div>
    </>
  );
};

export default MeetingFilter;
