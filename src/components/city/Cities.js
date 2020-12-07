import React, { useEffect, useState } from "react";
import Loading from "../layout/Loading";
import CityItem from "./CityItem";
import CityInfoItem from "./CityInfoItem";
import { useParams } from "react-router-dom";
import searchApi from "./SearchApi";

const Cities = () => {
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [country, setCountry] = useState("");
  const [alert, setAlert] = useState("");

  const { search } = useParams();
  useEffect(() => {
    // Fetches the data from api.geonames.org
    const fetchData = async () => {
      setLoading(true);

      // Gets the search parameters from the url
      const params = new URLSearchParams(search);
      const cityName = params.get("city");
      const countryName = params.get("country");
      setCountry(countryName);

      const {alert, cities} = await searchApi(cityName, countryName);

      setAlert(alert);
      setCities(cities);
      setLoading(false);
    };
    
    fetchData();
  }, [search]);

  // Renders a loading icon if data is loading
  if (loading) return <Loading />;

  // Renders a warning message if search failed
  if (alert !== "") return <h2>{alert}</h2>;

  // Draws a different cityItem depending on if a country is given
  return (
    <div>
      {cities.map((city) =>
        country === "" ? (
          <CityInfoItem key={city.geonameId} city={city} />
        ) : (
          <CityItem key={city.geonameId} city={city} />
        )
      )}
    </div>
  );
};

export default Cities;
