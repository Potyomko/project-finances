import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: 'incomesSlice',
    initialState: {
        incomes: [],
        error: null,
        isLoading: false,
    }
})

export const incomesReducer = slice.reducer