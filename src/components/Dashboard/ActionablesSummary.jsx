import React from "react";
import { FiEdit, FiFile } from "react-icons/fi";
import { MdOutlineMessage } from "react-icons/md";
import dash from "../../assets/Icon placeholder.svg";

const ACTIONABLE_COUNTS = {
  draftMinutes: "--",
  boardEvaluations: "--",
  circularResolutions: "--",
  finalMinutes: "--",
};

const ActionablesSummary = () => {
  return (
    <div className="w-full md:p-4 my-6 md:my-0 card">
      <h1 className="text-primary text-heading font-semibold pb-2">
        My Actionable
      </h1>
      <div className="grid-cols-2 md:grid-cols-4 grid gap-2">
        <div className="flex flex-col items-center text-center px-2 py-4 rounded-xl bg-actionableLightOrange">
          <FiEdit className="text-heading text-white w-[52px] h-[52px] rounded-full p-2 bg-warning" />
          <span className="text-primary text-smallCaption tracking-[1px] pt-2 font-medium pb-2">
            Draft Minutes
          </span>
          <h1 className="text-primary text-heading font-bold mt-auto">
            {ACTIONABLE_COUNTS.draftMinutes}
          </h1>
        </div>
        <div className="flex flex-col items-center text-center px-2 py-4 rounded-xl bg-actionableLightGreen">
          <MdOutlineMessage className="text-heading text-white w-[52px] h-[52px] rounded-full p-2 bg-success" />
          <span className="text-primary text-smallCaption tracking-[1px] pt-2 font-medium pb-2">
            Board Evaluation
          </span>
          <h1 className="text-primary text-heading font-bold mt-auto">
            {ACTIONABLE_COUNTS.boardEvaluations}
          </h1>
        </div>
        <div className="flex flex-col items-center text-center px-2 py-4 rounded-xl bg-actionableLightPurple">
          <img src={dash} alt="" />
          <span className="text-primary text-smallCaption tracking-[1px] pt-2 font-medium pb-2">
            Resolution By Circulation
          </span>
          <h1 className="text-primary text-heading font-bold mt-auto">
            {ACTIONABLE_COUNTS.circularResolutions}
          </h1>
        </div>
        <div className="flex flex-col items-center text-center px-2 py-4 rounded-xl bg-actionableLightYellow">
          <FiFile className="text-heading text-white w-[52px] h-[52px] rounded-full p-2 bg-primary" />
          <span className="text-primary text-smallCaption tracking-[1px] pt-2 font-medium pb-2">
            Final Minutes
          </span>
          <h1 className="text-primary text-heading font-bold mt-auto">
            {ACTIONABLE_COUNTS.finalMinutes}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ActionablesSummary;
