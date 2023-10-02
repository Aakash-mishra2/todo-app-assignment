import { createSlice } from "@reduxjs/toolkit";

// const initialState = [
//     {
//     name: '',
//     totalTodo: 0,
//     completedTodo: 0,
//     tasks: [],
//     },
// ];
const initialState = {
    boards: [],
}

const boardSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {
        addTodo: {},
        deleteTodo: {},
        createBoard: {},
        deleteBoard: {}
    }
});

export const { addTodo, deleteTodo, createBoard, deleteBoard } = boardSlice.actions;
export default boardSlice.reducer;