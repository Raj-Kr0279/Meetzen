import React, { useState } from "react";
import { AiOutlineMinus, AiOutlineSearch } from "react-icons/ai";
import { FaFile } from "react-icons/fa";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { BiBarChartAlt2 } from "react-icons/bi";
import { BsTriangleFill } from "react-icons/bs";
import strategy from "../../assets/strategy_FILL0_wght300_GRAD0_opsz24.svg";
import Accordion from "../ui/Accordion";
import FeedbackQuestion from "../AboutCompany/FeedBackQuestions";
function Icon({ id, open }) {
  return (
    <BsTriangleFill
      className={`${
        id === open ? "" : "rotate-180"
      } h-3 w-3 transition-transform`}
    />
  );
}
const BoardEvaluationDetails = () => {
const serverData = [
  {
    id: 1,
    title: "Leadership",
    icon: "leadership",
    feedback: [
      {
        id: 11,
        question:
          "Neque, faucibus fames at et rhoncus pellentesque. Scelerisque commodo nunc tellus."
      },
      {
        id: 12,
        question:
          "Tristique ac tincidunt velit netus ipsum rutrum id ut."
      }
    ]
  },
  {
    id: 2,
    title: "Strategy Formulation",
    icon: "strategy",
    feedback: [
      {
        id: 21,
        question:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
      {
        id: 22,
        question:
          "Inventore perspiciatis quidem consequuntur laudantium."
      }
    ]
  },
  {
    id: 3,
    title: "Execution",
    icon: "execution",
    feedback: [
      {
        id: 31,
        question:
          "How effectively does the team execute strategic initiatives?"
      }
    ]
  }
];

  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]; // Define all the steps
  const handleSliderChange = (event) => {
    const stepValue = parseFloat(event.target.value); // Parse as a float
    setCurrentStep(stepValue);
  };

  const stepsBarWidth = ((currentStep - 1) / 4) * 100 + "%";
   const [open, setOpen] = useState(1);

  const [responses, setResponses] = useState({});

  const handleOpen = (id) => {
    setOpen(open === id ? 0 : id);
  };

  const updateRating = (questionId, rating) => {
    setResponses((prev) => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        rating,
      },
    }));
  };

  const updateComment = (questionId, comment) => {
    setResponses((prev) => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        comment,
      },
    }));
  };

  const handleSubmit = () => {

    /*
    {
      11:{
        rating:4.5,
        comment:"Good leader"
      },
      12:{
        rating:3,
        comment:"Need improvement"
      }
    }
    */
  };
  return (
    <>
      <div className="w-full md:pe-10 flex flex-col">
        {/* filters and search section  */}

        <div className="flex justify-between rounded-md mt-6 mb-4 items-center">
          <div className="">
            <p className=" text-pargraph text-primary leading-none font-normal pb-2">
              Director Evaluation | Board of Directors
            </p>
            <h1 className="text-primary font-semibold text-2xl">
              All Evaluations
            </h1>
            <p className="text-base font-medium text-light">
              Evaluation for:{" "}
              <span className="text-primary text-lg font-semibold pl-1">
                MR. RAMCHARAN DAS
              </span>
            </p>
            <p className="text-base font-medium text-light">
              Financial Year:{" "}
              <span className="text-primary text-lg font-semibold pl-1">
                2023
              </span>
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <FaFile className="text-error" />
            <span>Form II</span>
          </div>
        </div>
        <div>
          <div className="space-y-4">
            {serverData.map((section) => (
              <Accordion
                key={section.id}
                title={section.title}
                icon={<BiBarChartAlt2 className="text-primary text-2xl" />}
                isOpen={open === section.id}
                onToggle={() => handleOpen(section.id)}
              >
                {section.feedback.map((item, index) => (
                  <FeedbackQuestion
                    key={item.id}
                    index={index}
                    question={item.question}
                    value={responses[item.id]?.rating ?? 0}
                    comment={responses[item.id]?.comment ?? ""}
                    onRatingChange={(value) => updateRating(item.id, value)}
                    onCommentChange={(value) => updateComment(item.id, value)}
                  />
                ))}
              </Accordion>
            ))}

            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-6 py-3 rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
        <button
          className="py-4 mt-8 px-6 text-base flex mx-auto self-start font-medium bg-primary text-white rounded-[4px]"
          onClick={() => navigate(`/home/board-evaluation-list`)}
        >
          Submit Feedback
        </button>
      </div>
      <Tooltip
        opacity={1}
        style={{
          backgroundColor: "#F5F8FE",
          color: "#49556D",
          width: "",
          boxShadow: "0px 6px 7px 0px #e5e5e5",
        }}
        anchorSelect=".my-anchor-element"
        className="tooltip bg-white text-black text-smallCaption"
        place="top-center"
      >
        {currentStep}
      </Tooltip>
    </>
  );
};

export default BoardEvaluationDetails;
