import React from "react";
import InputField from "./InputField";

const MeetingFilter = ({
  selectedFilter,
  onFilterSelection,
  year,
  onYearChange,
  committee,
  onCommitteeChange,
  isFilter,
  filters,
  durationFilters
}) => {
  const yearOptions = [
    { value: "all", label: "All" },
    { value: "2023", label: "2023" },
  ];


  const committeeOptions = [
    { value: "all", label: "All" },
    { value: "audit", label: "Audit" },
    { value: "finance", label: "Finance" },
    { value: "hr", label: "HR" },
    { value: "risk_management", label: "Risk Management" },
  ];

  return (
    <div className=" flex justify-between rounded-md items-center w-full">
     {durationFilters && <div className="">
        <div className="font-normal rounded-full p-1 bg-surface flex items-center text-sm overflow-hidden border border-border whitespace-nowrap h-12 place-items-center">
          {filters?.map((filter) => 
            <p key={filter.value}
              className={`w-full flex items-center px-4 justify-center h-full rounded-full ${
                selectedFilter === filter.value
                  ? "bg-primary text-white"
                  : "text-primary"
              } w-full flex items-center justify-center h-full px-4`}
              onClick={() => onFilterSelection(filter.value)}
            >
              {filter.label}
            </p>
          )}
        </div>
      </div>}

      {isFilter && (
        <div className="grid grid-cols-2 items-center gap-3">
          <InputField
            type="select"
            label="Filter Year:"
            name="year"
            options={yearOptions}
            value={year}
            className=""
            onChange={(e) => onYearChange(e.target.value)}
          />

          <InputField
            type="select"
            label="Filter Committee:"
            name="committee"
            options={committeeOptions}
            value={committee}
            onChange={(e) => onCommitteeChange(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default MeetingFilter;
