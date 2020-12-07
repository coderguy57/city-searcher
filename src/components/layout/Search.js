import React, { useEffect, useState } from "react";
import icon from "./search.svg";
import { useHistory } from "react-router-dom";
import { useSearchState } from "../../context/SearchProvider";

// Renders the search field and search button
const Search = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const history = useHistory();

  const { searchState } = useSearchState();
  // Updates the searchfield and the url
  //  Gets called when the searchState changed
  //  i.e. an external search has been made
  useEffect(() => {
    console.log("HEJ");
    const { city, country } = searchState;
    setCity(city);
    setCountry(country);
    history.push(`/search/city=${city}&country=${country}`);
  }, [history, searchState]);

  // Updates the url
  const onSubmit = async (e) => {
    e.preventDefault();
    history.push(`/search/city=${city}&country=${country}`);
  };

  const countryChange = (e) => setCountry(e.target.value);
  const cityChange = (e) => setCity(e.target.value);

  return (
    <form className="search" onSubmit={onSubmit}>
      <input
        size="6"
        type="text"
        name="country"
        placeholder="Country"
        value={country}
        onChange={countryChange}
      />
      <div className="search-field">
        <input
          size="8"
          type="text"
          name="city"
          placeholder="City"
          value={city}
          onChange={cityChange}
        />
        <button type="submit" className="bg-light">
          <img src={icon} className="search-icon" alt="Search" />
        </button>
      </div>
    </form>
  );
};

export default Search;
