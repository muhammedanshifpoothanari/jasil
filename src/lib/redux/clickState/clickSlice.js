import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    clicked: '',
    persona: '',
    jobType: 'All',
    jobPersona: 'individual',
    toggle: false
}

const clickSlice = createSlice({
    name: "clickState",
    initialState,
    reducers: {
        setClickStateReducer(state, action) {
            if(action.payload.clicked) {
                state.clicked = action.payload.clicked;
            }
            if(action.payload.persona) {
                state.persona = action.payload.persona;
            }
            if(action.payload.jobType) {
                state.jobType = action.payload.jobType;
            }
            if(action.payload.jobPersona) {
                state.jobPersona = action.payload.jobPersona;
            }
            if (action.payload.toggle !== undefined) {
                state.toggle = action.payload.toggle;
              } else {
                state.toggle = !state.toggle;
              }
        },
    }
})

export const { setClickStateReducer } = clickSlice.actions
export const clickReducer = clickSlice.reducer;
