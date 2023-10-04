import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../features/boardSlice";
import userReducer from "../features/accountSlice";

export const store = configureStore({
    reducer: {
        boards: listReducer,
        userAccount: userReducer,
    }
});