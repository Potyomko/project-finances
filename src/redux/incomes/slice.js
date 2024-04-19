import { createSlice } from "@reduxjs/toolkit"
import { addIncome, deleteIncome, getIncomes } from "./operations"

const slice = createSlice({
    name: 'incomesSlice',
    initialState: {
        incomes: [],
        error: null,
        isLoading: false,
    },
    extraReducers(builder){
        builder
            .addCase(getIncomes.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getIncomes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.incomes = action.payload.incomes
            })
            .addCase(getIncomes.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error;
            })
            .addCase(addIncome.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addIncome.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.incomes = action.payload.incomes
            })
            .addCase(addIncome.rejected, (state, action) => {
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
                state.incomes = action.payload.incomes
            })
            .addCase(deleteIncome.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error;
            })
    }
})

export const incomesReducer = slice.reducer