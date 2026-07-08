import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineShareAlt } from "react-icons/ai";
import { BsFillTriangleFill, BsPlusLg, BsTrash } from "react-icons/bs";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import MyDocuments from "./MyDocuments";
import CompanyDocuments from "./CompanyDocuments";
import PageHeading from "../PageHeading";

const Resources = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("my_docs");
  const handleFilterSelection = (filter) => {
    setSelectedFilter(filter);
  };
  return (
    <div>
      <PageHeading label="Resources" />

      <div className="w-full md:pe-10 flex flex-col">
        {/* filters and search section  */}

        <div className=" bg-hover-bg px-4 py-2  flex justify-between rounded-md mb-4 items-center">
          <div className="flex highlight_switcher justify-between items-center">
            <div className="font-semibold flex items-center border-border text-base px-0 overflow-hidden border rounded-md h-10 place-items-center">
              <div className="font-semibold whitespace-nowrap flex items-center border-border text-base px-0 overflow-hidden border rounded-md h-10 place-items-center">
                <span
                  className={`w-full flex items-center px-4 justify-center h-full border-r ${
                    selectedFilter === "my_docs"
                      ? "bg-meetFilterBlueLight text-primary"
                      : "bg-white text-foreground"
                  }`}
                  onClick={() => handleFilterSelection("my_docs")}
                >
                  My Documents
                </span>
                <span
                  className={`w-full flex items-center justify-center h-full px-4 border-r ${
                    selectedFilter === "company_docs"
                      ? "bg-meetFilterBlueLight text-primary"
                      : "bg-white text-foreground"
                  }`}
                  onClick={() => handleFilterSelection("company_docs")}
                >
                  Company Documents
                </span>
              </div>
            </div>
          </div>
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

        {selectedFilter === "my_docs" ? (
          <MyDocuments />
        ) : selectedFilter === "company_docs" ? (
          <CompanyDocuments />
        ) : null}
      </div>
    </div>
  );
};

export default Resources;
