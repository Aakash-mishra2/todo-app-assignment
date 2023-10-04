import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    userName: 'User',
    email: '',
    password: '',
    isLoggedIn : false,
}
const userSlice = createSlice({
    name: 'userAccount',
    initialState,
    reducer: {
        login: (state, actions) => {
            state.userName = actions.payload.name;
            state.email = actions.payload.mail;
            state.password = actions.payload.password;
            state.isLoggedIn = true;
        },
        logout : (state) => {
            state.isLoggedIn = false;
            state.userName = 'User';
            state.email = '';
            state.password = '';
        },
    }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;