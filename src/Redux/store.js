import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";

const myStore = configureStore({
  reducer: UserReducer,
});

export default myStore;
