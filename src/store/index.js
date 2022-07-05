import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { cartReducer } from './carReducer'
import { uiReducer } from './uiReducer';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        ui: uiReducer,
    }
});

const StoreComponent = ({children})=>{
    return (
        <Provider store={store}>    
            {children}
        </Provider>
    )
}

export { StoreComponent }