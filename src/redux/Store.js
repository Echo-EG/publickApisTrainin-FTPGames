import {configureStore} from "@reduxjs/toolkit";
import ftpGamesReducer from "./Slice";


export const store = configureStore({
    reducer:{
        ftpGamesState: ftpGamesReducer
    }
})