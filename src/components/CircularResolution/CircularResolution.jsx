import React, { useState } from "react";
import { AiOutlineEye, AiOutlineSearch } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import PageHeading from "../PageHeading";

const CircularResolution = () => {
  // one vote selection per resolution row (0..7)
  const [voteValue, setVoteValue] = useState(Array(8).fill(""));
  const navigate = useNavigate();

  const handleRadioChange = (value, index) => {
    setVoteValue((prev) =>
      prev.map((rowValue, i) => {
        if (i !== index) return rowValue;
        return rowValue === value ? "" : value;
      })
    );
  };
  const notification = Array.from({ length: 8 }, (_, index) => (
    <div
      key={index}
      className="flex justify-between p-4 border-b"
      onClick={() => navigate("/resolution-document")}
    >
      <div>
        <p className=" text-pargraph text-theme-color leading-none font-normal">
          AUDIT COMMITTEE
        </p>
        <h1 className="text-dark leading-none pt-1.5 font-semibold text-large">
          Stakeholders Relationship Committee
        </h1>
        <p className="text-paragraph pt-1.5 font-medium text-light">
          CR/Audit/001/Fy2023-2024
        </p>
        <p className="text-paragraph font-medium text-light">
          Date{" "}
          <span className="text-theme-color text-mediumCaption font-semibold pl-1">
            03/04/2023
          </span>
        </p>
        <div className="flex items-center pt-3 gap-4">
          <label
            onClick={(e) => e.stopPropagation()}
            htmlFor="assent"
            className={`relative py-2 px-6 cursor-pointer text-paragraph font-medium border border-success rounded-[4px] ${
              voteValue === "assent" ? "bg-success text-white" : "text-success"
            }`}
          >
            <input
              checked={voteValue[index] === "assent"}
              onChange={() => handleRadioChange("assent", index)}
              type="radio"
              className="absolute w-full h-full inset-0 opacity-0"
              name="vote"
              id="assent"
            />
            Assent
          </label>

          <label
            onClick={(e) => e.stopPropagation()}
            htmlFor="dissent"
            className={`relative py-2 px-6 cursor-pointer text-paragraph font-medium border border-error rounded-[4px] ${
              voteValue[index] === "dissent" ? "bg-error text-white" : "text-error"
            }`}
          >
            <input
              checked={voteValue[index] === "dissent"}
              onChange={() => handleRadioChange("dissent", index)}
              type="radio"
              className="absolute w-full h-full inset-0 opacity-0"
              name="vote"
              id={`dissent-${index}`}
            />
            Dissent
          </label>

          <label
            onClick={(e) => e.stopPropagation()}
            htmlFor="abstain"
            className={`relative py-2 px-6 cursor-pointer text-paragraph font-medium border  border-action rounded-[4px] ${
              voteValue[index] === "abstain" ? "bg-action text-white" : "text-action"
            }`}
          >
            <input
              checked={voteValue[index] === "abstain"}
              onChange={() => handleRadioChange("abstain", index)}
              type="radio"
              className="absolute w-full h-full inset-0 opacity-0"
              name="vote"
              id={`abstain-${index}`}
            />
            Abstain
          </label>

          <label
            onClick={(e) => e.stopPropagation()}
            htmlFor="req_meeting"
            className={`relative py-2 px-6 cursor-pointer text-paragraph font-medium  border border-purpleButton rounded-[4px] ${
              voteValue[index] === "req_meeting"
                ? "bg-purpleButton text-white"
                : "text-purpleButton"
            }`}
          >
            <input
              checked={voteValue[index] === "req_meeting"}
              onChange={() => handleRadioChange("req_meeting", index)}
              type="radio"
              className="absolute w-full h-full inset-0 opacity-0"
              name="vote"
              id={`req_meeting-${index}`}
            />
            Require Meeting
          </label>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <span className="flex items-center text-action font-medium p-0.5 gap-1 bg-actionBg">
          <BsClock />
          Pending 15 days left
        </span>
        <span className="flex items-center justify-end gap-1 text-theme-color font-medium mt-4 underline">
          <AiOutlineEye />
          View Document
        </span>
        {voteValue[index] === "" ? (
          <button
            className="text-white mt-4 bg-theme-color text-paragraph font-medium rounded-[4px] py-2 px-6"
            onClick={(e) => {
              e.stopPropagation();
              navigate("/view-results");
            }}
          >
            View Results
          </button>
        ) : (
          <button
            className="text-white mt-4 bg-theme-color text-paragraph font-medium rounded-[4px] py-2 px-6"
            onClick={(e) => {
              e.stopPropagation();
              alert("submitted");
            }}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  ));

  console.table(voteValue);

  return (
    <>
      <PageHeading label="Resolution By Circulation" />
      <div className="w-full px-10 flex flex-col ">
        {/* filters and search section  */}
        <div className=" bg-hover-bg px-4 py-2  flex justify-between rounded-md mb-4 items-center">
          <h1 className="text-dark font-semibold text-large">
            All Resolutions By Circulation
          </h1>
          <div className="flex items-center gap-3">
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
          {notification}
        </div>
      </div>
    </>
  );
};

export default CircularResolution;
