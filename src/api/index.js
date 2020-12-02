import axios from "axios";

const url = "https://disease.sh/v3/covid-19/all";

const Countryurl =
  "https://disease.sh/v3/covid-19/countries?yesterday=false&twoDaysAgo=false&sort=todayCases&allowNull=true";

export const fetchData = async (country) => {
  let changeableurl = url;
  if (country) {
    changeableurl = `https://disease.sh/v3/covid-19/countries/${country}`;
    console.log("url ", changeableurl);
  }

  try {
    const {
      data: {
        updated,
        cases,
        todayCases,
        recovered,
        todayRecovered,
        deaths,
        todayDeaths,
        active,
        critical,
        tests,
        affectedCountries,
      },
    } = await axios.get(changeableurl);
    return {
      updated,
      cases,
      todayCases,
      deaths,
      todayDeaths,
      recovered,
      todayRecovered,
      active,
      critical,
      tests,
      affectedCountries,
    };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get("https://covid19.mathdro.id/api/daily");
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (error) {}
};

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(
      `https://disease.sh/v3/covid-19/countries`
    );
    return data.map((index) => index.country);

    /*    console.log(
      "countrie ",
      country.map((country) => country.name)
    ); */
  } catch (error) {
    console.log("countries api error is  ", error);
  }
};
export const fetchCountriesDetailed = async () => {
  try {
    const { data } = await axios.get(`${Countryurl}`);
    return data;
  } catch (error) {
    console.log("disease api ", error);
  }
};
