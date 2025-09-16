import { createSlice } from "@reduxjs/toolkit";

const intialState = [];
const userDataSlice = createSlice({
    name: "userDataSlice",
    initialState: intialState,
    reducers: {
        addUserData(state, action){
        state.push(action.payload);
    },

    updateUserData(state, action){
        return state.map((staten) => staten.name === action.payload.name ? action.payload : staten
        )    },

     deleteUserData(state, action){
        return state.filter((statef) => statef.name !== action.payload.name);
     }   
}
})

export const {addUserData,updateUserData,deleteUserData } = userDataSlice.actions;
export default userDataSlice.reducer;