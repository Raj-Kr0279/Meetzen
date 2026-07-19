import React, { useState } from "react";
import { AiOutlineMinus, AiOutlineSearch } from "react-icons/ai";
import { FaArrowDown, FaCaretDown, FaFile } from "react-icons/fa";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { BiBarChartAlt2, BiCaretDown } from "react-icons/bi";
import { BsCaretDown, BsTriangleFill } from "react-icons/bs";
import Button from "../ui/Button";
import strategy from "../../assets/strategy_FILL0_wght300_GRAD0_opsz24.svg";
import InputField from "../ui/InputField";
import Accordion from "../ui/Accordion";
function Icon({ id, open }) {
  return (
    <BsTriangleFill
      className={`${id === open ? "" : "rotate-180"} h-3 w-3 transition-transform`}
    />
  );
}
const SubmitFeedback = () => {
  const [openedItem, setOpenedItem] = useState(null);
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]; // Define all the steps
  const handleSliderChange = (event) => {
    const stepValue = parseFloat(event.target.value); // Parse as a float
    setCurrentStep(stepValue);
  };
  const handleOpenAccordion = (index) => {
    openedItem === index ? setOpenedItem(null) : setOpenedItem(index);
  };

  const stepsBarWidth = ((currentStep - 1) / 4) * 100 + "%";
  return (
    <>
      <div className="w-full flex flex-col h-full">
        {/* filters and search section  */}

        <div className="py-4 flex flex-col lg:flex-row justify-between rounded-md mb-4 lg:items-center">
          <div className="">
            <h1 className="text-primary text-display-md font-display pb-1.5">
              132nd Meeting of Board Committee
            </h1>
            <p className="text-primary text-body-lg font-medium">
              Document Name
            </p>
            <p className="text-body-sm text-subtle">
              Date & Time:{" "}
              <span className="text-body-md text-primary font-medium pl-1">
                20/06/23 07:20 PM
              </span>
            </p>
          </div>
          <Button variant="primary" label="Submit" classNames="self-start" />
        </div>
        <div className="flex mb-6 flex-col gap-2">
          {Array.from({ length: 5 }, (_, index) => (
            <div
              className="border border-border hover:border-accent bg-surface rounded-md"
              key={index}
            >
              {/* Header */}
              <button
                type="button"
                onClick={() => handleOpenAccordion(index)}
                className="w-full flex justify-between items-center p-4 text-left"
              >
                <div className="flex items-center gap-1">
                  <BiBarChartAlt2 className="text-primary text-2xl" />
                  <h1 className="font-display text-display-md">Leadership</h1>
                </div>

                <BsCaretDown
                  className={`h-3 w-3 transition-transform duration-300 ${
                    openedItem === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Animated Body */}
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  openedItem === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="px-4 overflow-hidden">
                  <p className="text-primary text-body-sm text-start max-w-prose text-balance">
                    1.
                    <span>
                      {" "}
                      Neque, faucibus fames at et rhoncus pellentesque.
                      Scelerisque commodo nunc tellus, elit semper tempus.
                      Tristique ac tincidunt velit netus ipsum rutrum id ut.
                    </span>
                  </p>

                  <div className="slider-container pt-4 lg:w-6/12 flex justify-start gap-4">
                    <div className="inline-block w-full items-center gap-3">
                      <input
                        type="range"
                        min="0"
                        max="5"
                        step="0.5"
                        value={currentStep}
                        onChange={handleSliderChange}
                        className="slider w-full my-anchor-element"
                      />

                      <div className="steps-bar flex w-full items-center -mt-2 gap-1">
                        {steps.map((step) => (
                          <div
                            key={step}
                            className="step-label w-full flex flex-col items-center justify-center"
                          >
                            <AiOutlineMinus className="rotate-90 text-small" />
                            {step}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="step-value text-primary font-semibold w-10 h-10 flex items-center justify-center aspect-square rounded-sm border border-primary">
                      {currentStep}
                    </div>
                  </div>

                  <InputField
                    type="textarea"
                    name="feedback"
                    rows={2}
                    placeholder="Add your comments..."
                    className=""
                    label=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
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

export default SubmitFeedback;
