import React from "react";

const OnboardingHeader = ({ heading, subHeading }) => {
  return (
    <div className="mb-8 font-bold">
      {!(heading === "") && (
        <h1 className="text-primary font-display text-display-lg">{heading}</h1>
      )}
      {!(subHeading === "") && (
        <p className="text-muted text-body-sm">
          {subHeading}
        </p>
      )}
    </div>
  );
};

export default OnboardingHeader;
