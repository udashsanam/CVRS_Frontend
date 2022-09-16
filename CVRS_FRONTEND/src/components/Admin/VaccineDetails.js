import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { receiveVaccineData } from "../../store/vaccine-slice";
import TableComponent from "../TableComponent/TableComponent";
import useWindowDimensions from "../useWindowDimensions";

const colmNames = [
  "Id",
  "Batch no.",
  "Name",
  "Created Date",
  "Scheduled For",
  "Units",
];

const VaccineDetails = () => {
  const { height } = useWindowDimensions();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(receiveVaccineData());
  }, [dispatch]);

  const vaccineDetails = useSelector(
    (state) => state.vaccine.getVaccineDetails
  );

  console.log(vaccineDetails, "vaccine data");

  return (
    <div
      style={{
        minHeight: height - 115,
      }}
    >
      <div className="d-flex justify-content-center px-5 pt-4">
        {vaccineDetails && (
          <TableComponent data={vaccineDetails} colmNames={colmNames} />
        )}
      </div>
    </div>
  );
};

export default VaccineDetails;
