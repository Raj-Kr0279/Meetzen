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

const BoardEvaluationList = () => {
  const navigate = useNavigate();
  return (
    <>
      <PageHeading label="Evaluation & Service" />
      <div className="w-full md:pe-10 flex flex-col">

        <div className="bg-hover-bg py-2 rounded-md md:items-end grid lg:grid-cols-[8fr_4fr]">
          <MeetingFilter isFilter heading="All Evaluations"/>
        </div>
        <div className="h-[70dvh] flex flex-col mt-2 w-full gap-2 overflow-y-scroll">
          {demoData?.boardEvaluations?.map((evals) => 
            <div key={evals.id} className="flex justify-between hover:border-secondary border border-border rounded-md bg-surface p-4">
              <div>
                <p className=" text-body-sm text-secondary">
                  {evals.committee}
                </p>
                <h1 className="pt-1 pb-2 font-display text-display-md">
                  {evals.documentName}
                </h1>
                <p className="text-body-md text-subtle">
                  Evaluation for:{" "}
                  <span className="text-primary text-body-lg">
                    {evals.evaluationFor}
                  </span>
                </p>
                <p className="text-body-md text-subtle">
                  Due Date:{" "}
                  <span className="text-primary text-body-sm pl-1">
                    {evals.dueDate}
                  </span>
                </p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex gap-1 items-center">
                  <p className="text-base font-medium text-light">
                    Questions Attempted: {evals.questionsAttempted}/{evals.questionsTotal}
                  </p>
                  <p className="text-base font-medium text-light">
                    Marks Obtained: {evals.marksObtained}/{evals.marksTotal}
                  </p>
                </div>
                <div className="flex items-center pt-1 gap-4">
                  <span className="flex items-center text-action font-medium p-0.5 bg-actionBg">
                    <BsClock className="mr-2" />
                    {evals.pendingDaysLeft}
                  </span>
                  {/* <button
                    className="py-2 px-6 text-base font-medium bg-primary text-white rounded-[4px]"
                    onClick={() =>
                      navigate(`/home/board-evaluation-details/${evals.id}`)
                    }
                  >
                    Submit Feedback
                  </button> */}
                  <Button variant="primary" label="Submit Feedback" classNames="py-1 text-body-sm" onClick={() =>
                      navigate(`/home/board-evaluation-details/${evals.id}`)
                    }/>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BoardEvaluationList;
