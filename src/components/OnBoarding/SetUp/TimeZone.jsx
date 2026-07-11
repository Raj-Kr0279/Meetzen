import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { TIME_ZONES } from "../../../utils/timeZones";
import InputField from "../../ui/InputField";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../../features/user/userSlice";

const TimeZone = ({ next, prev }) => {
  const [selectedTimezone, setSelectedTimezone] = useState("");
 const {timezone} = useSelector(state => state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  return (
    <InputField
      label=""
      name="timezone"
      type="select"
      value={timezone}
      className=""
      onChange={(e)=> dispatch(editUser({field: "timezone", value: e.target.value}))}
      selectWrapperClasses="select-wrapper mobile:w-72 sm:w-96 md:w-[40rem] mx-auto"
      options={TIME_ZONES}
    />
  );
};

export default TimeZone;
