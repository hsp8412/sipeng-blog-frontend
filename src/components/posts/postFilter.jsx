import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

const PostFilter = ({ setActiveFilter, activeFilter }) => {
  return (
    <div className="card d-flex flex-column mt-3">
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-center">
          <button
            className={`filter-button mx-2 ${
              activeFilter === "react" ? "filter-active" : ""
            }`}
            onClick={() => {
              setActiveFilter("react");
            }}
          >
            React
          </button>
          <button
            className={`filter-button mx-2 ${
              activeFilter === "test" ? "filter-active" : ""
            }`}
            onClick={() => {
              setActiveFilter("test");
            }}
          >
            Test
          </button>
        </div>
        <div>
          <button
            className="filter-clear-button mt-4"
            onClick={() => setActiveFilter(null)}
          >
            Clear the filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostFilter;
