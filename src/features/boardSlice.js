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
    boards: [
        {
            id: 'c2',
            date: '25 June',
            leftTodo: ["tomato", "spinach"],
            doneTodo: []
        }
    ],
};

const boardSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTask = action.payload.taskName;
            const activeBoard = action.payload.boardName;
            const selectedBoard = state.boards.findIndex((x) => x.id === activeBoard);
            state.boards[selectedBoard].leftTodo.push(newTask);
        },
        deleteTodo: (state, action)=>{
            const delTask = action.payload.taskName;
            const activeBoard = action.payload.boardName;
            const selectedBoard = state.boards.findIndex((x) => x.id === activeBoard);
            state.boards[selectedBoard].leftTodo = state.boards[selectedBoard].leftTodo.filter((item) => item !== delTask);
        },
        completeTodo: (state, action) => {
            const delTask = action.payload.taskName;
            const activeBoard = action.payload.boardName;
            const selectedBoard = state.boards.findIndex((x) => x.id === activeBoard);
            state.boards[selectedBoard].leftTodo = state.boards[selectedBoard].leftTodo.filter((item) => item !== delTask);
            state.boards[selectedBoard].doneTodo.push(delTask);
        },
        createBoard: (state, action) => {
            const id = action.payload.name;
            const date = action.payload.date;
            const incompleteTasks = action.payload.todo;
            const newBoard = {
                id: id, 
                date: date, 
                leftTodo: incompleteTasks,
                doneTodo: [],
            };
            state = state.boards.push(newBoard);
        },
        deleteBoard: {}
    }
});

export const { addTodo, deleteTodo, createBoard, deleteBoard } = boardSlice.actions;
export default boardSlice.reducer;