import { createSlice } from "@reduxjs/toolkit";
import lang from "./langconstants";

const configSlice = createSlice({
    name: "config",
    initialState: {
        lang: "en",
    },
    reducers:{
        changeLang: (state, action) => {
            state.lang = action.payload;
        }
    },
})

export const {changeLang} = configSlice.actions;
export default configSlice.reducer;