import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../utils/userSlice';
import moviesReducer from '../utils/moviesSlice';
import GptSearchReduce from '../utils/GptSearchSlice';
import configSliceReduce from '../utils/configSlice';
const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer,
            GptSearch: GptSearchReduce,
            config: configSliceReduce,
        },
    }
)
export default appStore