import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './movieSlice';


const Store = configureStore({
    reducer: {
        movie: movieReducer
    }
})

export default Store;