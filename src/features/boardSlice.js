import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
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
            id: (uuidv4()),
            name: 'Sample Board',
            date: '28 Sep, 23',
            leftTodo: ["Do Assignments", "Finish dsa repo.", "Submit report"],
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
            const activeBoard = action.payload.boardID;
            const selectedBoard = state.boards.findIndex((x) => x.id === activeBoard);
            state.boards[selectedBoard].leftTodo.push(newTask);
        },
        deleteTodo: (state, action)=>{
            const delTask = action.payload.taskName;
            const activeBoard = action.payload.boardID;
            const selectedBoard = state.boards.findIndex((x) => x.id === activeBoard);
            state.boards[selectedBoard].leftTodo = state.boards[selectedBoard].leftTodo.filter((item) => item !== delTask);
        },
        completeTodo: (state, action) => {
            const delTask = action.payload.taskName;
            const activeBoard = action.payload.boardID;
            const selectedBoard = state.boards.findIndex((x) => x.id === activeBoard);
            state.boards[selectedBoard].leftTodo = state.boards[selectedBoard].leftTodo.filter((item) => item !== delTask);
            state.boards[selectedBoard].doneTodo.push(delTask);
            state.boards[selectedBoard].doneTodo.reverse();
        },
        createBoard: (state, action) => {
            const id = action.payload.id;
            const date = action.payload.date;
            const name = action.payload.name;
            const incompleteTasks = action.payload.todo;
            const newBoard = {
                id: id, 
                name: name,
                date: date, 
                leftTodo: incompleteTasks,
                doneTodo: [],
            };
            state = state.boards.push(newBoard);
        },
        deleteBoard: (state,action) => {
            const delID = action.payload.id;
            const selectedBoard = state.boards.findIndex((b) => b.id === delID);
            state.boards.splice(selectedBoard, 1);
        }
    }
});

export const { addTodo, deleteTodo, completeTodo, createBoard, deleteBoard } = boardSlice.actions;
export default boardSlice.reducer;