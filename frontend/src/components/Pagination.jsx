import { useState } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const Pagination = ({ pages, page, keyword }) => {
  return (
    <div className="my-5">
      {pages > 1 && (
        <div className="join flex justify-center">
          {[...Array(pages).keys()].map((x) => {
            const isActive = x + 1 === page;
            return (
              <span key={x}>
                <Link
                  to={
                    keyword
                      ? `/search/${keyword}/page/${x + 1}`
                      : `/page/${x + 1}`
                  }
                  className={`flex items-center justify-center px-3 h-8 rounded leading-tight text-gray-500 border border-gray-300 hover:bg-gray-700 hover:text-gray-100 ${
                    isActive ? "bg-blue-500 text-white" : ""
                  }`}
                >
                  {x + 1}
                </Link>
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Pagination;
