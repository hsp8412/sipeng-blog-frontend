import React from "react";
import { Pagination } from "react-bootstrap";
import _ from "lodash";

const MyPagination = ({ currentPage, itemsCount, pageSize, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  // if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <div>
      <Pagination>
        {pages.map((page) => (
          <Pagination.Item
            key={page}
            active={page === currentPage}
            onClick={() => onPageChange(page)}
          >
            {page}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default MyPagination;
