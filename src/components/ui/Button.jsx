import React from "react";

const Button = ({ variant, disabled, label, isLoading, onClick, classNames }) => {
  console.log(classNames, "clalfjladjflajsd");
  const baseClasses = `font-normal transition px-5 py-3 font-poppins rounded-xs`;
  const primaryClasses = "bg-primary border border-primary hover:bg-primary-hover text-white";
  const outlineClasses =
    "border border-primary text-primary hover:bg-primary hover:text-inverse transition-colors bg-transparent";
  const tertiaryClasses = "text-[#7C3AED] hover:underline transition-colors";
  return <button
    onClick={onClick}
    disabled={disabled}
    className={`${baseClasses} ${variant === "primary" ? primaryClasses : variant === "outline" ? outlineClasses : variant === "tertiary" ? tertiaryClasses : ""}  ${classNames} flex items-center justify-center`}
  >
  {isLoading && <svg
  className="mr-2 h-5 w-5 animate-spin"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
>
  <circle
    className="opacity-25"
    cx="12"
    cy="12"
    r="10"
    stroke="currentColor"
    strokeWidth="4"
  />
  <path
    className="opacity-75"
    fill="currentColor"
    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
  />
</svg>}{label} 
  </button>;
};

export default Button;
