import { createSlice } from "@reduxjs/toolkit";
import {
  getData,
  getDataWithNoParams,
  postData,
  postDataWithoutToken,
} from "../components/Global/http";
import {
  allCitizens,
  changeStatus,
  citizenVaccineStatus,
  registerCitizen,
} from "../components/Global/Links";

const token = localStorage.getItem("token");
console.log(token, "token");

const citizenSlice = createSlice({
  name: "citizen",
  initialState: {
    postCitizenResponse: null,
    getCitizenDetails: [],
    vaccineStatus: [],
    particularCitizen: {},
  },
  reducers: {
    sentCitizenDetails(state, action) {
      state.postCitizenResponse = action.payload;
    },
    getCitizenData(state, action) {
      state.getCitizenDetails = action.payload;
    },
    changeVaccineStatus(state, action) {
      state.vaccineStatus = action.payload;
    },
    newCitizenRegister(state) {
      state.postCitizenResponse = null;
    },
    getPerticularCitizen(state, action) {
      state.particularCitizen = action.payload;
    },
  },
});

export default citizenSlice;
export const citizenActions = citizenSlice.actions;

export const sentCitizenData = (data) => {
  return (dispatch) => {
    postDataWithoutToken(
      registerCitizen,
      JSON.stringify(data),
      (onSuccess) => {
        console.log(onSuccess, "onSuccess");
        dispatch(citizenActions.sentCitizenDetails(onSuccess.data));
      },
      (onFail) => {
        console.log(onFail, "onFail");
      }
    );
  };
};

export const receiveCitizenData = () => {
  return (dispatch) => {
    getDataWithNoParams(
      allCitizens,
      token,
      (onSuccess) => {
        console.log(onSuccess, "success");
        dispatch(citizenActions.getCitizenData(onSuccess.data.object));
      },
      (onFail) => {}
    );
  };
};

export const changeCitizenStatus = (values) => {
  return (dispatch) => {
    postData(
      changeStatus,
      JSON.stringify(values),
      token,
      (onSuccess) => {
        console.log(onSuccess, "success");
        dispatch(citizenActions.getCitizenData(onSuccess.data.object));
      },
      (onFail) => {
        console.log(onFail, "onFail");
      }
    );
  };
};

export const getVaccineStatus = (values) => {
  return (dispatch) => {
    getData(
      citizenVaccineStatus + values,
      (onSuccess) => {
        console.log(onSuccess, "success");
        dispatch(citizenActions.getPerticularCitizen(onSuccess.data));
      },
      (onFail) => {
        console.log(onFail, "onFail");
      }
    );
  };
};

export const forNewCitizenRegistration = () => {
  return (dispatch) => {
    dispatch(citizenActions.newCitizenRegister());
  };
};
