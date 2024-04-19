import { createSlice } from "@reduxjs/toolkit"
import { addSpending, deleteSpending, getSpendings } from "./operations";

const slice = createSlice({
    name: 'spendingsSlice',
    initialState: {
        spendings: [],
        error: null,
        isLoading: false,
    },
    extraReducers(builder){
        builder
            .addCase(getSpendings.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getSpendings.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.spendings = action.payload.spendings
            })
            .addCase(getSpendings.rejected, (state, action) => {
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
                state.spendings = action.payload.spendings
            })
            .addCase(addSpending.rejected, (state, action) => {
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
                state.spendings = action.payload.spendings
            })
            .addCase(deleteSpending.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error;
            })
    }
})

export const spendingsReducer = slice.reducer