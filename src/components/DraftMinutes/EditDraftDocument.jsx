import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { lazy, Suspense } from "react";
const ReactQuill = lazy(() => import("react-quill"));
import "react-quill/dist/quill.snow.css";
import PageHeading from "../PageHeading";
import Button from "../ui/Button";

const EditDraftDocument = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <PageHeading label="Draft Minutes" />
      <div className="h-[60vh] flex flex-col">
        <div className="flex bg-hover-bg py-4 justify-between shadow-meetModal rounded-md mb-4 items-start">
          <div className="">
            <h1 className="text-display-md font-display pb-1.5">
              132nd Meeting of Board Committee
            </h1>
            <p className="text-primary text-lg font-semibold">Document Name</p>
            <p className="text-base font-medium text-light">
              Date & Time:{" "}
              <span className="text-primary text-lg font-semibold pl-1">
                20/06/23 07:20 PM
              </span>
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <Button variant="outline" label="Save" />
            <Button
              variant="primary"
              label="Submit"
              onClick={() => navigate("/home/draft-minutes")}
            />
          </div>
        </div>

        <Suspense fallback={<div>Loading editor...</div>}>
          <ReactQuill
            className="grow border-none overflow-y-auto"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </Suspense>
      </div>
    </>
  );
};

export default EditDraftDocument;
