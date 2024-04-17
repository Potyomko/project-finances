import { createSlice } from "@reduxjs/toolkit"
import { login, logout, register } from "./operations"

const slice = createSlice({
    name: 'authSlice',
    initialState: {
        user: null,
        isLoggedIn: false,
        error: null,
        token: null,
    },
    extraReducers(builder){
        builder
        .addCase(login.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.error = null;
            state.user = action.payload.user;
            state.token = action.payload.token;
        })
        .addCase(login.rejected, (state, action) => {
            state.error = action.error;
            state.isLoggedIn = false;
        })
        .addCase(register.fulfilled, (state, action) => {
            state.error = null;
        })
        .addCase(register.rejected, (state, action) => {
            state.error = action.error;
        })
        .addCase(logout.fulfilled, (state) => {
            state.isLoggedIn = false;
            state.error = null;
            state.user = null;
            state.token = null;
        })
        .addCase(logout.rejected, (state, action) => {
            state.error = action.error;
        })
    }
})

export const authReducer = slice.reducer