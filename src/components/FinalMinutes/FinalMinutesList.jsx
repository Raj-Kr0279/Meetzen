import React from "react";
import { AiOutlineEye, AiOutlineSearch } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import PageHeading from "../PageHeading";
import { demoData } from "../../demoData/demoData";
import { formatDateTime } from "../../utils/dateFormatter";

const FinalMinutesList = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <PageHeading label="Final Minutes" />
      <div className="w-full px-10 flex flex-col ">
        {/* filters and search section  */}
        <div className=" bg-hover-bg px-4 py-2  flex justify-between rounded-md mt-6 mb-4 items-center">
          <h1 className="text-dark font-semibold text-large">
            All Final Minutes
          </h1>
          <div className="flex items-center gap-3">
            <label
              htmlFor="year"
              className="text-placeholder text-paragraph font-normal"
            >
              Filter Year:{" "}
            </label>
            <select
              className="py-2.5 px-2.5 bg-white text-dark text-paragraph w-[19vw] rounded-sm border border-borderInput"
              name="year"
              id="year"
            >
              <option value="all">All</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
            <label
              htmlFor="year"
              className="text-placeholder text-paragraph font-normal"
            >
              Filter Committee:{" "}
            </label>
            <select
              className="py-2.5 px-2.5 bg-white text-dark text-paragraph w-[19vw] rounded-sm border border-borderInput"
              name="committee"
              id="committee"
            >
              <option value="all">All</option>
              <option value="board_meetig">Board Meeting</option>
              <option value="audit">Audit</option>
              <option value="src">SRC</option>
            </select>
          </div>
        </div>

        <div className="h-[70dvh] mt-4 w-full border-borderInput border rounded-md overflow-y-scroll">
          {demoData.finalMinutes.map((final)=>
             <div
      key={final.id}
      className="flex hover:bg-hover-bg justify-between items-center p-4 border-b"
    >
      <div>
        <p className=" text-pargraph text-theme-color leading-none font-normal">
         {final.committee}
        </p>
        <h1 className="text-dark leading-none pt-2 pb-1.5  font-semibold text-large">
          {final.documentName}
        </h1>
        <p className="text-paragraph font-medium text-light">
          Date & Time:{" "}
          <span className="text-theme-color tracking-wide text-mediumCaption font-semibold pl-1">
            {formatDateTime(final.dateTime)}
          </span>
        </p>
      </div>
      <div className="flex items-end">
        <div className="flex items-center justify-end gap-4">
          <button onClick={()=>navigate(`/home/final-minute-details/${final.id}`)} className="flex items-center justify-end gap-1 text-theme-color font-medium underline cursor-pointer">
            <AiOutlineEye />
            View Document
          </button>
          <button
            className="text-white bg-meetzen-primary text-paragraph font-medium rounded-[4px] py-2 px-3"
            onClick={() => navigate("/compare-documents")}
          >
            Compare with Draft Minutes
          </button>
        </div>
      </div>
    </div>)}
        </div>
      </div>
    </>
  );
};

export default FinalMinutesList;
