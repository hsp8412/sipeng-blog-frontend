import React from "react";
import { Pagination } from "react-bootstrap";
import _ from "lodash";
import { toast } from "react-toastify";

const MyPagination = ({ currentPage, itemsCount, pageSize, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  const handlePrev = () => {
    if (currentPage === 1) {
      toast("Already on the first page.");
      return;
    }
    onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage === pagesCount) {
      toast("Already on the last page.");
      return;
    }
    onPageChange(currentPage + 1);
  };

  return (
    <div className="d-flex justify-content-center mt-2">
      <Pagination>
        <Pagination.Prev onClick={handlePrev} />
        {pages.map((page) => (
          <Pagination.Item
            key={page}
            active={page === currentPage}
            onClick={() => onPageChange(page)}
          >
            {page}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={handleNext} />
      </Pagination>
    </div>
  );
};

export default MyPagination;
