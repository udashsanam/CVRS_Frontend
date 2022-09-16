import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import citizenSlice from "./citizen-slice";
import vaccineSlice from "./vaccine-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    citizen: citizenSlice.reducer,
    vaccine: vaccineSlice.reducer
  },
});

export default store;
