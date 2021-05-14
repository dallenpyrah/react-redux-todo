import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import CoinComponent from './CoinComponent'
import { selectCoins, getCoins } from './coinSlice'
function Coin() {
    const coin = useSelector(selectCoins)
    const dispatch = useDispatch();
    useEffect(() => { 
        dispatch(getCoins())
    }, [dispatch])
    return (
        <div>Hey this is the coin
            {coin.map(coin => (
                <div key={coin.id}>{coin.name} {coin.symbol.toUpperCase()}</div>
            ))}
        </div>
        
    )
}

export default Coin
