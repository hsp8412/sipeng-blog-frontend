import React, { Component } from "react";
import _ from "lodash";
import dayjs from "dayjs";

const TableBody = ({ data, columns }) => {
  console.log(data);
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);
    else if (!column.date) return _.get(item, column.path);
    else {
      let data = _.get(item, column.path);
      return dayjs(data).format("YYYY-MM-DD HH:mm:ss");
    }
  };

  const createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };

  if (!data[0].username) {
  }

  return (
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
          {columns.map((column) => (
            <td key={createKey(item, column)}>{renderCell(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
