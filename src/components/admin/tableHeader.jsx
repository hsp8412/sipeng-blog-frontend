import React from "react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TableHeader = ({ columns, sortColumn, onSort }) => {
  const raiseSort = (path) => {
    const updatedSortColumn = { ...sortColumn };
    if (updatedSortColumn.path === path)
      updatedSortColumn.order =
        updatedSortColumn.order === "asc" ? "desc" : "asc";
    else {
      updatedSortColumn.path = path;
      updatedSortColumn.order = "asc";
    }
    onSort(updatedSortColumn);
  };

  const renderSortIcon = (column) => {
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc")
      return <FontAwesomeIcon icon={solid("caret-up")} />;
    return <FontAwesomeIcon icon={solid("caret-down")} />;
  };

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            className="clickable"
            key={column.path || column.key}
            onClick={() => raiseSort(column.path)}
          >
            {column.label} {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
