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
import CompanyListSkeleton from "../../ui/CompanyListSkeleton";
import EmptyState from "../../ui/EmptyState";
import ErrorState from "../../ui/ErrorState";

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
          {error ? (
            <ErrorState
              title="Companies unavailable"
              message="We could not load your companies right now."
              onRetry={refetch}
              className="min-h-full border-0 rounded-none bg-surface"
            />
          ) : isLoading ? (
            <CompanyListSkeleton />
          ) : companies?.length ? (
            companies.map((company) => (
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
                    className={`${company?.companyId === selectedCompany?.companyId ? "" : "text-primary"}  font-medium leading-none text-sm`}
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
          ) : (
            <EmptyState
              title="No companies available"
              message="Once companies are assigned to your account, they will appear here."
              className="min-h-full border-0 rounded-none bg-surface"
            />
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
