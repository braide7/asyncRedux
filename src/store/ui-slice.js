import { createSlice } from "@reduxjs/toolkit";

createSlice({
    name: 'ui',
    initialState: { cartIsVisible: false },
    reducers: {
        toggleCart(state){
            state.cartIsVisible = !state.cartIsVisible
        }
    }
});