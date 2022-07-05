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
        }
    }
})

export const { addProduct, deleteProduct } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
