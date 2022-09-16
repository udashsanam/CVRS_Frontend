import React from "react";
import "./Home.css";
import Slider from "./Slider";
import NepalCovidInfo from "./NepalCovidInfo";
import CovidInfo from "./Covidnfo/CovidInfo";

import Box from "@mui/material/Box";
function Home() {
  return (
    <>
      <Slider />
      <Box color="secondary">
        <div className="contain">
          <NepalCovidInfo />
          <CovidInfo />
        </div>
      </Box>
    </>
  );
}

export default Home;
