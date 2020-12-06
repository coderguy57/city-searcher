import React from "react";
import { Link } from "react-router-dom";

const CityItem = ({ city: { name, population }, country }) => {
  if (!country) return <h3 className="card">{name}</h3>;

  return (
    <div className="card">
      <h3>
        {name}
        {", "}
        <Link to={`/search/city=&country=${country}`} className="primary">
          {country}
        </Link>
      </h3>
      <p>Polulation: {population}</p>
    </div>
  );
};

export default CityItem;
