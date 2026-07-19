import React from "react";
import { FiEdit, FiFile } from "react-icons/fi";
import { MdOutlineMessage } from "react-icons/md";
import dash from "../../assets/Icon placeholder.svg";

const ACTIONABLE_ITEMS = [
  {
    title: "Draft Minutes",
    count: "--",
    bg: "bg-warning/50",
    icon: (
      <FiEdit className="h-12 w-12 rounded-full bg-warning p-3 text-white" />
    ),
  },
  {
    title: "Board Evaluation",
    count: "--",
    bg: "bg-success/50",
    icon: (
      <MdOutlineMessage className="h-12 w-12 rounded-full bg-success p-3 text-white" />
    ),
  },
  {
    title: "Resolution By Circulation",
    count: "--",
    bg: "bg-accent/50",
    icon: <img src={dash} alt="" className="h-12 w-12" />,
  },
  {
    title: "Final Minutes",
    count: "--",
    bg: "bg-primary/50",
    icon: (
      <FiFile className="h-12 w-12 rounded-full bg-primary p-3 text-white" />
    ),
  },
];

const ActionablesSummary = () => {
  return (
    <div className="card my-6 w-full md:my-0 md:p-4">
      <h2 className="pb-4 text-heading font-semibold text-primary">
        My Actionables
      </h2>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {ACTIONABLE_ITEMS.map((item) => (
          <div
            key={item.title}
            className={`flex min-h-[170px] text-inverse flex-col items-center rounded-xl ${item.bg} p-5 text-center transition-transform duration-200 hover:-translate-y-1`}
          >
            <div className="flex h-12 w-12 items-center justify-center">
              {item.icon}
            </div>

            <p className="mt-3 flex-1 text-smallCaption font-medium tracking-wide ">
              {item.title}
            </p>

            <h3 className="mt-3 text-heading font-bold">
              {item.count}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActionablesSummary;