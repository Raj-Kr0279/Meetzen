import React from "react";

const Button = ({ variant, label, onClick, classNames }) => {
    console.log(classNames, "clalfjladjflajsd")
 return variant === "primary" && (
    <button
      onClick={onClick}
      className={`bg-meetzen-primary hover:bg-meetzen-primary/50 text-white font-semibold  px-5 py-2.5  transition-colors ${classNames}`}
    >
      {label}
    </button>
  );

  variant === "outline" && (
    <button
      onClick={onClick}
      className={`border border-meetzen-primary text-meetzen-textPrimary hover:bg-meetzen-primary hover:text-meetzen-textPrimary font-semibold font-poppins px-5 py-2.5 rounded-lg transition-colors bg-transparent ${classNames}`}
    >
      {label}
    </button>
  );
  variant === "tertiary" && (
    <button
      onClick={onClick}
      className={`text-[#7C3AED] hover:underline font-poppins px-5 py-2.5 rounded-lg transition-colors ${classNames}`}
    >
      {label}
    </button>
  );
};

export default Button;
