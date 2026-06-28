import React, { useEffect, useMemo, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import PageHeading from "../PageHeading";
import { demoData } from "../../demoData/demoData";

const CircularResolutionList = () => {
  // Keep one selected vote per resolution row, keyed by resolution id.
  // Example: { cr_001: "ascent", cr_002: "dissent", ... }
  const [voteByResolutionId, setVoteByResolutionId] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const list = demoData?.circularResolutonLists ?? [];
    const initial = {};
    list.forEach((r) => {
      initial[r?.id] = r?.myVote ?? "";
    });
    setVoteByResolutionId(initial);
  }, []);

  // const voteOptions = useMemo(() => ["ascent", "dissent", "abstain"], []);

  const handleRadioChange = (value, id) => {
    setVoteByResolutionId((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <>
      <PageHeading label="Resolution By Circulation" />
      <div className="w-full px-10 flex flex-col ">
        {/* filters and search section  */}
        <div className=" bg-hover-bg px-4 py-2  flex justify-between rounded-md mb-4 items-center">
          <h1 className="text-dark font-semibold text-large">
            All resolutions By Circulation
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
          {demoData.circularResolutonLists.map((resolutions) => (
            <div
              key={resolutions?.id}
              className="flex justify-between p-4 border-b"
              onClick={() =>
                navigate(`/home/circular-resolution-result/${resolutions?.id}`)
              }
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
                      voteByResolutionId[resolutions?.id] === "ascent"
                        ? "bg-success text-white"
                        : "text-success"
                    }`}
                  >
                    <input
                      checked={voteByResolutionId[resolutions?.id] === "ascent"}
                      onChange={() =>
                        handleRadioChange("ascent", resolutions?.id)
                      }
                      type="radio"
                      className="absolute w-full h-full inset-0 opacity-0"
                      name={`vote-${resolutions?.id}`}
                      id={`assent-${resolutions?.id}`}
                    />
                    Assent
                  </label>

                  <label
                    onClick={(e) => e.stopPropagation()}
                    htmlFor={`dissent-${resolutions?.id}`}
                    className={`relative py-2 px-6 cursor-pointer text-paragraph font-medium border border-error rounded-[4px] ${
                      voteByResolutionId[resolutions?.id] === "dissent"
                        ? "bg-error text-white"
                        : "text-error"
                    }`}
                  >
                    <input
                      checked={
                        voteByResolutionId[resolutions?.id] === "dissent"
                      }
                      onChange={() =>
                        handleRadioChange("dissent", resolutions?.id)
                      }
                      type="radio"
                      className="absolute w-full h-full inset-0 opacity-0"
                      name="vote"
                      id={`dissent-${resolutions?.id}`}
                    />
                    Dissent
                  </label>

                  <label
                    onClick={(e) => e.stopPropagation()}
                    htmlFor={`abstain-${resolutions?.id}`}
                    className={`relative py-2 px-6 cursor-pointer text-paragraph font-medium border  border-action rounded-[4px] ${
                      voteByResolutionId[resolutions?.id] === "abstain"
                        ? "bg-action text-white"
                        : "text-action"
                    }`}
                  >
                    <input
                      checked={
                        voteByResolutionId[resolutions?.id] === "abstain"
                      }
                      onChange={() =>
                        handleRadioChange("abstain", resolutions?.id)
                      }
                      type="radio"
                      className="absolute w-full h-full inset-0 opacity-0"
                      name="vote"
                      id={`abstain-${resolutions?.id}`}
                    />
                    Abstain
                  </label>

                  <label
                    onClick={(e) => e.stopPropagation()}
                    htmlFor="req_meeting"
                    className={`relative py-2 px-6 cursor-pointer text-paragraph font-medium  border border-purpleButton rounded-[4px] ${
                      voteByResolutionId[resolutions?.id] === "req_meeting"
                        ? "bg-purpleButton text-white"
                        : "text-purpleButton"
                    }`}
                  >
                    <input
                      checked={
                        voteByResolutionId[resolutions?.id] === "req_meeting"
                      }
                      onChange={() =>
                        handleRadioChange("req_meeting", resolutions?.id)
                      }
                      type="radio"
                      className="absolute w-full h-full inset-0 opacity-0"
                      name="vote"
                      id={`req_meeting-${resolutions?.id}`}
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
                {voteByResolutionId[resolutions.id] === "" ? (
                  <button
                    className="text-white mt-4 bg-theme-color text-paragraph font-medium rounded-[4px] py-2 px-6"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(
                        `/home/circular-resolution-result/${resolutions.id}`,
                      );
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
          ))}
        </div>
      </div>
    </>
  );
};

export default CircularResolutionList;
