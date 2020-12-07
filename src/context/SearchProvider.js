import React, { useState, createContext } from "react";

const SearchContext = createContext();

// Very simple contextApi for changing the search-field
//  when doing a search
//  No need for reducer since its so simple
const SearchProvider = ({ children }) => {
  const [state, setState] = useState({ city: "", country: "" });

  const setSearch = (cityName, countryName) => {
    setState({ city: cityName, country: countryName });
  };

  return (
    <SearchContext.Provider value={{ searchState: state, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

function useSearchState() {
  const context = React.useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearchState must be used within a SearchProvider");
  }
  return context;
}
export { useSearchState };

export default SearchProvider;
