import React, { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const documentClick = (event) => {
    if(ref.current && !ref.current.contains(event.target)) setIsOpen(false);
  };

  useEffect(() => {
    document.body.addEventListener("click", documentClick, true);

    return () => {
      document.body.removeEventListener("click", documentClick);
    };
  },[]);

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(!isOpen);
  };

  const renderedOptions = options.map((option) => {
    const isSelected = option.value === value?.value;
    return (
      <React.Fragment key={option.value}>
        {isSelected || (
          <div
            className="cursor-pointer hover:bg-sky-100 rounded p-1"
            onClick={() => handleOptionClick(option)}
          >
            {option.label}
          </div>
        )}
      </React.Fragment>
    );
  });

  return (
    <div  ref={ref} className="w-48 relative">
      <Panel
        className="flex gap-1 items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value?.label || "Choose any option.."} <GoChevronDown />
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full">
          {renderedOptions}
        </Panel>
      )}
    </div>
  );
};

export default Dropdown;
