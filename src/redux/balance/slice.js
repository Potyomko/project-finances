import { createSlice } from "@reduxjs/toolkit"
import { changeBalance, getBalance } from "./operations";
import { logout } from "../../redux/auth/operations";

const slice = createSlice({
    name: 'balanceSlice',
    initialState: {
        balance: 0,
        error: null,
        isLoading: false,
    },
    extraReducers(builder){
        builder
            .addCase(getBalance.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getBalance.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.balance = action.payload.balance
            })
            .addCase(getBalance.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error;
            })
            .addCase(changeBalance.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(changeBalance.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.balance = action.payload.balance
            })
            .addCase(changeBalance.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error;
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.balance = 0;
            })
    }
})

export const balanceReducer = slice.reducer