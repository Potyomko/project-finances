import { createSlice } from "@reduxjs/toolkit"
import { errorUpdate, login, logout, register } from "./operations"
import { addIncome, deleteIncome } from "../../redux/incomes/operations"
import { addSpending, deleteSpending } from "../../redux/spendings/operations"

const slice = createSlice({
    name: 'authSlice',
    initialState: {
        user: null,
        isLoggedIn: false,
        error: null,
        token: null,
    },
    reducers: {
        errorUpdate(state){
          return state.error = null
        }
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
        .addCase(errorUpdate.fulfilled, (state) => {
            state.error = null;
        })
        .addCase(addIncome.fulfilled, (state, action) => {
            state.error = null;
            state.user = action.payload.user
        })
        .addCase(deleteIncome.fulfilled, (state, action) => {
            state.error = null;
            state.user = action.payload.user
        })
        .addCase(addSpending.fulfilled, (state, action) => {
            state.error = null;
            state.user = action.payload.user
        })
        .addCase(deleteSpending.fulfilled, (state, action) => {
            state.error = null;
            state.user = action.payload.user
        })
    }
})
export const authReducer = slice.reducer