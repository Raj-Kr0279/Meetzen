import React from "react";

const Button = ({ variant, label, onClick, classNames }) => {
  console.log(classNames, "clalfjladjflajsd");
  const baseClasses = `font-normal transition px-5 py-2.5 font-poppins rounded-xs`;
  const primaryClasses = "bg-primary hover:bg-primary-hover text-white";
  const outlineClasses =
    "border border-primary text-primary hover:bg-primary hover:text-inverse transition-colors bg-transparent";
  const tertiaryClasses = "text-[#7C3AED] hover:underline transition-colors";
  return <button
    onClick={onClick}
    className={`${baseClasses} ${variant === "primary" ? primaryClasses : variant === "outline" ? outlineClasses : variant === "tertiary" ? tertiaryClasses : ""}  ${classNames}`}
  >
    {label}
  </button>;
};

export default Button;
