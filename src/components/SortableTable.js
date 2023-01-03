import { useState } from "react";
import { RxCaretSort, RxCaretUp, RxCaretDown } from "react-icons/rx";
import Table from "./Table";

function SortableTable(props) {
  const { config, data } = props;
  const [sortOrder, setSetOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  let sortedData = [...data];

  const updatedProps = config.map((column) => {
    if (!column.sortValue) return column;
    
    const icon = sortOrder === "asc" ? <RxCaretUp /> : <RxCaretDown />;

    const handleHeaderClick = (label) => {
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
      ...column,
      header: () => (
        <th
          className="flex items-center cursor-pointer"
          onClick={() => handleHeaderClick(column.label)}
        >
          {sortBy === column.label ? icon : <RxCaretSort />} {column.label}
        </th>
      ),
    };
  });

  // eslint-disable-next-line no-undef
  return <Table {...props} data={sortedData} config={updatedProps} />;
}

export default SortableTable;
