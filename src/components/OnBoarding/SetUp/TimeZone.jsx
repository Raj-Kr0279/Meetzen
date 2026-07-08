import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { TIME_ZONES } from "../../../utils/timeZones";
import InputField from "../../ui/InputField";

const TimeZone = ({ next, prev }) => {
  const [selectedTimezone, setSelectedTimezone] = useState("");
  const navigate = useNavigate();
  return (
    <InputField
      label=""
      name="timezone"
      type="select"
      className=""
      onChange={(e) => setSelectedTimezone(e.target.value)}
      selectWrapperClasses="select-wrapper mobile:w-72 sm:w-96 md:w-[40rem] mx-auto"
      options={TIME_ZONES}
    />
  );
};

export default TimeZone;
