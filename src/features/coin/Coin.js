import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import CoinComponent from './CoinComponent'
import { selectCoins, setcoins, getCoins } from './coinSlice'
function Coin() {
    const coin = useSelector(selectCoins)
    const dispatch = useDispatch();

    const fetchCoin = async () => {
        const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        console.log(res.data)
        dispatch(setcoins(res.data))
        console.log(coin)
    }
    useEffect(() => { 
        dispatch(getCoins())
    }, [dispatch])
    return (
        <div>Hey this is the coin
            {coin.map(coin => (
                <div key={coin.id}>Hey</div>
            ))}
        </div>
        
    )
}

export default Coin
