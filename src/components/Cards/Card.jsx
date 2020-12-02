import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./Cards.module.css";
const Cards = ({
  data: {
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
  },
}) => {
  if (!cases) {
    return "....";
  }
  let recoveredPercentage = ((recovered / cases) * 100).toFixed(3);
  let deathPercentage = ((deaths / cases) * 100).toFixed(3);

  return (
    <>
      <div className={styles.container}>
        <Grid container justify="center" direction="row">
          <Grid
            item
            component={Card}
            xs={12}
            sm={4}
            md={2}
            className={cx(styles.card, styles.Active)}
          >
            <CardContent className={styles.ParentPosition}>
              <Typography color="textSecondary" gutterBottom>
                Active Cases
              </Typography>
              <Typography variant="h5">
                <CountUp start={0} end={active} duration={2.5} separator="," />
              </Typography>
              <Typography color="textSecondary">Critical Cases</Typography>
              <Typography variant="h5">
                {" "}
                <CountUp
                  start={0}
                  end={critical}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">Total Tests</Typography>
              <Typography variant="h5">
                {" "}
                <CountUp start={0} end={tests} duration={2.5} separator="," />
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            xs={12}
            sm={4}
            md={2}
            className={cx(styles.card, styles.infected)}
          >
            <CardContent className={styles.ParentPosition}>
              <Typography color="textSecondary" gutterBottom>
                Total Infected
              </Typography>
              <Typography variant="h5">
                <CountUp start={0} end={cases} duration={2.5} separator="," />
              </Typography>
              <Typography color="textSecondary">Last 24 hours</Typography>
              <Typography variant="h6">
                {" "}
                <CountUp
                  start={0}
                  end={todayCases}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              {affectedCountries ? (
                <>
                  <Typography color="textSecondary">
                    Affected Coutries
                  </Typography>
                  <Typography variant="h6">
                    {" "}
                    <CountUp
                      start={0}
                      end={affectedCountries}
                      duration={2.5}
                      separator=","
                    />
                  </Typography>
                </>
              ) : null}
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            xs={12}
            sm={4}
            md={2}
            className={cx(styles.card, styles.recovered)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Recovered
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={recovered}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                Total Recoveries Percent
              </Typography>
              <Typography variant="h6">{recoveredPercentage} %</Typography>

              <Typography color="textSecondary">Last 24 Hours</Typography>
              <Typography variant="h6">
                <CountUp
                  start={0}
                  end={todayRecovered}
                  duration={2.5}
                  separator=","
                />
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            xs={12}
            sm={4}
            md={2}
            className={cx(styles.card, styles.deaths)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Deaths
              </Typography>
              <Typography variant="h5">
                <CountUp start={0} end={deaths} duration={2.5} separator="," />
              </Typography>
              <Typography color="textSecondary">
                Total Deaths percentage
              </Typography>
              <Typography variant="h6">{deathPercentage} %</Typography>

              <Typography color="textSecondary">Last 24 hours</Typography>
              <Typography variant="h6">
                <CountUp
                  start={0}
                  end={todayDeaths}
                  duration={2.5}
                  separator=","
                />
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
        <h5>
          {` Data is updated as of        ${new Date(updated).toDateString()} 
          ${new Date(updated).toTimeString()} `}
        </h5>
      </div>
    </>
  );
};

export default Cards;
