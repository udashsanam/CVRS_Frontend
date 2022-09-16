import { Form } from "react-bootstrap";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const admin = localStorage.getItem("admin");
const TableComponent = ({ data, colmNames, tableHandler, vaccineData }) => {
  const [status, setStatus] = useState();
  const [registraionId, setRegistrationId] = useState();
  const [vaccineId, setVaccineId] = useState();

  const statueChangeHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value, "event");
    setStatus(event.target.value);
  };
  console.log(admin, "admin");
  // console.log(citizenId, "citizen");
  // console.log(vaccineData, "vaccineData");
  console.log(vaccineId, "vaccineId");
  const submitHandler = (event) => {
    event.preventDefault();
    const citizenAndStatus = {
      registrationNumber: registraionId,
      vaccineId: vaccineId,
      vaccinatedStatus: status,
      username: admin,
    };
    console.log(citizenAndStatus, "citizenAndStatus");
    tableHandler(citizenAndStatus);
  };
  return (
    <table className="table table-border table-striped table-hover text-center">
      <thead className="thead-dark">
        <tr key="1" className="table-dark">
          {colmNames.map((colm) => {
            return <th>{colm}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {tableHandler &&
          data.map((row, index) => (
            <tr key={index}>
              <td>{row.regNum}</td>
              <td>
                <div>
                  {row.firstName + " "}
                  {row.middleName && row.middleName + ""}
                  {row.lastName}
                </div>
                <div>{row.dob}</div>
                <div>{row.gender}</div>
                <div>{row.phoneNum}</div>
                <div>{row.email}</div>
                <div>{row.citizenship}</div>
              </td>
              <td>
                <div>{row.state}</div>
                <div>{row.zone}</div>
                <div>{row.district}</div>
                <div>{row.municipality}</div>
                <div>{row.wardNo}</div>
              </td>
              <td>{row.occupation}</td>
              <td>{row.medicalCondition}</td>
              <td
                onClick={() => {
                  setRegistrationId(row.regNum);
                  row.vaccineId && setVaccineId(row.vaccineId);
                }}
              >
                <Form
                  onSubmit={submitHandler}
                  className="row justify-content-center"
                >
                  {vaccineData && (
                    <Form.Group className="col-lg-4">
                      {!row.vaccineName ? (
                        <Form.Select
                          onClick={(event) => {
                            setVaccineId(event.target.value);
                          }}
                        >
                          <>
                            {vaccineData.map((data) => (
                              <option key={data.key} value={data.key}>
                                {data.name}
                              </option>
                            ))}
                          </>
                        </Form.Select>
                      ) : (
                        <Form.Select disabled>
                          <>
                            <option key={data.key}>{row.vaccineName}</option>
                          </>
                        </Form.Select>
                      )}
                    </Form.Group>
                  )}
                  <Form.Group className="col-lg-4">
                    <Form.Select onChange={statueChangeHandler}>
                      {row.vaccinatedStatus === "pending" && (
                        <>
                          <option>{row.vaccinatedStatus}</option>
                          <option>got one</option>
                          <option>completed</option>
                        </>
                      )}
                      {row.vaccinatedStatus === "got one" && (
                        <>
                          <option>{row.vaccinatedStatus}</option>
                          <option>pending</option>
                          <option>completed</option>
                        </>
                      )}
                      {row.vaccinatedStatus === "completed" && (
                        <>
                          <option>{row.vaccinatedStatus}</option>
                        </>
                      )}
                    </Form.Select>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="col-lg-2">
                    Save
                  </Button>
                </Form>
              </td>
            </tr>
          ))}
        {!tableHandler &&
          data.map((row, index) => (
            <tr key={index}>
              <td>{row.id}</td>
              <td>{row.batchNum}</td>
              <td>{row.name}</td>
              <td>{row.createdDate}</td>
              <td>{row.scheduleFor}</td>
              <td>{row.units}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
