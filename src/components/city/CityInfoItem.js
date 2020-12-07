import React from "react";
import PropTypes from 'prop-types'
import { useSearchState } from "../../context/SearchProvider";

const CityInfoItem = ({ city: { name, countryName, population } }) => {  
  const { setSearch } = useSearchState();

  const doSearch = () => {
    setSearch("", countryName);
  }

  return (
    <div className="card">
      <h3>
        {name}
        {", "}
        <button onClick={doSearch} className="primary">
          <h3>{countryName}</h3>
        </button>
      </h3>
      <p>Population: {population}</p>
    </div>
  );
};

CityInfoItem.prototype = {
  city: PropTypes.object.isRequired,
}

export default CityInfoItem;
