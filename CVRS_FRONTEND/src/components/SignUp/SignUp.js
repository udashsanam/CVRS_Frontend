import { Form } from "formik";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FormControls from "../Forms/FormControls";
import FormikContainer from "../Forms/FormikContainer";
import useWindowDimensions from "../useWindowDimensions";
import HamroVaccine from "../../assets/images/logo/HamroVaccine-logos_transparent1.png";
import "../Login/Login.css";
import { ValidationSignUpSchema } from "../Forms/FormValidation/ValdiationSchema";
import { sentSignUpData } from "../../store/auth-slice";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { useStyles } from "../useStyles";

const SignUp = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { height, width } = useWindowDimensions(); //Height and Width of window
  const history = useHistory();
  const dispatch = useDispatch();
  const signupResponse = useSelector((state) => state.auth.signupData);
  const classes = useStyles();
  const initialValues = {
    name: "",
    userName: "",
    password: "",
    phoneNum: "",
  };
  const onSubmitHandler = (values) => {
    console.log(values, "login values");
    dispatch(sentSignUpData(values));
  };

  if (signupResponse) {
    console.log(signupResponse, "Sign Up Response");
  }
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: height - 80 }}
    >
      <Paper elevation={3} sx={{ width: "35%" }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <img
            src={HamroVaccine}
            style={{ width: "15%", objectFit: "cover" }}
            alt=""
            className="m-0"
          />

          <Typography variant="h6">Enter Your Details</Typography>
        </Grid>
        <FormikContainer
          initialValues={initialValues}
          onSubmit={onSubmitHandler}
          validationSchema={ValidationSignUpSchema}
        >
          <Form>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={2}
              className="p-4"
            >
              <Grid item lg={9}>
                <FormControls control="input" name="name" label="Full Name:" />
              </Grid>
              <Grid item lg={9}>
                <FormControls
                  control="input"
                  name="userName"
                  label="User Name:"
                />
              </Grid>

              <Grid item lg={9}>
                <FormControls
                  control="input"
                  name="password"
                  label="Password:"
                  type="password"
                />
              </Grid>

              <Grid item lg={9}>
                <FormControls
                  control="input"
                  name="phoneNum"
                  label="Phone Number:"
                  type="number"
                />
              </Grid>

              <Grid item lg={9} className="d-flex justify-content-center">
                <Button variant="contained" type="submit">
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </Form>
        </FormikContainer>
      </Paper>
    </Grid>
  );
};

export default SignUp;
