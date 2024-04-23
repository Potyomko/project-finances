import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getBalance = createAsyncThunk('balance/getBalance', async (body) => {
    try {
        const res = await axios.post(`http://localhost:5000/getBalance`, body)
        return res.data;
    } catch (error) {
        throw new Error(error)
    }
})

export const changeBalance = createAsyncThunk('balance/changeBalance', async (body) => {
    try {
        const res = await axios.post(`http://localhost:5000/changeBalance`, body)
        return res.data;
    } catch (error) {
        throw new Error(error)
    }
})