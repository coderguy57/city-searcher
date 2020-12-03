import React, { useState } from "react";
import PropTypes from "prop-types";
import icon from "./search.svg";

// Renders the search field and search button
const Search = (props) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search"
          value={text}
          onChange={onChange}
        />
        <button type="submit">
          <img src={icon} alt="Search" />
        </button>
      </form>
    </div>
  );
};

Search.propTypes = {};

export default Search;
