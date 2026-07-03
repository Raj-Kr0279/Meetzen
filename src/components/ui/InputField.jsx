import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const InputField = ({
  type,
  placeholder,
  label,
  name,
  error,
  rows,
  onChange,
  value,
  showPassword,
  setShowPassword,
  handleViewPassToggle,
  passStrength
}) => {
  
const base = `w-full border border-border rounded-md bg-surface px-4 py-3 text-foreground text-sm placeholder-placeholder focus:outline-none focus:ring-2 transition-all disabled:cursor-not-allowed disabled:opacity-60 focus:ring-primary/20 focus:border-primary`;


  // Apply error styles directly in `base` to keep class handling simple.
  const inputBase = error
    ? `${base} border-error/60 focus:border-error focus:ring-error/20`
    : base;


  return (
    <div className="">
      <label className="font-normal pb-1 flex items-center text-foreground text-sm">
        {label}
      </label>

      {type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          className={`${base} resize-none`}
        />
      ) : type === "password" ? (
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={base}
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2">
            {showPassword ? (
              <AiOutlineEyeInvisible
                onClick={handleViewPassToggle}
                className="cursor-pointer text-meetzen-textPrimary"
              />
            ) : (
              <AiOutlineEye
                onClick={handleViewPassToggle}
                className="cursor-pointer text-meetzen-textPrimary"
              />
            )}
          </span>
        </div>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={base}
        />
      )}
      {error && <p className="text-red-400 text-xs">{error}</p>}
    </div>
  );
};

export default InputField;
