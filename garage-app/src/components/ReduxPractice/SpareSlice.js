import { createSlice } from "@reduxjs/toolkit";


const initialState = [];
const spareSlice = createSlice({
    name: "createSlice",
    initialState: initialState,
    reducers:{
        addSpare(state, action){
            state.push(action.payload);
        },
        updateSpare(state, action){
            return state.map((staten) => staten.name === action.payload.name ? action.payload : staten );
        }, 
        removeSpare(state, action){
            return state.filter(statef => statef.name !== action.payload.name);
        }
    }

})

export const {addSpare, updateSpare, removeSpare} = spareSlice.actions;
export default spareSlice.reducer