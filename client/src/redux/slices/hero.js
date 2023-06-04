import {createSlice} from '@reduxjs/toolkit'
import { addHero, deleteHero, fetchHeros, updateHero } from '../operations'
import axios from '../../axios-queries'
const initialState = {
    hero:{
        items:[],
        status:"loading",
    },
    page:1
}


export const heroSlice = createSlice({
    name:'hero',
    initialState,
    reducers:{
        incrementPage:(state) =>{
            state.page = state.page+1;
        }
    },
    extraReducers:{
        [fetchHeros.pending]:(state)=>{
            state.hero.status = "loading";
        },
        [fetchHeros.fulfilled]:(state,action)=>{
            state.hero.status = "loaded";
            if (state.page === 1) {
                state.hero.items = action.payload;
              } else {
                state.hero.items = state.hero.items.concat(action.payload);
              }
        },
        [fetchHeros.rejected]:(state)=>{
            state.hero.status = "error";
        },
        //----------------------------------
        [addHero.pending]:(state)=>{
            state.hero.status = "loading";
        },
        [addHero.fulfilled]:(state,action)=>{
            state.hero.status = "loaded";
            state.hero.items.push(action.meta.arg)
        },
        [addHero.rejected]:(state)=>{
            state.hero.status = "error";
        },
        //----------------------------------
        [updateHero.pending]:(state)=>{
            state.hero.status = "loading";
        },
        [updateHero.fulfilled]:(state)=>{
            state.hero.status = "loaded";
        },
        [updateHero.rejected]:(state)=>{
            state.hero.status = "error";
        },
        //----------------------------------
        [deleteHero.pending]:(state)=>{
            state.hero.status = "loading";
        },
        [deleteHero.fulfilled]:(state,action)=>{
            state.hero.status = state.hero.items.filter(item=>item._id !== action.meta.arg);
        },
        [deleteHero.rejected]:(state)=>{
            state.hero.status = "error";
        },
    },
})

export const heroReducer = heroSlice.reducer;
export const {incrementPage} = heroSlice.actions;