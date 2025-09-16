import {configureStore} from "@reduxjs/toolkit"
import customerReducer from './customerSlice';
import productSlice from './productSlice';
import spareslice from './SpareSlice';
import userDataSlice from './userDataSlice'

export const store = configureStore({
    devTools:true,
    reducer:{
        customer: customerReducer,
        product: productSlice,
        userData: userDataSlice
    }
})