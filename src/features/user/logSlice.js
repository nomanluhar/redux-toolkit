// src/features/log/logSlice.js
import { createSlice } from "@reduxjs/toolkit";

const logSlice = createSlice({
  name: "log",
  initialState: [],
  reducers: {
    logDetails: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { logDetails } = logSlice.actions;

export default logSlice.reducer;
