import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineShareAlt } from "react-icons/ai";
import { BsFillTriangleFill, BsPlusLg, BsTrash } from "react-icons/bs";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import MyDocuments from "./MyDocuments";
import CompanyDocuments from "./CompanyDocuments";
import PageHeading from "../PageHeading";
import MeetingFilter from "../ui/MeetingFilter";

const Resources = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("my_docs");
  const handleFilterSelection = (filter) => {
    setSelectedFilter(filter);
  };
  const resourceFilters = [
    { label: "My Documents", value: "my_docs" },
    { label: "Company Documents", value: "company_docs" },
  ];
  return (
    <div>
      <PageHeading label="Resources" />

      <div className="w-full md:pe-10 flex flex-col">
          <MeetingFilter
            filters={resourceFilters}
            isFilter={true}
            selectedFilter={selectedFilter}
            onFilterSelection={handleFilterSelection}
          />

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
