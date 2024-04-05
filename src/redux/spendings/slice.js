import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: 'spendingsSlice',
    initialState: {
        spendings: [],
        error: null,
        isLoading: false,
    }
})

export const spendingsReducer = slice.reducer