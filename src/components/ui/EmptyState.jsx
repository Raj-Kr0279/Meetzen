import React from "react";

const EmptyState = ({ title, message, className = "" }) => {
  return (
    <div
      className={`flex min-h-40 items-center justify-center rounded-md border border-dashed border-border bg-hover px-4 text-center ${className}`}
    >
      <div className="max-w-md">
        <h3 className="text-heading-md text-primary">{title}</h3>
        {message ? <p className="mt-2 text-body-sm text-subtle">{message}</p> : null}
      </div>
    </div>
  );
};

export default EmptyState;
