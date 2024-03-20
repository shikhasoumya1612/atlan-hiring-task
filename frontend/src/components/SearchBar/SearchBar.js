import React, { useState, useContext, useEffect } from "react";
import "./SearchBar.css";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ inputValue, setInputValue }) => {
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const clearSearch = () => {
    setInputValue("");
  };

  return (
    <div className="container mt-1">
      <div className="row">
        <div className="col-12">
          <div className="input-group mb-3 search-bar">
            <div className="d-flex flex-row input-group-append">
              <span className="input-group-text bg-white border-left-0 search-icon">
                <CiSearch />
              </span>
            </div>
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search..."
              aria-label="Search"
              value={inputValue}
              onChange={handleInputChange}
            />
            {inputValue !== "" && (
              <span
                className="input-group-text bg-transparent border-left-0 clear-icon"
                onClick={clearSearch}
              >
                <IoMdClose />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
