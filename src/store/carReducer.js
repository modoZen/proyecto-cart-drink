import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    list:[]
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addProduct:(state,action)=>{
            state.list.push(action.payload)
        },
        deleteProduct:(state,action)=>{
            state.list = state.list.filter(item=>item.idDrink != action.payload.idDrink)
        },
        clearProducs:(state,action)=>{
            state.list = []
        }
    }
})

export const { addProduct, deleteProduct, clearProducs } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
