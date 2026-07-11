import React from 'react'
import InputField from './InputField'

const MeetingFilter = ({
  selectedFilter,
  onFilterSelection,
  year,
  onYearChange,
  committee,
  onCommitteeChange,
  isFilter
}) => {
  const yearOptions = [
    { value: 'all', label: 'All' },
    { value: '2023', label: '2023' },
  ]

  const committeeOptions = [
    { value: 'all', label: 'All' },
    { value: 'audit', label: 'Audit' },
    { value: 'finance', label: 'Finance' },
    { value: 'hr', label: 'HR' },
    { value: 'risk_management', label: 'Risk Management' },
  ]

  return (
    <div className=" flex justify-between rounded-md mb-4 items-center">
      <div className="flex highlight_switcher justify-between items-center">
        <div className="font-normal flex items-center text-sm px-0 overflow-hidden border border-border rounded-md whitespace-nowrap h-12 place-items-center">
          <p
            className={`w-full flex items-center px-4 justify-center h-full  ${
              selectedFilter === 'all'
                ? 'bg-selected'
                : 'text-foreground bg-white'
            } w-full flex items-center justify-center h-full px-4`}
            onClick={() => onFilterSelection('all')}
          >
            All
          </p>
          <p
            className={`w-full flex items-center justify-center h-full px-4 ${
              selectedFilter === 'upcoming'
                ? 'bg-selected'
                : 'text-foreground bg-white'
            } w-full flex items-center justify-center h-full px-4`}
            onClick={() => onFilterSelection('upcoming')}
          >
            Upcoming
          </p>
          <p
            className={`w-full flex items-center justify-center h-full px-4 ${
              selectedFilter === 'recent'
                ? 'bg-selected'
                : 'text-foreground bg-white'
            } w-full flex items-center justify-center h-full px-4`}
            onClick={() => onFilterSelection('recent')}
          >
            Recent
          </p>
        </div>
      </div>

      {isFilter && <div className="grid grid-cols-2 items-center gap-3">
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
      </div>}
    </div>
  )
}

export default MeetingFilter
