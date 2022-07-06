import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    openModal:false,
    openOrders: false
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers:{
        toogleModal:(state,action)=>{
            state.openModal = !state.openModal
        },
        toggleOrders:(state,action)=>{
            state.openOrders = !state.openOrders
        }
    }
})

export const { toogleModal, toggleOrders } = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
