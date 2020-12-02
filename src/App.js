import React, { Component } from "react";
import "./App.css";
import Cards from "./components/Cards/Card";
import Charts from "./components/Charts/Charts";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import { fetchData } from "./api";

class App extends Component {
  state = {
    data: {},
    country: "",
    chartType: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData }, () =>
      console.log("state is ", fetchedData)
    );
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };
  handleChartChange = (chartType) => {
    this.setState({ chartType: chartType }, () =>
      console.log("mystate ", this.state)
    );
  };
  render() {
    const { data, country, chartType } = this.state;
    console.log(data);
    return (
      <div className="container">
        <h1>COVID TRACKER</h1>
        <Cards data={data} />
        <CountryPicker
          data={data}
          handleCountryChange={this.handleCountryChange}
        />

        <Charts
          data={data}
          country={country}
          chartType={chartType}
          handleChartChange={this.handleChartChange}
        />
      </div>
    );
  }
}

export default App;
