import axios from "axios";

// Returns null in case of country not found when fetching
const getCountryCode = async (country) => {
  if (country === "") return "";

  // Fetches the data from api.geonames.org
  const res = await axios.get(
    `http://api.geonames.org/searchJSON?name_equals=${country}&featureCode=PCLI&username=weknowit&maxRows=1`
  );
  if (res.data.totalResultsCount === 0) return null;
  if (res.data.totalResultsCount === undefined) return null;

  return res.data.geonames[0].countryCode;
};

// Returns null in case of city not found when fetching
const getCities = async (cityName, countryCode) => {
  const citySearch = cityName === "" ? "" : `name_startsWith=${cityName}&`;
  const countrySearch = countryCode === "" ? "" : `country=${countryCode}&`;

  // Fetches the data from api.geonames.org
  const res = await axios.get(
    `http://api.geonames.org/searchJSON?${citySearch}${countrySearch}maxRows=10&orderby=population&featureClass=P&username=weknowit`
  );
  if (res.data.totalResultsCount === undefined) return null;

  // Only show cities with population in them
  return res.data.geonames.filter((city) => city.population > 0);
};

// If country is search for, it searches for the country code
//  first and then searches for the cities,
//  because the country param needs a country code
const searchApi = async (cityName, countryName) => {
  let alert = "";
  let cities = [];

  const countryCode = await getCountryCode(countryName);
  if (countryCode === null) {
    alert = "No country by the name '" + countryName + "' found";
  } else {
    cities = await getCities(cityName, countryCode);
    if (cities === null || cities.length === 0) {
      alert = "No city found by the name '" + cityName + "' found";
    }
  }
  return { alert, cities };
};

export default searchApi;
