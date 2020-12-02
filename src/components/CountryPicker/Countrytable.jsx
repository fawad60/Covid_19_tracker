import React, { useState, useEffect } from "react";
import { fetchCountriesDetailed } from "../../api";

const CountryTable = () => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const countries = async () => {
      setFetchedCountries(await fetchCountriesDetailed());
    };
    countries();
  }, [setFetchedCountries]);
  console.log(fetchedCountries);

  return (
    <div>
      {fetchedCountries.map((country) => (
        <img
          src={country.countryInfo.flag}
          alt="flags"
          width="30px"
          height="30px"
        />
      ))}
    </div>
  );
};

export default CountryTable;
