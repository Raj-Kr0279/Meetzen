import React, { useState } from "react";

const languages = [
  { value: "english", label: "English" },
  { value: "hindi", label: "Hindi", native: "हिन्दी" },
  { value: "marathi", label: "Marathi", native: "मराठी" },
  { value: "kannada", label: "Kannada", native: "ಕನ್ನಡ" },
  { value: "malayalam", label: "Malayalam", native: "മലയാളം" },
  { value: "bengali", label: "Bengali", native: "বাংলা" },
];

const SelectLanguage = ({ next, prev }) => {
  const [selected, setSelected] = useState("english");

  return (
    <div className="grid grid-cols-3 max-w-7xl w-full mx-auto place-items-center gap-x-6 gap-y-4 mt-4 mb-16">
      {languages.map(({ value, label, native }) => {
        const isSelected = selected === value;
        const cardClass = isSelected
          ? "bg-primary text-inverse"
          : "bg-hover-bg text-foreground";

        return (
          <label
            key={value}
            className={`lang__cards rounded-xl w-full xl:w-[85%] p-6 flex flex-col justify-center items-center aspect-20/9 font-bold text-heading cursor-pointer ${cardClass}`}
          >
            <input
              type="radio"
              name="language"
              value={value}
              checked={isSelected}
              onChange={(e) => setSelected(e.target.value)}
              className="hidden"
            />

            <h1>{label}</h1>

            {native && (
              <p
                className={`font-medium text-mediumSubheading ${
                  isSelected ? "text-inverse" : "text-subtle"
                }`}
              >
                ({native})
              </p>
            )}
          </label>
        );
      })}
    </div>
  );
};

export default SelectLanguage;