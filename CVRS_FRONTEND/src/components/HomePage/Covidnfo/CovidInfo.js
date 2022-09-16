import { Paper } from "@mui/material";
import React, { useState } from "react";
import { useStyles } from "../../useStyles";
import Overview from "./Overview";
import Prevention from "./Prevention";
import Symptoms from "./Symptoms";

function CovidInfo() {
  const classes = useStyles();
  const [covidInfo, setCovidInfo] = useState("1");
  const overviewHandler = (event) => {
    event.preventDefault();
    setCovidInfo("1");
  };
  const preventionHandler = (event) => {
    event.preventDefault();
    setCovidInfo("2");
  };
  const symptomsHandler = (event) => {
    event.preventDefault();
    setCovidInfo("3");
  };
  return (
    <>
      <Paper elevation={0}
        className={`row text-center justify-content-center mt-4 fw-bold border-bottom ${classes.bg}`}
        style={{ fontSize: "18px", color: "#587db8" }}
      >
        <div className="col-lg-3" onClick={overviewHandler}>
          <div className="mouse">Overview</div>
        </div>
        <div className="col-lg-3 " onClick={preventionHandler}>
          <span className="mouse"> Prevention</span>
        </div> 
        <div className="col-lg-3" onClick={symptomsHandler}>
          <span className="mouse">Symptoms</span>
        </div>
      </Paper>
      <div style={{marginBottom:"10px"}}>
        {covidInfo === "1" && <Overview class={classes.bg} />}
        {covidInfo === "2" && <Prevention class={classes.bg} />}
        {covidInfo === "3" && <Symptoms class={classes.bg} />}
      </div>
    </>
  );
}

export default CovidInfo;
