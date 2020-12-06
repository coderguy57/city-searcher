import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../layout/Loading";
import CityItem from "./CityItem";
import { useParams } from "react-router-dom";

const Cities = ({ match }) => {
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [country, setCountry] = useState("");
  const [alert, setAlert] = useState("");

  const getCountryCode = async (country) => {
    if (country === "") return "";
    console.log(country);

    const res = await axios.get(
      `http://api.geonames.org/searchJSON?name_equals=${country}&featureCode=PCLI&username=weknowit&maxRows=1`
    );
    console.log(
      `http://api.geonames.org/searchJSON?name_equals=${country}&featureCode=PCLI&username=weknowit&maxRows=1`
    );
    if (res.data.totalResultsCount === 0) return null;
    if (res.data.totalResultsCount === undefined) return null;

    return res.data.geonames[0].countryCode;
  };

  const getCities = async (cityName, countryCode) => {
    const citySearch = cityName === "" ? "" : `name_startsWith=${cityName}&`;
    const countrySearch = countryCode === "" ? "" : `country=${countryCode}&`;

    const res = await axios.get(
      `http://api.geonames.org/searchJSON?${citySearch}${countrySearch}maxRows=10&orderby=population&featureClass=P&username=weknowit`
    );
    if (res.data.totalResultsCount === undefined) return null;
    console.log(
      `http://api.geonames.org/searchJSON?${citySearch}${countrySearch}maxRows=10&orderby=population&featureClass=P&username=weknowit`
    );
    // Only show cities with population in them
    return res.data.geonames.filter((city) => city.population > 0);
  };

  // If country is search for, it searches for the country code
  //  first and then searches for the cities
  const { search } = useParams();
  useEffect(() => {
    // Fetches the data from api.geonames.org
    const fetchData = async () => {
      setLoading(true);
      setAlert("");
      const params = new URLSearchParams(search);

      const cityName = params.get("city");
      const countryName = params.get("country");
      setCountry(countryName);

      const countryCode = await getCountryCode(countryName);
      if (countryCode === null) {
        setCities([]);
        setAlert("No country by the name '" + countryName + "' found");
      } else {
        const cities = await getCities(cityName, countryCode);
        if (cities === null || cities.length === 0) {
          setAlert("No city found by the name '" + cityName + "' found");
        }
        setCities(cities);
      }

      setLoading(false);
    };
    fetchData();
  }, [search]);

  // Renders a loading icon if data is loading
  if (loading) return <Loading />;

  if (alert !== "") return <h2 className="">{alert}</h2>;

  return (
    <div>
      {cities.map((city) => (
        <CityItem
          key={city.geonameId}
          city={city}
          // country = false, if a country is searched for
          country={country === "" && city.countryName}
        />
      ))}
    </div>
  );
};

export default Cities;
