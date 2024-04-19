import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getSpendings = createAsyncThunk('spendings/getSpendings', async (body) => {
    try {
        const res = await axios.post(`http://localhost:5000/getSpendings`, body)
        return res.data;
    } catch (error) {
        throw new Error(error)
    }
})

export const addSpending = createAsyncThunk('spendings/addSpending', async (body) => {
    try {
        const res = await axios.post(`http://localhost:5000/addSpending`, body)
        return res.data;
    } catch (error) {
        throw new Error(error)
    }
})

export const deleteSpending = createAsyncThunk('spendings/deleteSpending', async (body) => {
    const { spendingId } = body
    try {
        const res = await axios.post(`http://localhost:5000/deleteSpending/${spendingId}`, body)
        return res.data;
    } catch (error) {
        throw new Error(error)
    }
})