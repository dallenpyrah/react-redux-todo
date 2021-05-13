import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    coins: []
}


export const coinSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {
        setcoins: (state, action) => {
            state.coins = action.payload
        }
    }
})

export const selectCoins = (state) => state.coins
export const { setcoins } = coinSlice.actions

export default coinSlice.reducer