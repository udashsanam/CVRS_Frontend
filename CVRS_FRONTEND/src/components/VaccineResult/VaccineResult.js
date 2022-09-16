import React, { useEffect } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import useWindowDimensions from "../useWindowDimensions";
import HamroVaccine from "../../assets/images/logo/HamroVaccine-logos_transparent1.png";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVaccineStatus } from "../../store/citizen-slice";

function VaccineResult() {
  const { height } = useWindowDimensions();
  const location = useLocation();
  const dispatch = useDispatch();
  const perticularCitizen = useSelector(
    (state) => state.citizen.particularCitizen.object
  );
  console.log(perticularCitizen, "particularCitizen");
  const regNo = location.pathname.match(/\d/g).join("");
  useEffect(() => {
    dispatch(getVaccineStatus(regNo));
  }, [dispatch, regNo]);
  console.log(regNo, "from vaccineReport");
  const dob =
    perticularCitizen &&
    new Date(perticularCitizen.citizenDto.dob).toDateString();
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      sx={{ height: height - 80 }}
    >
      {perticularCitizen && (
        <>
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
                {"Registration Number: " + perticularCitizen.citizenDto.regNum}
              </Grid>
              <Grid item xs={6}>
                <Box className="d-flex">
                  <Typography>
                    {"Name: " +
                      perticularCitizen.citizenDto.firstName +
                      " " +
                      perticularCitizen.citizenDto.middleName +
                      " " +
                      perticularCitizen.citizenDto.lastName}
                  </Typography>
                </Box>
                <Box className="d-flex">
                  <Typography>
                    {"Gender: " + perticularCitizen.citizenDto.gender}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} className="d-flex justify-content-end">
                <Typography>{"DOB: " + dob}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>Vaccine Details:</Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  className="text-center"
                >
                  {perticularCitizen.vaccineDto && (
                    <>
                      <Grid item xs={4} className="border-right">
                        <Typography>Batch Number:</Typography>
                        <Typography>
                          {perticularCitizen.vaccineDto.batchNum}
                        </Typography>
                      </Grid>
                      <Grid item xs={4} className="border-right">
                        <Typography>Name:</Typography>
                        <Typography>
                          {perticularCitizen.vaccineDto.name}
                        </Typography>
                      </Grid>
                    </>
                  )}
                  <Grid item xs={4}>
                    <Typography>Vaccination Status:</Typography>
                    <Typography>
                      {perticularCitizen.citizenDto.vaccinatedStatus}
                    </Typography>
                  </Grid>
                  {perticularCitizen.vaccineLog && (
                    <>
                      <Grid item xs={6} className="border-right mt-5">
                        <Typography>Vaccinated Date:</Typography>
                        {perticularCitizen.vaccineLog.map((value) => {
                          return (
                            <>
                              <Typography>{value.firstDoseDate}</Typography>
                              <Typography>{value.secondDoseDate}</Typography>
                            </>
                          );
                        })}
                      </Grid>
                      <Grid item xs={6} className=" mt-5">
                        <Typography>Given By:</Typography>
                        {perticularCitizen.vaccineLog.map((value) => {
                          return <Typography>{value.givenBy}</Typography>;
                        })}
                      </Grid>
                    </>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Paper>
          <Box className="pt-4">
            <Typography>
              Note: Please take this photo and print for your use.
            </Typography>
          </Box>
        </>
      )}
      {!perticularCitizen && (
        <Paper elevation={3} className="w-50 p-3 text-center">
          <Typography>Loading...</Typography>
        </Paper>
      )}
    </Grid>
  );
}

export default VaccineResult;
