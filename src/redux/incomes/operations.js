import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getIncomes = createAsyncThunk('incomes/getIncomes', async (body) => {
    try {
        const res = await axios.post(`http://localhost:5000/getIncomes`, body)
        return res.data;
    } catch (error) {
        throw new Error(error)
    }
})

export const addIncome = createAsyncThunk('incomes/addIncome', async (body) => {
    try {
        const res = await axios.post(`http://localhost:5000/addIncome`, body)
        return res.data;
    } catch (error) {
        throw new Error(error)
    }
})

export const deleteIncome = createAsyncThunk('incomes/deleteIncome', async (body) => {
    const { incomeId } = body
    try {
        const res = await axios.post(`http://localhost:5000/deleteIncome/${incomeId}`, body)
        return res.data;
    } catch (error) {
        throw new Error(error)
    }
})

export const addCat = createAsyncThunk('incomes/addCat', async (body) => {
    return body;
})