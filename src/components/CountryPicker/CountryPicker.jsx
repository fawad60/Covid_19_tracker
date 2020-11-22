import React, { useState, useEffect } from "react";
import { NativeSelect } from "@material-ui/core";
import { fetchCountries } from "../../api";

import styles from "./Country.module.css";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const countries = async () => {
      setFetchedCountries(await fetchCountries());
    };
    countries();
  }, [setFetchedCountries]);
  return (
    <NativeSelect
      defaultValue=""
      onChange={(e) => handleCountryChange(e.target.value)}
    >
      <option value="">global</option>
      {fetchedCountries.map((country, i) => (
        <option key={i} value={country}>
          {country}
        </option>
      ))}
    </NativeSelect>
  );
};

export default CountryPicker;
