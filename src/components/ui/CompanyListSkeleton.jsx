import React from "react";

const CompanyListSkeleton = ({ count = 4 }) => {
  return Array.from({ length: count }, (_, index) => (
    <div
      key={index}
      className="w-full flex items-center gap-4 px-6 py-3 border-b border-border animate-pulse"
    >
      <div className="w-8 h-8 rounded-full bg-gray-200 shrink-0"></div>
      <div className="flex flex-col gap-2 flex-1">
        <div className="h-4 w-32 rounded bg-gray-200"></div>
        <div className="h-3 w-48 rounded bg-gray-200"></div>
      </div>
    </div>
  ));
};

export default CompanyListSkeleton;
