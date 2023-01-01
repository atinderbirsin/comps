import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
        if (nextIndex === currentExpandedIndex) {
            return -1;
        } else {
            return nextIndex;
        }
    })
  };

  const renderedList = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    return (
      <div key={index}>
        <div
          className="flex items-center justify-between gap-1 p-3 bg-gray-50 border-b cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
        {isExpanded && (
          <div className="border-x border-t rounded p-5">{item.content}</div>
        )}
      </div>
    );
  });

  return <div>{renderedList}</div>;
}

export default Accordion;
