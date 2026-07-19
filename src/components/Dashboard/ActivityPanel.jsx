import React from "react";
import FilterTabs from "../ui/FilterTabs";

const ActivityPanel = ({
  selectedFilter,
  onFilterSelection,
  onViewAll,
  filters,
  emptyMessage,
}) => {
  return (
    <div className="notifications card bg-surface p-3 border border-border rounded-xl flex-col flex h-[50vh]">
      <div className="flex justify-between items-center">
        <FilterTabs
          options={filters}
          selectedValue={selectedFilter}
          onSelect={onFilterSelection}
        />
        <span
          className="underline whitespace-nowrap cursor-pointer text-primary text-sm"
          onClick={onViewAll}
        >
          View all
        </span>
      </div>
      <div className="flex flex-col overflow-scroll mt-2 grow-1 gap-3 chat__wrapper">
        <div className="flex h-full items-center justify-center rounded-md border border-dashed border-border bg-hover-bg px-4 text-center text-sm text-subtle">
          {emptyMessage}
        </div>
      </div>
    </div>
  );
};

export default ActivityPanel;
