import React from "react";
import { AiOutlineEye, AiOutlineSearch } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import PageHeading from "../PageHeading";
import { demoData } from "../../demoData/demoData";
import { formatDateTime } from "../../utils/dateFormatter";
import Button from "../ui/Button";
import MeetingFilter from "../ui/MeetingFilter";

const FinalMinutesList = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageHeading label="Final Minutes" />
      <div className="w-full md:pe-10 flex flex-col ">
        {/* filters and search section  */}
        <div className="bg-hover-bg py-2 rounded-md md:items-end mb-4 grid lg:grid-cols-[8fr_4fr]">
          <div className="">
          <h1 className="text-display-md whitespace-nowrap">
            All Final Minutes
          </h1>
          </div>
          <MeetingFilter durationFilters={false} isFilter={true}/>
        </div>

        <div className="h-[60dvh] flex flex-col gap-2 w-full overflow-y-scroll">
          {demoData.finalMinutes.map((final) => (
            <div
              key={final.id}
              className="flex hover:bg-hover-bg rounded-md flex-col lg:flex-row bg-surface hover:border-secondary lg:justify-between lg:items-center p-4 border-border border"
            >
              <div>
                <p className="text-secondary text-body-sm">
                  {final.committee}
                </p>
                <h1 className="pt-2 pb-1.5 text-display-sm font-display">
                  {final.documentName}
                </h1>
                <p className="text-subtle text-mono-md">
                  Date & Time:{" "}
                  <span className="text-subtle pl-1">
                    {formatDateTime(final.dateTime)}
                  </span>
                </p>
              </div>
              <div className="flex items-end">
                <div className="flex lg:items-center lg:flex-row flex-col lg:justify-end lg:gap-4 gap-1 items-baseline whitespace-nowrap">
                  <p
                    onClick={() =>
                      navigate(`/home/final-minute-details/${final.id}`)
                    }
                    className="flex items-center justify-end gap-1 text-secondary text-body-sm underline cursor-pointer"
                  >
                    <AiOutlineEye />
                    View Document
                  </p>
                  <Button variant="primary" label="Compare with Draft Minutes" classNames="text-body-sm"/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FinalMinutesList;
