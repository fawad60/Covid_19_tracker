import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./Charts.module.css";
const Charts = ({
  data: { cases, deaths, recovered },
  country,
  chartType,
  handleChartChange,
}) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchApi();
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) =>
          new Date(date).toLocaleDateString()
        ),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "red",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "Black",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  console.log("test ", cases);
  const barChart = cases ? (
    <Bar
      data={{
        labels: ["infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",

            backgroundColor: [
              "rgba(255, 0, 0,0.95)",
              "rgba(0, 128, 0)",
              " rgba(37, 35, 35)",
            ],
            data: [cases, recovered, deaths],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  const DoughnutChart = cases ? (
    <Doughnut
      data={{
        labels: ["infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(255, 0, 0,0.9)",
              "rgba(0, 128, 0,0.9)",
              " rgba(37, 35, 35)",
            ],
            data: [cases, recovered, deaths],
            borderWidth: 1,
            hoverOffset: 4,
          },
        ],
      }}
      options={{}}
    />
  ) : null;

  const CountryChartType =
    chartType === "DoughnutChart" ? DoughnutChart : barChart;

  return (
    <div className={styles.container}>
      <FormControl className={styles.FormControl}>
        {country ? (
          <NativeSelect
            defaultValue=""
            onChange={(e) => handleChartChange(e.target.value)}
          >
            <option value="BarChart">Bar chart</option>
            <option value="DoughnutChart">Doughnut Chart</option>
          </NativeSelect>
        ) : null}
      </FormControl>
      {country ? CountryChartType : lineChart}
    </div>
  );
};

export default Charts;
