import { Box, Grid, Paper, Typography } from "@mui/material";
import { margin } from "@mui/system";
import React from "react";
import susan from "../../assets/images/image0.jpeg";
import sanam from "../../assets/images/image1.jpeg";
import bjen from "../../assets/images/bjen.jpg";
import HamroVaccine from "../../assets/images/logo/HamroVaccine-logos_transparent1.png";

import "./About.css";

function About() {
  return (
    <div className=" bg mt-3">
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        className="bg-light"
      >
        <Grid item lg={3}>
          <Box className="p-2">
            <img
              src={HamroVaccine}
              alt=""
              className="w-100"
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Grid>
        <Grid item lg={3} className="d-flex align-items-center">
          <Box className="p-2 d-flex flex-column bg-white">
            <Typography className="text-center font-weight-bold" variant="h6">
              HAMRO VACCINE
            </Typography>
            <Typography className="text-justify">
              HAMRO VACCINE is we based application which will help the people
              of Nepal to get vaccine during the phase of pandemic.This system
              register the vaccine while sitting at the home and also go for
              vaccination when our system send the notification about the
              vaccination date.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Typography
        variant="h4"
        className="d-flex align-tiem-center justify-content-center p-3 font-weight-bold"
      >
        MEET THE TEAM
      </Typography>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        className="mb-4"
      >
        <Grid item lg={3}>
          <Paper
            elevation={3}
            className="bg-light p-2 d-flex flex-column justify-content-center align-items-center"
          >
            <img src={susan} alt="" className="width--borderRadius-team" />
            <Typography
              variant="subtitle1"
              className="text-center font-weight-bold"
            >
              SUSAN SHRESTHA
            </Typography>
            <Typography className="text-justify">
              Hi, I am one third of the team member who invest his time entirely
              on buliding the frontend of the Hamro Vaccine and testing of the
              system. I am very pleased to get involved in this system.
            </Typography>
          </Paper>
        </Grid>
        <Grid item lg={3}>
          <Paper className=" bg-light p-2 d-flex flex-column justify-content-center align-items-center">
            <img src={sanam} alt="" className="width--borderRadius-team" />
            <Typography
              variant="subtitle1"
              className="text-center font-weight-bold"
            >
              SANAM UDASH
            </Typography>
            <Typography className="text-justify">
              I am Sanam Udash. I worked as the backend developer in our
              project. I learned many things during our project period. This
              project was build to remove the problem such as scheduling and
              manage the number of people in each day of vaccination.
            </Typography>
          </Paper>
        </Grid>
        <Grid item lg={3}>
          <Paper className="bg-light p-2 d-flex flex-column justify-content-center align-items-center">
            <img src={bjen} alt="" className="width--borderRadius-team" />
            <Typography
              variant="subtitle1"
              className="text-center font-weight-bold"
            >
              BIJEN SHRESTHA
            </Typography>
            <Typography className="text-justify">
            I am Bijen Shrestha. I worked as the backend developer in our
              project. I learned many things during our project period. This
              project was build to remove the problem such as scheduling and
              manage the number of people in each day of vaccination.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
