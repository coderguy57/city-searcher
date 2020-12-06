import React, { useState } from "react";
import icon from "./search.svg";
import { useHistory } from "react-router-dom";

// Renders the search field and search button
const Search = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    // Handle empty input later
    history.push(`/search/city=${city}&country=${country}`);
    setCountry("");
    setCity("");
  };

  const countryChange = (e) => setCountry(e.target.value);
  const cityChange = (e) => setCity(e.target.value);

  return (
    <div className="search">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={country}
          onChange={countryChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={city}
          onChange={cityChange}
        />
        <button type="submit" className="bg-light">
          <img src={icon} alt="Search" />
        </button>
      </form>
    </div>
  );
};

export default Search;
