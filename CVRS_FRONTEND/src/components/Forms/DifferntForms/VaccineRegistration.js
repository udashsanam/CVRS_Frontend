import React, { useEffect, useState } from "react";
import { Form } from "formik";
import FormControls from "../FormControls";
import { ValdiationRegistrationSchema } from "../FormValidation/ValdiationSchema";
import FormikContainer from "../FormikContainer";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { citizenActions, sentCitizenData } from "../../../store/citizen-slice";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { useStyles } from "../../useStyles";
import { Box } from "@mui/system";
import useWindowDimensions from "../../useWindowDimensions";
import states from "../../../config/states.json";

const VaccineRegistration = () => {
  const classes = useStyles();
  const { width } = useWindowDimensions();
  const history = useHistory();
  const dispatch = useDispatch();
  const postCitizenResponse = useSelector(
    (state) => state.citizen.postCitizenResponse
  );

  const initialValues = {
    citizenDto: {
      firstName: "",
      middleName: "",
      lastName: "",
      citizenship: "",
      dob: "",
      gender: "",
      phoneNum: "",
      email: "",
    },
    locationDto: {
      state: "",
      zone: "",
      district: "",
      municipality: "",
      wardNo: "",
    },
    occupationDto: {
      name: "",
    },
    medicalConditionDto: {
      name: "",
    },
  };

  const radioOptions = [{ value: "Male" }, { value: "Female" }];

  const submitHandler = (values, onSubmitProps) => {
    console.log(values, "citizen details");
    dispatch(sentCitizenData(values));
  };
  if (postCitizenResponse) {
    history.replace("/register/success");
  }
  let formClass = classes.form;
  if (width <= 820) {
    formClass = classes.formResponsive;
  }

  return (
    <FormikContainer
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={ValdiationRegistrationSchema}
      // style={{ width: "60%", margin: "0 20%", padding:"20px" }}
      className={` ${formClass}`}
    >
      <Paper elevation={3} className="p-4">
        <Typography
          variant="h4"
          style={{ minHeight: "80px" }}
          className="d-flex align-items-center justify-content-center border-bottom"
        >
          COVID-19 Vaccine Registration Form
        </Typography>
        <Form>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <Typography variant="subtitle1" className="text-center">
                Citizen Details
              </Typography>
            </Grid>
            <Grid item lg={4}>
              <FormControls
                control="input"
                name="citizenDto.firstName"
                label="First Name"
                reverse
              />
            </Grid>
            <Grid item lg={4}>
              <FormControls
                control="input"
                name="citizenDto.middleName"
                label="Middle Name"
                reverse
              />
            </Grid>
            <Grid item lg={4}>
              <FormControls
                control="input"
                name="citizenDto.lastName"
                label="Last Name"
                reverse
              />
            </Grid>
            <Grid item lg={6}>
              <FormControls
                control="input"
                name="citizenDto.dob"
                label="Date of Birth:"
                type="date"
              />
            </Grid>
            <Grid item lg={6}>
              <FormControls
                control="input"
                name="citizenDto.citizenship"
                label="Citizenship Number:"
              />
            </Grid>
            <Grid item lg={6}>
              <FormControls
                control="input"
                name="citizenDto.phoneNum"
                label="Phone Number:"
                type="number"
              />
            </Grid>
            <Grid item lg={6}>
              <FormControls
                control="input"
                name="citizenDto.email"
                label="E-mail:"
                type="email"
              />
            </Grid>

            <Grid item lg={12}>
              <FormControls
                control="radio"
                name="citizenDto.gender"
                label="Gender:"
                options={radioOptions}
                className="col-lg-6"
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <Typography variant="subtitle1" className="text-center">
                Location Details
              </Typography>
            </Grid>
            <Grid item lg={6}>
              <FormControls
                control="select"
                name="locationDto.state"
                label="State:"
                options={states}
              />
            </Grid>

            <Grid item lg={6}>
              <FormControls
                control="input"
                name="locationDto.zone"
                label="Zone:"
              />
            </Grid>

            <Grid item lg={6}>
              <FormControls
                control="input"
                name="locationDto.district"
                label="District:"
              />
            </Grid>

            <Grid item lg={6}>
              <FormControls
                control="input"
                name="locationDto.municipality"
                label="Municipality:"
              />
            </Grid>

            <Grid item lg={6}>
              <FormControls
                control="input"
                name="locationDto.wardNo"
                label="Ward Number:"
                type="number"
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item lg={6}>
              <Typography variant="subtitle1" className="text-center">
                Occupation Details
              </Typography>
              <FormControls
                control="input"
                name="occupationDto.name"
                label="Occupation:"
              />
            </Grid>
            <Grid item lg={6}>
              <Typography variant="subtitle1" className="text-center">
                Sickness Details
              </Typography>
              <FormControls
                control="input"
                name="medicalConditionDto.name"
                label="Disease:"
              />
            </Grid>
          </Grid>

          <Box className="d-flex justify-content-end mt-3">
            <Button variant="contained" type="submit" className="mr-2">
              Submit
            </Button>
            <Button variant="outlined" type="reset">
              Clear
            </Button>
          </Box>
        </Form>
      </Paper>
    </FormikContainer>
  );
};

export default VaccineRegistration;
