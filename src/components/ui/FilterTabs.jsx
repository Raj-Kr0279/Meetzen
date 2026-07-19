import React from "react";

const FilterTabs = ({ options = [], selectedValue, onSelect }) => {
  return (
    <div className="font-normal rounded-full p-1 bg-surface flex items-center text-sm overflow-hidden border border-border whitespace-nowrap h-12 place-items-center">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`w-full flex items-center px-4 justify-center h-full rounded-full ${
            selectedValue === option.value
              ? "bg-primary text-white"
              : "text-primary"
          }`}
          onClick={() => onSelect(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
