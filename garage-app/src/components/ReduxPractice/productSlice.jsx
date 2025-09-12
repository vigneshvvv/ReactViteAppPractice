import { createSlice } from "@reduxjs/toolkit";

let intialState = []

const productSlice = createSlice({
    name: "product",
    initialState: intialState,
    reducers:{
        addproduct(state, action){
            state.push(action.payload);
        },
        updateproduct(state, action){
             return state.map(staten => 
               staten.name === action.payload.name ? action.payload : staten
             );
        },
        removeproduct(state, action){
            return state.filter(staten1 => staten1.name !== action.payload.name);
        }
    }

})

export const {addproduct, updateproduct,removeproduct} = productSlice.actions;
export default productSlice.reducer