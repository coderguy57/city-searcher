import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../layout/Loading";
import CityItem from "./CityItem";

const Cities = ({ match }) => {
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);

  const { search } = match.params;
  useEffect(() => {
    // Fetches the data from api.geonames.org
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(
        `http://api.geonames.org/searchJSON?name_startsWith=${search}&maxRows=10&orderby=population&featureClass=P&username=weknowit`
      );
      setCities(res.data.geonames);
      setLoading(false);
    };
    console.log(cities);
    fetchData();
  }, [search]);

  // Renders a loading icon if data is loading
  if (loading) return <Loading />;

  return (
    <div>
      {cities.map((city) => (
        <CityItem key={city.geonameId} city={city} />
      ))}
    </div>
  );
};

export default Cities;
