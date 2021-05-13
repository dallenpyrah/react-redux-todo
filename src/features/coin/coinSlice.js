import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const initialState = {
    allCoins: []
}

export const getCoins = createAsyncThunk('coins/getcoins', async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    console.log(res.data)
    return res.data
})


export const coinSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {
        // setcoins: (state, action) => {
        //     state.push(action.payload)
        // }
        // This does not work only gets data and puts first item in the array use the below solution 
    },
    extraReducers: {
        [getCoins.fulfilled.toString()]: (state, { payload }) => {
            state.allCoins = payload
        }
    }
})

export const selectCoins = (state) => state.coins.allCoins
// export const { setcoins } = coinSlice.actions

export default coinSlice.reducer