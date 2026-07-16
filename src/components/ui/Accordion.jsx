import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

function AccordionItem({  title,
  icon,
  isOpen,
  onToggle,
  children, }) {
  return (
     <div className="border border-gray-200 rounded-lg mb-5 overflow-hidden bg-white">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-5"
      >
        <div className="flex items-center gap-2">
          {icon}
          <h2 className="text-primary text-2xl font-semibold">{title}</h2>
        </div>

        <FiChevronDown
          className={`text-2xl transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-5">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-2xl mx-auto">
      {items?.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={activeIndex === index}
          onToggle={() => toggleAccordion(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}