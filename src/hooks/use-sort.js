import { useState } from "react";

const useSort = (data, config) => {
  const [sortOrder, setSetOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  let sortedData = [...data];

  const setSortColumn = (label) => {
    if (sortOrder === null) {
      setSetOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSetOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSetOrder(null);
      setSortBy(null);
    }
  };

  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => sortBy === column.label);

    sortedData = [...data].sort((a, b) => {
      let valueA = sortValue(a);
      let valueB = sortValue(b);

      let reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return {
    sortOrder,
    sortBy,
    sortedData,
    setSortColumn,
  };
};

export default useSort;