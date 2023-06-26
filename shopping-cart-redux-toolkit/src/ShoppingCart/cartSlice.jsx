import { createSlice } from "@reduxjs/toolkit";

const initialState=[]
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state,action){
            //add
        },
        removeFromCart(state,action){
            //logic
        }
    }
})

export const {add,removeFromCart}= cartSlice.actions;
export default cartSlice.reducer


//start from 40 video 22/06/2023