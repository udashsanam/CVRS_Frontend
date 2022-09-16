import axios from "axios";
import React, { useEffect, useState } from "react";
import { Box, Button, Paper } from "@mui/material";
import { useStyles } from "../useStyles";

function NepalCovidInfo() {
  const classes = useStyles();
  const [nepalCovidSummary, setNepalCovidSummary] = useState([]);
  const nplTestingSummary =
    "https://covid19.mohp.gov.np/covid/api/confirmedcases?fbclid=IwAR1WIE56EIptyiDIQuXyxE5hja3UT2_RJbTtlNqcWSk5vhp-OW81DIAQFTo";

  useEffect(() => {
    axios
      .get(nplTestingSummary, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((res) => {
        setNepalCovidSummary(res.data.nepal);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);
  return (
    <>
      <div
        className="row justify-content-center pb-2"
        style={{ borderBottom: "1px solid #dbdbd9" }}
      >
        <div
          className="row col-5 justify-content-center"
          style={{
            borderRight: "1px solid black",
          }}
        >
          <div className="col-12">
            <p className="d-flex justify-content-center fw-bold">
              Nepal | Recent Updates
            </p>
          </div>
          <div className="col-3">
            <p className="fw-bold">Last 24 hour</p>
          </div>
          <div className="col-9">
            <p className="d-flex justify-content-end fw-bold">
              Updated at: {nepalCovidSummary.updated_at}
            </p>
          </div>
          <Paper
            elevation={3}
            className="col-3 card"
            style={{
              background: "#b3ffea",
            }}
          >
            <p>New Case</p>
            {nepalCovidSummary.today_newcase}
          </Paper>
          <Paper
            elevation={3}
            className="col-3 card"
            style={{
              background: "#e8ffb3",
            }}
          >
            <p>Recovered</p>
            {nepalCovidSummary.today_recovered}
          </Paper>
          <Paper
            elevation={3}
            className="col-3 card"
            style={{
              background: "#ffb3b3",
            }}
          >
            <p>Deaths</p>
            {nepalCovidSummary.today_death}
          </Paper>
        </div>
        <div
          className="row col-7 justify-content-center"
          style={{ paddingLeft: "30px" }}
        >
          <div className="col-12">
            <p className="d-flex justify-content-center fw-bold">
              Total Updates
            </p>
          </div>
          <div className="col-6 fw-bold">
            <p>Total Data</p>
          </div>
          <div className="col-6">
            <p className="d-flex justify-content-end fw-bold">
              Updated at: {nepalCovidSummary.updated_at}
            </p>
          </div>
          <Paper
            elevation={3}
            className="col-2 card"
            style={{
              background: "#b3ffea",
            }}
          >
            <p>Total Cases</p>
            {nepalCovidSummary.positive}
          </Paper>
          <Paper
            elevation={3}
            className="col-2 card"
            style={{
              background: "#e8ffb3",
            }}
          >
            <p>Total Infected</p>
            {nepalCovidSummary.extra2}
          </Paper>
          <Paper
            elevation={3}
            className="col-2 card"
            style={{
              background: "#ffb3b3",
            }}
          >
            <p>Recovered</p>
            {nepalCovidSummary.extra1}
          </Paper>
          <Paper
            elevation={3}
            className="col-2 card"
            style={{
              background: "#ffb3b3",
            }}
          >
            <p>Deaths</p>
            {nepalCovidSummary.deaths}
          </Paper>
        </div>
      </div>
      <div className="row text-center justify-content-center">
        <Paper  elevation={3} className={`col-lg-3 m-1 p-1 ${classes.bg}`}>
          <span className="fw-bold px-1">{nepalCovidSummary.extra2}</span>
          <span className="leftBorder">Isolation</span>
        </Paper>
        <Paper elevation={3} className={`col-lg-5 m-1 p-1 ${classes.bg}`}>
          <span className="fw-bold px-1">
            {nepalCovidSummary.samples_tested}
          </span>
          <span className="leftBorder">PCR Test</span>
        </Paper>
        <Paper elevation={3} className={`col-lg-3 m-1 p-1 ${classes.bg}`}>
          <span className="fw-bold px-1">{nepalCovidSummary.extra8}</span>
          <span className="leftBorder">Quarantined</span>
        </Paper>
      </div>
    </>
  );
}

export default NepalCovidInfo;
