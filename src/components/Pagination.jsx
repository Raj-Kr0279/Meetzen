import React, { useState } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

export function Pagination() {
  const [active, setActive] = useState(1);

  const getItemProps = (index) => ({
    className: `cursor-pointer p-2 font-medium text-smallCaption ${active === index ? "text-primary" : "text-foreground"}`,
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === 5) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };

  return (
    <div className="flex justify-between w-full items-center gap-4">
      {/* <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}
      >
        <BsArrowLeft strokeWidth={2} className="w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        <span className = "" {...getItemProps(1)}>1</span>
        <span className = "" {...getItemProps(2)}>2</span>
        <span className = "" {...getItemProps(3)}>3</span>
        <span className = "" {...getItemProps(4)}>4</span>
        <span className = "" {...getItemProps(5)}>5</span>
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === 5}
      >
        Next
        <BsArrowRight strokeWidth={2} className="w-4" />
      </Button> */}
    </div>
  );
}
