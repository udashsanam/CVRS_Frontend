import { Button, Grid, Paper, Typography } from "@mui/material";
import { Form } from "formik";
import React from "react";
import { useStyles } from "../../useStyles";
import useWindowDimensions from "../../useWindowDimensions";
import FormControls from "../FormControls";
import FormikContainer from "../FormikContainer";
import ageCategory from "../../../config/ageCategory.json";
import state from "../../../config/states.json";
import { ValidationVaccineSchema } from "../FormValidation/ValdiationSchema";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { sentVaccineData } from "../../../store/vaccine-slice";

function Vaccine() {
  const dispatch = useDispatch();
  const vaccineResponse = useSelector(
    (state) => state.vaccine.postVaccineResponse
  );
  const initialValues = {
    vaccineDto: {
      name: "",
      units: "",
      batchNum: "",
      scheduleFor: "",
    },
    manufacturingCompanyDto: {
      name: "",
      phoneNum: "",
    },
    companyLocationDto: {
      state: "",
      zone: "",
      district: "",
      municipality: "",
      wardNo: "",
    },
    vaccineDistributionCenterDto: {
      name: "",
      locationEntityId: "",
    },
    centerLocationDto: {
      state: "",
      zone: "",
      district: "",
      municipality: "",
      wardNo: "",
    },
    ageCategory: "",
  };
  const classes = useStyles();
  const { width } = useWindowDimensions();
  let formClass = classes.form;
  if (width <= 820) {
    formClass = classes.formResponsive;
  }
  const onSubmitHandler = (values, onSubmitProps) => {
    dispatch(sentVaccineData(values));
    onSubmitProps.resetForm();
  };
  console.log(vaccineResponse, "vaccineResponse");
  return (
    <FormikContainer
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      className={` ${formClass}`}
      // validationSchema={ValidationVaccineSchema}
      // style={{ width: "60%", margin: "0 20%" }}
    >
      <Paper className="mb-5 p-3">
        <Typography
          variant="h4"
          style={{ minHeight: "80px" }}
          className="d-flex align-items-center justify-content-center border-bottom"
        >
          COVID-19 Vaccine Information
        </Typography>
        <Form>
          <Typography variant="h6" className="text-center p-2">
            Vaccine
          </Typography>
          <Grid container spacing={2}>
            <Grid item lg={6}>
              <FormControls
                control="input"
                name="vaccineDto.name"
                label="Name:"
              />
            </Grid>

            <Grid item lg={6}>
              <FormControls
                control="input"
                name="vaccineDto.units"
                label="Units:"
                type="number"
              />
            </Grid>

            <Grid item lg={6}>
              <FormControls
                control="input"
                name="vaccineDto.batchNum"
                label="Batch:"
                type="number"
              />
            </Grid>

            <Grid item lg={6}>
              <FormControls
                control="input"
                name="vaccineDto.scheduleFor"
                label="Schedule Date:"
                type="date"
              />
            </Grid>

            <Grid item lg={6}>
              <FormControls
                control="select"
                name="ageCategory"
                label="Age Category:"
                options={ageCategory}
              />
            </Grid>
          </Grid>
          <Typography variant="h6" className="text-center p-2">
            Manufacturer
          </Typography>
          <Grid container spacing={2}>
            <Grid item lg={6}>
              <FormControls
                control="input"
                name="manufacturingCompanyDto.name"
                label="Name:"
              />
            </Grid>
            <Grid item lg={6}>
              <FormControls
                control="input"
                name="manufacturingCompanyDto.phoneNum"
                label="Phone Number:"
                type="number"
              />
            </Grid>
            <Grid item lg={6}>
              <FormControls
                control="select"
                name="companyLocationDto.state"
                label="State:"
                options={state}
              />
            </Grid>
            <Grid item lg={6}>
              <FormControls
                control="input"
                name="companyLocationDto.zone"
                label="Zone:"
              />
            </Grid>
            <Grid item lg={6}>
              <FormControls
                control="input"
                name="companyLocationDto.district"
                label="District:"
              />
            </Grid>
            <Grid item lg={6}>
              <FormControls
                control="input"
                name="companyLocationDto.municipality"
                label="Municipality:"
              />
            </Grid>
            <Grid item lg={6}>
              <FormControls
                control="input"
                name="companyLocationDto.wardNo"
                label="Ward Number:"
                type="number"
              />
            </Grid>
          </Grid>
          <Typography variant="h6" className="text-center p-2">
            Distributor
          </Typography>
          <Grid container spacing={2}>
            <Grid item lg={6}>
              <FormControls
                control="input"
                name="vaccineDistributionCenterDto.name"
                label="Name:"
              />
            </Grid>
            <Grid item lg={6}>
              <FormControls
                control="select"
                name="centerLocationDto.state"
                label="State:"
                options={state}
              />
            </Grid>
            <Grid item lg={6}>
              <FormControls
                control="input"
                name="centerLocationDto.zone"
                label="Zone:"
              />
            </Grid>
            <Grid item lg={6}>
              <FormControls
                control="input"
                name="centerLocationDto.district"
                label="District:"
              />
            </Grid>
            <Grid item lg={6}>
              <FormControls
                control="input"
                name="centerLocationDto.municipality"
                label="Municipality:"
              />
            </Grid>
            <Grid item lg={6}>
              <FormControls
                control="input"
                name="centerLocationDto.wardNo"
                label="Ward Number:"
                type="number"
              />
            </Grid>
          </Grid>

          <Box className="d-flex justify-content-end pt-3">
            <Button
              variant="contained"
              style={{
                marginRight: "15px",
              }}
              type="submit"
            >
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

export default Vaccine;
