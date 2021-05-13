import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CoinComponent from './CoinComponent'
import { selectCoins, setcoins } from './coinSlice'
function Coin() {
    const coin = useSelector(selectCoins)
    const dispatch = useDispatch();

    const fetchCoin = async () => {
        const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        console.log(res.data)
        dispatch(setcoins)
        console.log(coin)
    }
    useEffect(() => { 
        fetchCoin()
    }, [])
    return (
        <div>Hey this is the coin
            {coin}
        </div>
        
    )
}

export default Coin