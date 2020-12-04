import React from "react";

const CityItem = ({ city: { name, countryName, population } }) => {
  return (
    <div  style={{boxShadow: "0px 0px 2px -1px black", padding: "0.5rem", margin: "0.5rem"}}>
      <h3>{name}, <i className="grey">{countryName}</i></h3>
      <p>Polulation: {population}</p>
    </div>
  );
};

export default CityItem;
