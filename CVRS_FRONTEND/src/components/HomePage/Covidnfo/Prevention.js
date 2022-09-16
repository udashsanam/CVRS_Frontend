import { Paper } from "@mui/material";
import React from "react";
import CovidPrevention from "../../../assets/images/coronavirus-ENG.jpg";
function Prevention(props) {
  return (
    <div className="row justify-content-around  mt-3 text-justify">
      <div className="col-lg-5">
        <img
          src={CovidPrevention}
          alt=""
          style={{ borderRadius: "15px", width: "100%", maxHeight: "600px" }}
        />
      </div>
      <Paper className={`col-lg-6 p-5 ${props.class}`}>
        <p>
          To prevent infection and to slow transmission of COVID-19, do the
          following:
        </p>

        <li>Get vaccinated when a vaccine is available to you.</li>
        <li>
          Stay at least 1 metre apart from others, even if they don’t appear to
          be sick.
        </li>
        <li>
          Wear a properly fitted mask when physical distancing is not possible
          or when in poorly ventilated settings.
        </li>
        <li>
          Choose open, well-ventilated spaces over closed ones. Open a window if
          indoors.
        </li>
        <li>
          Wash your hands regularly with soap and water or clean them with
          alcohol-based hand rub.
        </li>
        <li>Cover your mouth and nose when coughing or sneezing.</li>
        <li>
          If you feel unwell, stay home and self-isolate until you recover.
        </li>
        <p className="mt-4">
          If you have a fever, cough and difficulty breathing, seek medical
          attention. Call in advance so your healthcare provider can direct you
          to the right health facility. This protects you, and prevents the
          spread of viruses and other infections.
        </p>
        <p>
          Properly fitted masks can help prevent the spread of the virus from
          the person wearing the mask to others. Masks alone do not protect
          against COVID-19, and should be combined with physical distancing and
          hand hygiene. Follow the advice provided by your local health
          authority.
        </p>
      </Paper>
    </div>
  );
}

export default Prevention;
