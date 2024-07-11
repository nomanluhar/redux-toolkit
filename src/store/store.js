import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import authReducer from "../features/user/authSlice";
import logReducer from "../features/user/logSlice";
import userReducer from "../features/user/userSlice";
import rootSaga from "../features/user/sagaFunction";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    todoReducer,
    authReducer,
    logReducer,
    userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);