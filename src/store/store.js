import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import authReducer from "../features/user/userSlice";
import logReducer from "../features/user/logSlice"

export const store = configureStore({
  reducer: {
    todoReducer,
    authReducer,
    logReducer
  },
});
