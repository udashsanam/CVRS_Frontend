import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { receiveCitizenData } from "../../store/citizen-slice";
import { receiveVaccineData } from "../../store/vaccine-slice";
import { postData } from "../Global/http";
import { changeStatus } from "../Global/Links";
import { TextField } from "@mui/material";
import TableComponent from "../TableComponent/TableComponent";

const CitizenDetails = () => {
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(receiveCitizenData());
    dispatch(receiveVaccineData());
  }, [dispatch]);

  const token = localStorage.getItem("token");

  const citizenDetails = useSelector(
    (state) => state.citizen.getCitizenDetails
  );

  const vaccineDetails = useSelector(
    (state) => state.vaccine.getVaccineDetails
  );

  let vaccineIdAndName;
  if (vaccineDetails) {
    vaccineIdAndName = vaccineDetails.map((data, index) => ({
      key: data.id,
      name: data.name,
    }));
  }
  const getFilteredCitizen = (query, citizenDetails) => {
    if (!query) return citizenDetails;
    else {
      return citizenDetails.filter((citizen) => citizen.regNum.includes(query));
    }
  };
  const filteredCitizen = getFilteredCitizen(query, citizenDetails);

  const colmNames = [
    "Registration No.",
    "Citizen Details",
    "Location Details",
    "Occupation",
    "Sickness",
    "Status",
  ];

  const statusHandler = (values) => {
    console.log(JSON.stringify(values), "updatedCitizenDetails");
    postData(
      changeStatus,
      JSON.stringify(values),
      token,
      (onSuccess) => {
        console.log(onSuccess, "onSuccess");
      },
      (onFail) => {
        console.log(onFail, "onFail");
      }
    );
  };

  return (
    <div className=" px-5 pt-4">
      <TextField
        id="standard-basic"
        label="Registration Number"
        variant="standard"
        type="number"
        className=" d-flex justify-content-center align-items-start pb-4"
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className="d-flex justify-content-center ">
        <TableComponent
          data={filteredCitizen}
          vaccineData={vaccineIdAndName}
          colmNames={colmNames}
          tableHandler={statusHandler}
        />
      </div>
    </div>
  );
};

export default CitizenDetails;
