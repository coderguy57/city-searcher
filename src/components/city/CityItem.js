import React, { useState } from "react";
import PropTypes from "prop-types";

// Only draws the population after the city has been pressed
const CityItem = ({ city: { name, population } }) => {
  const [showPopulation, setShowPopulation] = useState(false);

  const setVisable = () => {
    setShowPopulation(true);
  };

  return (
    <div className="card">
      <button onClick={setVisable}>
        <h3>{name}</h3>
      </button>
      {showPopulation && <p>Population: {population}</p>}
    </div>
  );
};

CityItem.prototype = {
  city: PropTypes.object.isRequired,
};

export default CityItem;
