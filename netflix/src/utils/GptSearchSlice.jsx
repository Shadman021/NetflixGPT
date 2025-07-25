import { createSlice } from "@reduxjs/toolkit";

const GptSearchSlice = createSlice({
    name:"GptSearch",
    initialState:{
        GptSearchView: false,
        langBtnVisible: false,
        geminimovies: null,
        moviesName: null,
    },
    reducers:{
        setGptSearch: (state)=>{
            state.GptSearchView = !state.GptSearchView;
        },
        setLangBtnVisible: (state)=>{
            state.langBtnVisible = !state.langBtnVisible;
        },
        setGeminiMovies: (state, action)=>{
            const {geminimovies, moviesName} = action.payload;
            state.geminimovies = geminimovies;
            state.moviesName = moviesName;
        }

    }
})
export const {setGptSearch, setLangBtnVisible, setGeminiMovies} = GptSearchSlice.actions;
export default GptSearchSlice.reducer;