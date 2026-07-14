import React from "react";
import LeftColumn from "../LeftColumn";
import RightColumn from "../RightColumn";
import { AiOutlinePlus } from "react-icons/ai";
import { Navigate, useNavigate } from "react-router-dom";
import OnboardingHeader from "../OnboardingHeader";
import { useDispatch, useSelector } from "react-redux";
import { useGetCompaniesListQuery } from "../../../features/company/companyApi";
import { setSelectedCompany } from "../../../features/company/companySlice";
import Button from "../../ui/Button";

const SwitchCompany = () => {
  const {
    data: companies,
    error,
    isSuccess,
    isLoading,
    refetch,
  } = useGetCompaniesListQuery(undefined, { refetchOnMountOrArgChange: true });
  const dispatch = useDispatch();
  const { selectedCompany } = useSelector((state) => state.company);
  const navigate = useNavigate();
  const handleCompanySelect = (company) => {};
  const handleSelectCompany = (company) => {
    dispatch(setSelectedCompany(company));
  };
  return (
    <>
      <OnboardingHeader
        heading="Switch Company"
        subHeading="Select a company"
      />

      <div className="border border-transparent rounded-2xl h-60">
        <div className="overflow-auto mb-5 border-border border rounded-lg h-full">
          {isLoading ? (
           Array.from({length:4}, (_, index)=> <div className="w-full flex items-center gap-4 px-6 py-3 border-b border-border animate-pulse">
              {/* Avatar */}
              <div className="w-8 h-8 rounded-full bg-gray-200 shrink-0"></div>

              {/* Text */}
              <div className="flex flex-col gap-2 flex-1">
                <div className="h-4 w-32 rounded bg-gray-200"></div>
                <div className="h-3 w-48 rounded bg-gray-200"></div>
              </div>
            </div>)
          ) : (
            companies?.map((company) => (
              <button
                onClick={() => handleSelectCompany(company)}
                key={company?.companyId}
                className={`${company?.companyId === selectedCompany?.companyId ? "bg-primary text-white" : "hover:bg-surface-hover"} w-full flex border-b cursor-pointer  border-border px-6 py-3 gap-4 items-center bg-hover-bg transition-colors`}
              >
                <div
                  className={`${company?.companyId === selectedCompany?.companyId ? "bg-warning" : "bg-primary text-white"} w-8 h-8 flex justify-center items-center rounded-full `}
                >
                  <span>{company.name[0]}</span>
                </div>
                <div className="flex gap-1 flex-col items-start">
                  <p
                    className={`${company?.companyId === selectedCompany?.companyId ? "" : "text-foreground"}  font-medium leading-none text-sm`}
                  >
                    {company?.name}
                  </p>
                  <span
                    className={`${company?.companyId === selectedCompany?.companyId ? "" : "text-subtle"}  font-normal text-xs`}
                  >
                    {company?.email}
                  </span>
                </div>
              </button>
            ))
          )}
        </div>
        <Button
          variant="primary"
          classNames="w-full"
          label="Go to Login"
          isLoading={isLoading}
          disabled={isLoading || !selectedCompany}
          onClick={() => navigate("/login")}
        />
      </div>
    </>
  );
};

export default SwitchCompany;
