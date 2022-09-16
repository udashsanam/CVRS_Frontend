import { Paper } from "@mui/material";
import React from "react";
import Symptom from "../../../assets/images/symptoms_web.png";

function Symptoms(props) {
  return (
    <div className="row justify-content-around  mt-3 text-justify">
      <div className="col-lg-5">
        <img
          src={Symptom}
          alt=""
          style={{ borderRadius: "15px", width: "100%" }}
        />
      </div>
      <Paper className={`col-lg-6 p-5 ${props.class}`}>
        <p>
          COVID-19 affects different people in different ways. Most infected
          people will develop mild to moderate illness and recover without
          hospitalization.
        </p>
        <p className="fw-bold">Most common symptoms:</p>

        <li>fever</li>
        <li>cough</li>
        <li>tiredness</li>
        <li>loss of taste or smell.</li>

        <p className="fw-bold  mt-3">Less common symptoms:</p>

        <li>sore throat</li>
        <li>headache</li>
        <li>aches and pains</li>
        <li>loss of taste or smell.</li>
        <li>a rash on skin, or discolouration of fingers or toes.</li>
        <li>red or irritated eyes.</li>

        <p className="fw-bold mt-3">Serious symptoms:</p>

        <li>difficulty breathing or shortness of breath</li>
        <li>loss of speech or mobility, or confusion</li>
        <li>chest pain.</li>

        <p>
          Seek immediate medical attention if you have serious symptoms. Always
          call before visiting your doctor or health facility.
        </p>

        <p>
          People with mild symptoms who are otherwise healthy should manage
          their symptoms at home.
        </p>

        <p>
          On average it takes 5–6 days from when someone is infected with the
          virus for symptoms to show, however it can take up to 14 days.
        </p>
      </Paper>
    </div>
  );
}

export default Symptoms;
