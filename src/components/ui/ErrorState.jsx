import React from "react";
import Button from "./Button";

const ErrorState = ({
  title = "Something went wrong",
  message = "We could not load this content right now.",
  onRetry,
  className = "",
}) => {
  return (
    <div
      className={`flex min-h-40 items-center justify-center rounded-md border border-error/20 bg-error-bg px-4 text-center ${className}`}
    >
      <div className="max-w-md">
        <h3 className="text-heading-md text-error">{title}</h3>
        <p className="mt-2 text-body-sm text-muted">{message}</p>
        {onRetry ? (
          <div className="mt-4 flex justify-center">
            <Button label="Try again" variant="outline" onClick={onRetry} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ErrorState;
