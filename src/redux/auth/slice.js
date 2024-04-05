import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: 'authSlice',
    initialState: {
        user: null,
        isLoggedIn: false,
        error: null,
        token: null,
    }
})

export const authReducer = slice.reducer