import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    userName: 'Guest User',
    email: '',
    password: '',
    isLoggedIn : false,
}
export const userSlice = createSlice({
    name: 'userAccount',
    initialState,
    reducers: {
        login: (state, action) => {
            state.userName = action.payload.name;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.isLoggedIn = !state.isLoggedIn;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.userName = 'Guest User';
            state.email = '';
            state.password = '';
        },
    }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;