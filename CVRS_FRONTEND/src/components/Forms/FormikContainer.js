import React from "react";
import { Formik } from "formik";
import { Box, Paper } from "@mui/material";

const FormikContainer = (props) => {
  return (
    <Box className={props.className} style={props.style}>
      <Formik
        initialValues={props.initialValues}
        onSubmit={props.onSubmit}
        validationSchema={props.validationSchema}
      >
        {() => <>{props.children}</>}
      </Formik>
    </Box>
  );
};

export default FormikContainer;
