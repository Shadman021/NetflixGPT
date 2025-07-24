import { createSlice } from "@reduxjs/toolkit";

const GptSearchSlice = createSlice({
    name:"GptSearch",
    initialState:{
        GptSearchView: false,
        langBtnVisible: false,
    },
    reducers:{
        setGptSearch: (state)=>{
            state.GptSearchView = !state.GptSearchView;
        },
        setLangBtnVisible: (state)=>{
            state.langBtnVisible = !state.langBtnVisible;
        }
    }
})
export const {setGptSearch, setLangBtnVisible} = GptSearchSlice.actions;
export default GptSearchSlice.reducer;