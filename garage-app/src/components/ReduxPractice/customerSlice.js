import { createSlice } from "@reduxjs/toolkit";

const intialState = [];

const customerSlice = createSlice({
    name: 'customer',
    initialState: intialState,
    reducers: {
        addCustomer(state, action){
            state.push(action.payload)
        }
    }

})

export const {addCustomer} = customerSlice.actions;
export default customerSlice.reducer