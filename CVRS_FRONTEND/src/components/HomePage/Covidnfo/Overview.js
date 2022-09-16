import { Paper, Typography } from "@mui/material";
import React from "react";
import Covid from "../../../assets/images/covid.jpg";
function Overview(props) {
  return (
    <div className="row justify-content-around align-times-center mt-3 text-justify">
      <div className="col-lg-5">
        <img
          src={Covid}
          alt=""
          style={{ borderRadius: "15px", width: "100%" }}
        />
      </div>
      <Paper elevation={3} className={`col-lg-6 p-5 ${props.class}`}>
        <Typography variant="body1">
          Coronavirus disease (COVID-19) is an infectious disease caused by the
          SARS-CoV-2 virus.
        </Typography>
        <Typography variant="body1">
          Most people infected with the virus will experience mild to moderate
          respiratory illness and recover without requiring special treatment.
          However, some will become seriously ill and require medical attention.
          Older people and those with underlying medical conditions like
          cardiovascular disease, diabetes, chronic respiratory disease, or
          cancer are more likely to develop serious illness. Anyone can get sick
          with COVID-19 and become seriously ill or die at any age.
        </Typography>
        <Typography variant="body1">
          The best way to prevent and slow down transmission is to be well
          informed about the disease and how the virus spreads. Protect yourself
          and others from infection by staying at least 1 metre apart from
          others, wearing a properly fitted mask, and washing your hands or
          using an alcohol-based rub frequently. Get vaccinated when it’s your
          turn and follow local guidance.
        </Typography>
        <Typography variant="body1">
          The virus can spread from an infected person’s mouth or nose in small
          liquid particles when they cough, sneeze, speak, sing or breathe.
          These particles range from larger respiratory droplets to smaller
          aerosols. It is important to practice respiratory etiquette, for
          example by coughing into a flexed elbow, and to stay home and
          self-isolate until you recover if you feel unwell.
        </Typography>
      </Paper>
    </div>
  );
}

export default Overview;
