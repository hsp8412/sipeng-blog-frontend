import React from "react";
import _ from "lodash";

const PostFilter = ({ onFilterSelected, activeFilter, tags }) => {
  const display = _.chunk(tags, 2);
  return (
    <div className="card d-flex flex-column mt-3">
      <div className="card-body d-flex flex-column">
        <div className="d-flex flex-column justify-content-center">
          {display.map((row, index) => (
            <div className="mt-3" key={index}>
              {row.map((tag, index) => (
                <button
                  key={index}
                  className={`filter-button d-inline mx-2 ${
                    activeFilter === tag ? "filter-active" : ""
                  }`}
                  onClick={() => {
                    onFilterSelected(tag);
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          ))}
        </div>
        <div>
          <button
            className="filter-clear-button mt-4"
            onClick={() => onFilterSelected(null)}
          >
            Clear the filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostFilter;
