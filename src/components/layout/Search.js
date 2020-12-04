import React, { useState } from "react";
import icon from "./search.svg";
import { useHistory } from "react-router-dom";

// Renders the search field and search button
const Search = () => {
  const [text, setText] = useState("");
  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    // Handle empty input later
    if (text !== "") {
      history.push("/cities/" + text);
      setText("");
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div className="search">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search"
          value={text}
          onChange={onChange}
        />
        <button type="submit" className="bg-grey">
          <img src={icon} alt="Search" />
        </button>
      </form>
    </div>
  );
};

export default Search;
