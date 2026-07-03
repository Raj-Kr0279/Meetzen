import React, { useState } from "react";
import { AiOutlineEdit, AiOutlineEye, AiOutlineSearch } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import SubmitPopup from "./SubmitPopup";
import PageHeading from "../PageHeading";
import { demoData } from "../../demoData/demoData";
import { formatDateTime } from "../../utils/dateFormatter";
import Button from "../ui/Button";
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
      <div className="w-full px-10 flex flex-col">
        {/* filters and search section  */}
        <div className="bg-hover-bg py-2 flex justify-between rounded-md mb-4 items-center">
          <h1 className="text-foreground font-semibold text-2xl">
            All Draft Minutes
          </h1>
          <div className="flex items-center gap-3">
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

        <div className="h-[70dvh] w-full border-border border rounded-md overflow-y-scroll">
          {demoData.draftMinutes.map((draft) => (
            <div
              key={draft.id}
              className="flex justify-between p-4 border-b border-border"
            >
              <div>
                <p className=" text-sm text-primary leading-none font-semibold">
                  {draft.committee}
                </p>
                <h1 className="text-foreground leading-none pt-1 font-normal text-xl">
                  {draft.documentTitle}
                </h1>
                {/* <p className="text-primary font-medium pt-1.5">Document Name</p> */}
                <p className="text-sm font-medium mt-2 text-foreground">
                  Date:{" "}
                  <span className="text-primary font-medium pl-1">
                    {formatDateTime(draft.createdAt)}
                  </span>
                </p>
                <p className="py-2 inline-flex mt-4 px-6 text-sm border border-border font-normal rounded-sm">
                  {draft.status}
                </p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center justify-end gap-4">
                  <Button
                    label="Save"
                    onClick={() => {
                      setSaveDraft(true);
                      setSubmitDraftModal(true);
                    }}
                    variant="outline"
                  />
                  <Button
                    label="Submit"
                    onClick={() => setSubmitDraftModal(true)}
                    variant="primary"
                  />
                </div>
                <p
                  className="flex items-center justify-end gap-1 text-primary font-normal text-sm mt-4 underline"
                  onClick={() =>
                    navigate(`/home/edit-draft-document/${draft.id}`)
                  }
                >
                  <AiOutlineEdit />
                  Edit Document
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DraftMinutes;
