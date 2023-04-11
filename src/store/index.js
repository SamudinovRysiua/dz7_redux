import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

const reducer = combineReducers({
  todoSlice,
});

export const store = configureStore({
  reducer,
});
