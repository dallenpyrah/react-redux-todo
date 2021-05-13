import { createSlice } from "@reduxjs/toolkit"


const initialState = []


export const coinSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {
        setcoins: (state, action) => {
            state.push(action.payload)
        },
    }
})

export const selectCoins = (state) => state.coins
export const { setcoins } = coinSlice.actions

export default coinSlice.reducer