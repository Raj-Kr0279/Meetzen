import React, { useState } from "react";
import { languages } from "../../../utils/timeZones";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../../features/user/userSlice";

const SelectLanguage = ({ next, prev }) => {
  const [selected, setSelected] = useState("english");
  const { language } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 max-w-7xl w-full mx-auto place-items-center gap-x-6 gap-y-4 mt-4 mb-16">
      {languages.map(({ value, label, native }) => {
        const isSelected = language === value;
        const cardClass = isSelected
          ? "bg-primary text-inverse"
          : "border-border border text-foreground";

        return (
          <label
            key={value}
            className={`lang__cards rounded-xl w-full xl:w-[85%] p-6 flex flex-col justify-center items-center aspect-20/9 font-bold text-heading cursor-pointer transition-colors ${cardClass}`}
          >
            <input
              type="radio"
              name="language"
              value={value}
              checked={isSelected}
              onChange={(e) =>
                dispatch(editUser({ field: "language", value: e.target.value }))
              }
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
