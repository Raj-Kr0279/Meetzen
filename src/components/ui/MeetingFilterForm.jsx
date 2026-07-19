import React from "react";
import InputField from "./InputField";

const DEFAULT_YEAR_OPTIONS = [
  { value: "all", label: "All" },
  { value: "2023", label: "2023" },
];

const DEFAULT_COMMITTEE_OPTIONS = [
  { value: "all", label: "All" },
  { value: "audit", label: "Audit" },
  { value: "finance", label: "Finance" },
  { value: "hr", label: "HR" },
  { value: "risk_management", label: "Risk Management" },
];

const MeetingFilterForm = ({
  heading,
  year = "all",
  onYearChange = () => {},
  committee = "all",
  onCommitteeChange = () => {},
  showYear = true,
  showCommittee = true,
  yearOptions = DEFAULT_YEAR_OPTIONS,
  committeeOptions = DEFAULT_COMMITTEE_OPTIONS,
}) => {
  return (
    <>
      {heading && (
        <p className="text-primary font-display pb-4 lg:pb-0 text-display-md">
          {heading}
        </p>
      )}
      <div className="grid grid-cols-2 items-center gap-3">
        {showYear && (
          <InputField
            type="select"
            label="Filter Year:"
            name="year"
            options={yearOptions}
            value={year}
            onChange={(e) => onYearChange(e.target.value)}
          />
        )}

        {showCommittee && (
          <InputField
            type="select"
            label="Filter Committee:"
            name="committee"
            options={committeeOptions}
            value={committee}
            onChange={(e) => onCommitteeChange(e.target.value)}
          />
        )}
      </div>
    </>
  );
};

export default MeetingFilterForm;
