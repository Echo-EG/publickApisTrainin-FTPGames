import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const host = "free-to-play-games-database.p.rapidapi.com"
const key = "9d2276bf14msh1d2a9c52bce377dp141e96jsn37ab4ea01f23"


export const ftpGamesListAsync = createAsyncThunk(
    "getList/ftpGamesListAsync",
    async () =>{
        const response = await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": host,
                "x-rapidapi-key": key
            }
        })
        if(response.ok){
            const listForSplice = await response.json();
            const gamesList = [...listForSplice].splice(0, 20);
            return {gamesList}
        }
    }
)

export const gamesByPlatformAsync = createAsyncThunk(
    'byPlatform/gamesByPlatformAsync',
    async (payload) =>{
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${payload.platform}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": host,
                "x-rapidapi-key": key
            }
        })
        if(response.ok){
            // const searched = response.json();
            // return searched;
            // return await response.json()
            const listForSplice = await response.json();
            const gamesByPlatform = [...listForSplice].splice(0, 20);
            return {gamesByPlatform}
        }
    }
)



export const ftpGamesSlice = createSlice({
    name: "ftpGamesSlice",
    initialState: [],

    reducers:{

    },
    extraReducers: (builder) =>{
        builder.addCase(ftpGamesListAsync.fulfilled, (state, action) =>{
            return action.payload.gamesList;
        })
        builder.addCase(gamesByPlatformAsync.fulfilled, (state, action)=>{
            return action.payload.gamesByPlatform;
        })
    }
})

export default ftpGamesSlice.reducer;