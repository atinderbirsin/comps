import { RxCaretSort, RxCaretUp, RxCaretDown } from "react-icons/rx";
import useSort from "../hooks/use-sort";
import Table from "./Table";

function SortableTable(props) {
  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(
    data,
    config
  );

  const updatedProps = config.map((column) => {
    if (!column.sortValue) return column;

    const icon = sortOrder === "asc" ? <RxCaretUp /> : <RxCaretDown />;

    return {
      ...column,
      header: () => (
        <th
          className="flex items-center cursor-pointer"
          onClick={() => setSortColumn(column.label)}
        >
          {sortBy === column.label ? icon : <RxCaretSort />} {column.label}
        </th>
      ),
    };
  });

  return <Table {...props} data={sortedData} config={updatedProps} />;
}

export default SortableTable;
