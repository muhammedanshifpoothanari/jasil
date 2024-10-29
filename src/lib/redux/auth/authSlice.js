import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
}

const authSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        setAuthReducer(state, action) {
           state.token = action.payload.token;
        },
    }
})


export const { setAuthReducer } = authSlice.actions
export const authReducer = authSlice.reducer;