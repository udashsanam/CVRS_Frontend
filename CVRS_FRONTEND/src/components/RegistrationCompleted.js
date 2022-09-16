import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import useWindowDimensions from "./useWindowDimensions";
import HamroVaccine from "../assets/images/logo/HamroVaccine-logos_transparent1.png";
import { citizenActions } from "../store/citizen-slice";
import { useHistory } from "react-router-dom";
function RegistrationCompleted() {
  const { height } = useWindowDimensions();
  const dispatch = useDispatch();
  const history = useHistory();
  const postCitizenResponse = useSelector(
    (state) => state.citizen.postCitizenResponse.object
  );

  const dob = new Date(postCitizenResponse.dob).toDateString();

  const registerAgain = () => {
    dispatch(citizenActions.newCitizenRegister());
    history.replace("/register");
  };
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      sx={{ height: height - 80 }}
    >
      <Paper elevation={3} className="w-50 p-3">
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          spacing={4}
        >
          <Grid item xs={6}>
            <img src={HamroVaccine} alt="" style={{ width: "20%" }} />
          </Grid>
          <Grid item xs={6} className="d-flex justify-content-end">
            <Typography>
              {"Registration Number: " + postCitizenResponse.regNum}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box className="d-flex mb-2">
              <Typography>
                {"Name: " +
                  postCitizenResponse.firstName +
                  " " +
                  postCitizenResponse.middleName +
                  " " +
                  postCitizenResponse.lastName}
              </Typography>
            </Box>
            <Box className="d-flex">
              <Typography>{"Gender: " + postCitizenResponse.gender}</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} className="d-flex justify-content-end">
            <Typography>{"DOB: " + dob}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              className="text-center"
            >
              <Grid item xs={4} className="border-right">
                <Typography>Phone Number: </Typography>
                <Typography>{postCitizenResponse.phoneNum}</Typography>
              </Grid>
              <Grid item xs={4} className="border-right">
                <Typography>Citizenship Id:</Typography>
                <Typography>{postCitizenResponse.citizenship}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>Vaccination Status:</Typography>
                <Typography>{postCitizenResponse.vaccinatedStatus}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Box className="pt-4">
        <Typography>
          Note: Please take this photo and print for your use.
        </Typography>
      </Box>
      <Box className="pt-4">
        <Button variant="contained" onClick={registerAgain}>
          Register Again
        </Button>
      </Box>
    </Grid>
  );
}

export default RegistrationCompleted;
