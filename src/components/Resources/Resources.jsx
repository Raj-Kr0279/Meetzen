import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineShareAlt } from "react-icons/ai";
import { BsFillTriangleFill, BsPlusLg, BsTrash } from "react-icons/bs";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import MyDocuments from "./MyDocuments";
import CompanyDocuments from "./CompanyDocuments";
import PageHeading from "../PageHeading";
import FilterTabs from "../ui/FilterTabs";
import MeetingFilterForm from "../ui/MeetingFilterForm";

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

      <div className=" flex flex-col">
        <div className="flex flex-col lg:flex-row lg:justify-between rounded-md lg:items-center lg:w-full">
          <FilterTabs
            options={resourceFilters}
            selectedValue={selectedFilter}
            onSelect={handleFilterSelection}
          />
          <MeetingFilterForm showYear={false} />
        </div>
        <div className="mt-4">
          {selectedFilter === "my_docs" ? (
            <MyDocuments />
          ) : selectedFilter === "company_docs" ? (
            <CompanyDocuments />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Resources;
