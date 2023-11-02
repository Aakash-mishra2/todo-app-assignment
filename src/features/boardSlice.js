import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
const initialState = {
    boards: [
        {
            id: (uuidv4()),
            name: 'New User Guide',
            date: '28 Sep, 23',
            leftTodo: [
                "Enter new todo from top bar",
                " Click checkbox for finished task", 
                "Click X to delete this Todo", 
                "Press DELETE to remove this board."
                ],
            doneTodo: []
        },
    ],
};

const boardSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const bID = action.payload.boardID;
            const newTask = action.payload.taskName;
            const selBoardIndex = state.boards.findIndex((item) => item.id === bID);
            state.boards[selBoardIndex].leftTodo.push(newTask);
        },
        deleteTodo1: (state, action)=>{
            
        },
        deleteTodo2: (state, action) =>{
            
        },
        completeTodo: (state, action) => {
            const selBoard = state.boards.findIndex((item) => item.id === action.payload.boardID);
            const finishedTask = action.payload.taskName;
            state.boards[selBoard].leftTodo.filter( item => item !== finishedTask);
            state.boards[selBoard].doneTodo.push(finishedTask);
        },
        createBoard: (state, action) => {
            
        },
        deleteBoard: (state,action) => {
            
        }
    }
});

export const { addTodo, deleteTodo1, deleteTodo2, completeTodo, createBoard, deleteBoard } = boardSlice.actions;
export default boardSlice.reducer;