import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./Cards.module.css";
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  console.log(confirmed);
  if (!confirmed) {
    return "....";
  }
  let recoveredPercentage = ((recovered.value / confirmed.value) * 100).toFixed(
    3
  );
  let deathPercentage = ((deaths.value / confirmed.value) * 100).toFixed(3);
  return (
    <>
      <div className={styles.container}>
        <Grid container spacing={2} justify="center" direction="row">
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, styles.infected)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Infected
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={3}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">Last Update</Typography>
              <Typography variant="h6">
                {new Date(lastUpdate).toDateString()}
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, styles.recovered)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Recovered
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={3}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">Last Update</Typography>
              <Typography variant="h6">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography color="textSecondary">
                number of recoveries
              </Typography>
              <Typography variant="h6">{recoveredPercentage} %</Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, styles.deaths)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Deaths
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={3}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">Last Update</Typography>
              <Typography variant="h6">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography color="textSecondary">number of Deaths</Typography>
              <Typography variant="h5">{deathPercentage} %</Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Cards;
