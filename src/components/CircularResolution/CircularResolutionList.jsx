import React, { useEffect, useMemo, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import PageHeading from "../PageHeading";
import { demoData } from "../../demoData/demoData";
import Button from "../ui/Button";
import MeetingFilter from "../ui/MeetingFilter";

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
  const handleSubmit = () => {
    alert("submitted");
  };
  const handleViewResult = (id) => {
    navigate(`/home/circular-resolution-result/${id}`);
  };

  return (
    <>
      <PageHeading label="Resolution By Circulation" />
      <div className="w-full flex flex-col ">
        {/* filters and search section  */}
        <div className="bg-hover-bg py-2 rounded-md md:items-end grid lg:grid-cols-[8fr_4fr]">
          <MeetingFilter isFilter heading="All resolutions By Circulation" />
        </div>

        <div className="h-[65dvh] mt-2 flex flex-col gap-2 w-full overflow-y-scroll">
          {demoData.circularResolutonLists.map((resolutions) => (
            <div
              key={resolutions?.id}
              className="flex relative lg:items-end flex-wrap hover:border-secondary justify-between bg-surface border border-border rounded-md p-4"
              onClick={() =>
                navigate(`/home/circular-resolution-result/${resolutions?.id}`)
              }
            >
               <p className="absolute flex gap-2 items-center top-2 right-2 text-caption font-normal text-warning">
                  <BsClock />
                  Pending 15 days left
                </p>
              <div>
                <p className="text-body-sm text-secondary">
                  AUDIT COMMITTEE
                </p>
                <h1 className=" pt-1.5 font-display text-display-sm">
                  Stakeholders Relationship Committee
                </h1>
                <p className="text-body-sm py-1.5">
                  CR/Audit/001/Fy2023-2024
                </p>
                <p className="text-subtle text-captionLight">
                  Date:{" "}
                  <span className="text-primary text-sm font-medium pl-1">
                    03/04/2023
                  </span>
                </p>
                <div className="flex flex-wrap items-center pt-3 gap-4">
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
              <div className="flex flex-col lg:justify-between lg:items-end">
               
                <div>
                <p className="flex items-center text-sm md:justify-end gap-1 text-primary font-medium mt-4 mb-3 underline">
                  <AiOutlineEye className=""/>
                  View Document
                </p>
                <Button
                  label={
                    voteByResolutionId[resolutions.id] === ""
                      ? "View Results"
                      : "Submit"
                  }
                  onClick={
                    voteByResolutionId[resolutions.id] === ""
                      ? ()=>handleViewResult(resolutions.id)
                      : handleSubmit
                  }
                  variant="primary"
                />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CircularResolutionList;
