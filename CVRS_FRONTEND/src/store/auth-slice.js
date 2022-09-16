import { createSlice } from "@reduxjs/toolkit";
import { postDataWithoutToken } from "../components/Global/http";
import { postData } from "../components/Global/http";
import { login, signup } from "../components/Global/Links";

const token = localStorage.getItem("token");
const authSlice = createSlice({
  name: "Authentication",
  initialState: {
    token: "",
    isLoggedIn: false,
    signupData: null,
    notLoggedIn: null,
  },
  reducers: {
    login(state, action) {
      const token = action.payload.token;
      const admin = action.payload.admin;
      localStorage.setItem("token", token);
      localStorage.setItem("admin", admin);
      localStorage.setItem("isLoggedIn", true);
      console.log(token, "generated Token");
      state.token = token;
      state.isLoggedIn = true;
    },
    errorLogin(state, action) {
      state.notLoggedIn = action.payload;
      console.log(state.notLoggedIn.error, "not logged in error");
    },
    logout(state) {
      localStorage.removeItem("token");
      localStorage.removeItem("isLoggedIn");
      state.token = "";
      state.isLoggedIn = false;
      console.log(
        state.token,
        state.isLoggedIn,
        "generated Token and isLoggedIn"
      );
    },
    signup(state, action) {
      state.signupData = action.payload;
    },
  },
});

export const sentLoginData = (data) => {
  return (dispatch) => {
    postDataWithoutToken(
      login,
      JSON.stringify(data),
      (onSuccess) => {
        const jwt = onSuccess.data.object.jwttoken;
        const token = "Bearer " + jwt;
        const tokenAndAdmin = {
          token: token,
          admin: data.username,
        };
        console.log(token, "token");
        dispatch(authActions.login(tokenAndAdmin));
      },
      (onFail) => {
        console.log(onFail, "onFail");
        // if(onFail)
      }
    );
  };
};

export const sentSignUpData = (data) => {
  return (dispatch) => {
    postData(
      signup,
      JSON.stringify(data),
      token,
      (onSuccess) => {
        console.log(onSuccess, "onSuccess");
        dispatch(authActions.signup(onSuccess.data));
      },
      (onFail) => {
        console.log(onFail, "onFail");
      }
    );
  };
};
export const authActions = authSlice.actions;
export default authSlice;
