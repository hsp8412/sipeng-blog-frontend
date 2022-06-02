import React from "react";
import _ from "lodash";
import { Row } from "react-bootstrap";

const PostFilter = ({ setActiveFilter, activeFilter, tags }) => {
  const display = _.chunk(tags, 2);
  console.log(display);
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
                    setActiveFilter(tag);
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          ))}
          {/*{tags.map((tag) => (*/}
          {/*  <button*/}
          {/*    className={`filter-button mx-2 ${*/}
          {/*      activeFilter === tag ? "filter-active" : ""*/}
          {/*    }`}*/}
          {/*    onClick={() => {*/}
          {/*      setActiveFilter(tag);*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    {tag}*/}
          {/*  </button>*/}
          {/*))}*/}
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
