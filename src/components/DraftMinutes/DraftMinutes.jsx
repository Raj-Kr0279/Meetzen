import React, { useState } from "react";
import { AiOutlineEdit, AiOutlineEye, AiOutlineSearch } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import SubmitPopup from "./SubmitPopup";
import PageHeading from "../PageHeading";
import { demoData } from "../../demoData/demoData";
import { formatDateTime } from "../../utils/dateFormatter";
const DraftMinutes = () => {
  const [submitDraftModal, setSubmitDraftModal] = useState(false);
  const [isSaveDraft, setSaveDraft] = useState(false);

  const navigate = useNavigate();
  return (
    <>
      {submitDraftModal && (
        <SubmitPopup
          modal={submitDraftModal}
          setModal={setSubmitDraftModal}
          isSaveDraft={isSaveDraft}
          setSaveDraft={setSaveDraft}
        />
      )}
      <PageHeading label="Draft Minutes" />
      <div className="w-full px-10 flex flex-col ">
        {/* filters and search section  */}
        <div className=" bg-hover-bg px-4 py-2  flex justify-between rounded-md mb-4 items-center">
          <h1 className="text-dark font-semibold text-large">
            All Final Minutes
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
          {demoData.draftMinutes.map((draft)=>
          <div key={draft.id} className="flex justify-between p-4 border-b">
      <div>
        <p className=" text-pargraph text-theme-color leading-none font-normal">
          {draft.committee}
        </p>
        <h1 className="text-dark leading-none pt-1 font-semibold text-large">
          {draft.documentTitle}
        </h1>
        <p className="text-theme-color font-medium pt-1.5">Document Name</p>
        <p className="text-paragraph font-medium text-light">
          Date{" "}
          <span className="text-theme-color text-mediumCaption font-semibold pl-1">
            {formatDateTime(draft.createdAt)}
          </span>
        </p>
        <button className="py-2 mt-4 px-6 text-paragraph font-medium text-success border border-success rounded-[4px]">
          {draft.status}
        </button>
      </div>
      <div className="flex flex-col items-end">
        <div className="flex items-center justify-end gap-4">
          <button
            className="py-1.5 mt-4 px-6 text-paragraph font-medium text-theme-color border border-theme-color rounded-[4px]"
            onClick={() => {
              setSaveDraft(true);
              setSubmitDraftModal(true);
            }}
          >
            Save
          </button>
          <button
            className="text-white mt-4 bg-theme-color text-paragraph font-semibold rounded-[4px] py-1.5 px-6"
            onClick={() => setSubmitDraftModal(true)}
          >
            Submit
          </button>
        </div>
        <span
          className="flex items-center justify-end gap-1 text-theme-color font-medium mt-4 underline"
          onClick={() => navigate(`/home/edit-draft-document/${draft.id}`)}
        >
          <AiOutlineEdit />
          Edit Document
        </span>
      </div>
    </div>
           ) }
        </div>
      </div>
    </>
  );
};

export default DraftMinutes;
