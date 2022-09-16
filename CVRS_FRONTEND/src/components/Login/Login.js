import { Form } from "formik";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CovidImages from "../../config/CovidImages.json";
import FormControls from "../Forms/FormControls";
import FormikContainer from "../Forms/FormikContainer";
import useWindowDimensions from "../useWindowDimensions";
import HamroVaccine from "../../assets/images/logo/HamroVaccine-logos_transparent1.png";
import "./Login.css";
import { ValidationLoginSchema } from "../Forms/FormValidation/ValdiationSchema";
import { sentLoginData } from "../../store/auth-slice";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useStyles } from "../useStyles";

const Login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { height } = useWindowDimensions(); //Height and Width of window
  // const isLoggedIn = localStorage.getItem("isLoggedIn");
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const initialValues = {
    username: "",
    password: "",
  };
  const onSubmitHandler = (values) => {
    console.log(JSON.stringify(values), "login values");
    dispatch(sentLoginData(values));
  };
  if (isLoggedIn) {
    history.replace("/");
  }
  return (
    <Grid container alignItems="center" className={classes.bg}>
      <Grid item md={12} lg={7}>
        <img
          src={CovidImages[0].login}
          style={{ width: "100%", height: height - 80, objectFit: "cover" }}
          alt=""
        />
      </Grid>
      <Grid item md={12} lg={4} className=" mx-5 p-0">
        <Paper elevation={3} className="p-3 w-75 d-flex justify-content-center">
          <Box className="d-flex flex-column">
            <Grid container justifyContent="center">
              <Grid item xs={12} className="d-flex justify-content-center">
                <img
                  src={HamroVaccine}
                  style={{ width: "20%", objectFit: "cover" }}
                  alt=""
                  className="m-0 "
                />
              </Grid>
              <Typography
                variant="h6"
                className="pb-3 d-flex justify-content-center"
              >
                Enter Your Details
              </Typography>
            </Grid>

            <FormikContainer
              initialValues={initialValues}
              onSubmit={onSubmitHandler}
              validationSchema={ValidationLoginSchema}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormControls
                      control="input"
                      name="username"
                      label=" User Name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControls
                      control="input"
                      name="password"
                      label=" Password"
                      type="password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box className="d-flex justify-content-center">
                      <Typography sx={{ marginRight: "8px" }}>
                        Forget your password?
                      </Typography>
                      <Link to="/">Reset It Here</Link>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box className="d-flex justify-content-center">
                      <Button variant="contained" type="submit">
                        Sign In
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Form>
            </FormikContainer>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
