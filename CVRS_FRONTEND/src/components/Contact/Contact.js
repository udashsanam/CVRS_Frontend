import { Box, Grid } from "@mui/material";
import React from "react";
import masks from "../../assets/images/masks.jpg";
import ContactFrom from "../Forms/DifferntForms/ContactFrom";
import useWindowDimensions from "../useWindowDimensions";

function Contact() {
  const { height } = useWindowDimensions();
  return (
    <Box className="contain">
      <Grid
        container
        columnSpacing={3}
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item lg={6}>
          <img
            src={masks}
            alt=""
            className="w-100"
            style={{ height: height - 90 }}
          />
        </Grid>
        <Grid item lg={5}>
          <ContactFrom />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
