import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../axios-queries';

export const fetchHeros = createAsyncThunk('hero/fetchAll',async (page) =>{
    const {data} = await axios.get(`/hero/${page}`);
    console.log(data);
    return data; 
})

export const addHero = createAsyncThunk('hero/addHero', async (hero) =>{
    const {data} = await axios.post('/hero',hero);
    return data;
})

export const updateHero = createAsyncThunk('hero/updateHero', async (id,hero) =>{
    const {data} = await axios.patch(`/hero/${id}`,hero);
    return data;
})

export const deleteHero = createAsyncThunk('hero/deleteHero', async (id) =>{
    const {data} = await axios.delete(`/hero/${id}`);
    return data;
})