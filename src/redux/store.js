// store.js
import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducers";

const store = configureStore({
  reducer: {
    jobs: reducer,
  },
});

export default store;
