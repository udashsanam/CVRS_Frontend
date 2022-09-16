import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { Form } from "formik";
import React from "react";
import FormControls from "../FormControls";
import FormikContainer from "../FormikContainer";

function ContactFrom() {
  const initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    description: "",
  };

  const submitHandler = (values, onSubmitProps) => {
    console.log(values, "citizen details");
    onSubmitProps.resetForm();
  };
  return (
    <FormikContainer initialValues={initialValues} onSubmit={submitHandler}>
      <Paper className="p-3">
        <Typography variant="h6" className="text-center mb-3">
          Any query, you can contact us:
        </Typography>
        <Form>
          <Grid container spacing={2}>
            <Grid item lg={4}>
              <FormControls
                control="input"
                name="firstName"
                label="First Name"
              />
            </Grid>
            <Grid item lg={4}>
              <FormControls
                control="input"
                name="middleName"
                label="Middle Name"
              />
            </Grid>
            <Grid item lg={4}>
              <FormControls control="input" name="lastName" label="Last Name" />
            </Grid>
            <Grid item lg={6}>
              <FormControls
                control="input"
                name="email"
                label="E-mail:"
                type="email"
              />
            </Grid>
            <Grid item lg={12}>
              <FormControls
                control="input"
                name="description"
                label="Description"
                type="description"
                rows={4}
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
}

export default ContactFrom;
