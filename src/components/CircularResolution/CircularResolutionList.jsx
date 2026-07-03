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
        <div className=" bg-hover-bg py-2 flex justify-between rounded-md items-center">
          <h1 className="text-foreground font-medium text-2xl">
            All resolutions By Circulation
          </h1>
          <div className="flex items-end gap-3">
            <label
              htmlFor="year"
              className="text-foreground text-base font-normal"
            >
              Filter Committee:{" "}
            </label>
            <select
              className="py-2.5 px-2.5 bg-white text-foreground text-base w-[19vw] rounded-md border border-border"
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

        <div className="h-[70dvh] mt-2 w-full border-border border rounded-md overflow-y-scroll">
          {demoData.circularResolutonLists.map((resolutions) => (
            <div
              key={resolutions?.id}
              className="flex justify-between p-4 border-b border-b-border"
              onClick={() =>
                navigate(`/home/circular-resolution-result/${resolutions?.id}`)
              }
            >
              <div>
                <p className="text-sm text-primary leading-none font-semibold">
                  AUDIT COMMITTEE
                </p>
                <h1 className="text-foreground leading-none pt-1.5 font-medium text-xl">
                  Stakeholders Relationship Committee
                </h1>
                <p className="text-sm py-1.5 font-medium text-subtle">
                  CR/Audit/001/Fy2023-2024
                </p>
                <p className="text-sm font-medium text-foreground">
                  Date:{" "}
                  <span className="text-primary text-sm font-medium pl-1">
                    03/04/2023
                  </span>
                </p>
                <div className="flex items-center pt-3 gap-4">
                  <label
                    onClick={(e) => e.stopPropagation()}
                    htmlFor="assent"
                    className={`relative py-2 px-6 cursor-pointer text-base font-medium border border-success rounded-[4px] ${
                      voteByResolutionId[resolutions?.id] === "ascent"
                        ? "bg-success text-inverse"
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
                    className={`relative py-2 px-6 cursor-pointer text-base font-medium border border-error rounded-[4px] ${
                      voteByResolutionId[resolutions?.id] === "dissent"
                        ? "bg-error text-inverse"
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
                    className={`relative py-2 px-6 cursor-pointer text-base font-medium border  border-secondary rounded-[4px] ${
                      voteByResolutionId[resolutions?.id] === "abstain"
                        ? "bg-secondary text-inverse"
                        : "text-secondary"
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
                    className={`relative py-2 px-6 cursor-pointer text-base font-medium  border accent rounded-[4px] ${
                      voteByResolutionId[resolutions?.id] === "req_meeting"
                        ? "bg-accent text-inverse"
                        : "text-accent"
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
                <p className="flex items-center text-meetzen-action font-medium p-0.5 gap-1 bg-meetzen-actionBg">
                  <BsClock />
                  Pending 15 days left
                </p>
                <p className="flex items-center justify-end gap-1 text-primary font-medium mt-4 underline">
                  <AiOutlineEye />
                  View Document
                </p>
                {voteByResolutionId[resolutions.id] === "" ? (
                  <button
                    className="text-white mt-4 bg-primary text-base font-medium rounded-[4px] py-2 px-6"
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
                    className="text-white mt-4 bg-primary text-base font-medium rounded-[4px] py-2 px-6"
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
