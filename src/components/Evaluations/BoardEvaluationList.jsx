import React from "react";
import { AiOutlineEye, AiOutlineSearch } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import PageHeading from "../PageHeading";
import { demoData } from "../../demoData/demoData";
import { formatDateTime } from "../../utils/dateFormatter";

const BoardEvaluationList = () => {
  const navigate = useNavigate();
  return (
    <>
      <PageHeading label="Evaluation & Service" />
      <div className="w-full px-10 max-h-[calc(100dvh-40px)] flex flex-col h-screen overflow-y-scroll">
        {/* filters and search section  */}

        <div className=" bg-hover-bg px-4 py-4  flex justify-between rounded-md mb-4 items-center">
          <h1 className="text-foreground font-semibold text-2xl">
            All Evaluations
          </h1>
          <div className="flex items-center gap-3">
            <label
              htmlFor="year"
              className="text-placeholder text-base font-normal"
            >
              Filter Year:{" "}
            </label>
            <select
              className="py-2.5 px-2.5 bg-white text-foreground text-base w-[19vw] rounded-sm border border-border"
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
              className="text-placeholder text-base font-normal"
            >
              Filter Committee:{" "}
            </label>
            <select
              className="py-2.5 px-2.5 bg-white text-foreground text-base w-[19vw] rounded-sm border border-border"
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
        <div className="h-[70dvh] mt-4 w-full border-border border rounded-md overflow-y-scroll">
          {demoData?.boardEvaluations?.map((evals) => 
            <div key={evals.id} className="flex justify-between p-4 border-b">
              <div>
                <p className=" text-pargraph text-primary leading-none font-normal pb-2">
                  {evals.committee}
                </p>
                <h1 className="text-foreground leading-none pt-1 pb-2 font-semibold text-2xl">
                  {evals.documentName}
                </h1>
                <p className="text-base font-medium text-light">
                  Evaluation for:{" "}
                  <span className="text-primary text-lg font-semibold pl-1">
                    {evals.evaluationFor}
                  </span>
                </p>
                <p className="text-base font-medium text-light">
                  Due Date:{" "}
                  <span className="text-primary text-lg font-semibold pl-1">
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
                  <button
                    className="py-2 px-6 text-base font-medium bg-primary text-white rounded-[4px]"
                    onClick={() =>
                      navigate(`/home/board-evaluation-details/${evals.id}`)
                    }
                  >
                    Submit Feedback
                  </button>
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
