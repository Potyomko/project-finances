import { createSlice } from "@reduxjs/toolkit"
import { changeBalance, getBalance } from "./operations";
import { logout } from "../../redux/auth/operations";
import { addIncome, deleteIncome } from "../../redux/incomes/operations";
import { addSpending, deleteSpending } from "../../redux/spendings/operations";

const slice = createSlice({
    name: 'balanceSlice',
    initialState: {
        balance: 100, 
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
            .addCase(addIncome.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addIncome.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.balance = action.payload.user.balance
            })
            .addCase(addIncome.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error;
            })
            .addCase(addSpending.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addSpending.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.balance = action.payload.user.balance
            })
            .addCase(addSpending.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error;
            })
            .addCase(deleteIncome.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(deleteIncome.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.balance = action.payload.user.balance
            })
            .addCase(deleteIncome.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error;
            })
            .addCase(deleteSpending.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(deleteSpending.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.balance = action.payload.user.balance
            })
            .addCase(deleteSpending.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error;
            })
    }
})

export const balanceReducer = slice.reducer