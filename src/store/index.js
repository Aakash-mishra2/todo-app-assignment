import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../features/boardSlice";

export const store = configureStore({
    reducer: {
        boards: listReducer,
    }
});