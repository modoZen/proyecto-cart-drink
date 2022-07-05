import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    openModal:false
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers:{
        toogleModal:(state,action)=>{
            state.openModal = !state.openModal
        },
    }
})

export const { toogleModal } = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
