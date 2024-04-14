import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: 'incomesSlice',
    initialState: {
        incomes: 10000,
        error: null,
        isLoading: false,
    }
})

export const incomesReducer = slice.reducer