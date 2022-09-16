import { createSlice } from "@reduxjs/toolkit";
import { getDataWithNoParams, postData } from "../components/Global/http";
import { allVaccines, vaccineRegistraion } from "../components/Global/Links";

const token = localStorage.getItem("token");

const vaccineSlice = createSlice({
  name: "vaccine",
  initialState: {
    postVaccineResponse: null,
    getVaccineDetails: [],
  },
  reducers: {
    sentVaccineDetails(state, action) {
      state.postVaccineResponse = action.payload;
    },
    getVaccineData(state, action) {
      state.getVaccineDetails = action.payload;
    },
  },
});

export default vaccineSlice;
export const vaccineActions = vaccineSlice.actions;

export const sentVaccineData = (data) => {
  return (dispatch) => {
    postData(
      vaccineRegistraion,
      JSON.stringify(data),
      token,
      (onSuccess) => {
        console.log(onSuccess, "onSuccess");
        dispatch(vaccineActions.sentVaccineDetails(onSuccess.data));
      },
      (onFail) => {
        console.log(onFail, "onFail");
      }
    );
  };
};

export const receiveVaccineData = () => {
  return (dispatch) => {
    getDataWithNoParams(
      allVaccines,
      token,
      (onSuccess) => {
        console.log(onSuccess, "success");
        dispatch(vaccineActions.getVaccineData(onSuccess.data.object));
      },
      (onFail) => {
        console.log(onFail, "onFail");
      }
    );
  };
};
