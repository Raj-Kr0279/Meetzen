import React from "react";

const OnboardingHeader = ({ heading, subHeading }) => {
  return (
    <div className="mb-8 font-bold">
      {!(heading === "") && (
        <h1 className="text-meetzen-primary text-2xl">{heading}</h1>
      )}
      {!(subHeading === "") && (
        <p className="text-meetzen-textSecondary text-xs font-light">
          {subHeading}
        </p>
      )}
    </div>
  );
};

export default OnboardingHeader;
