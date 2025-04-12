//configure the store

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import leadReducer from "./leadSlice";

export const appStore = configureStore({
  reducer: {
    user: userReducer,
    lead: leadReducer,
  },
});

export default appStore;
